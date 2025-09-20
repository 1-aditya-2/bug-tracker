const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = async (req,res,next) => {
  const auth = req.header('Authorization');
  if(!auth) return res.status(401).json({msg:'No token'});
  const token = auth.replace('Bearer ','');
  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-password');
    next();
  }catch(err){
    res.status(401).json({msg:'Invalid token'});
  }
};
