const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// register
router.post('/register', async (req,res)=>{
  const {name,email,password,role} = req.body;
  try{
    let u = await User.findOne({email});
    if(u) return res.status(400).json({msg:'User exists'});
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    u = new User({name,email,password:hash, role: role || 'reporter'});
    await u.save();
    const token = jwt.sign({id:u._id}, process.env.JWT_SECRET, {expiresIn:'7d'});
    res.json({token, user:{name:u.name,email:u.email,role:u.role, id:u._id}});
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

// login
router.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  try{
    const u = await User.findOne({email});
    if(!u) return res.status(400).json({msg:'Invalid credentials'});
    const match = await bcrypt.compare(password, u.password);
    if(!match) return res.status(400).json({msg:'Invalid credentials'});
    const token = jwt.sign({id:u._id}, process.env.JWT_SECRET, {expiresIn:'7d'});
    res.json({token, user:{name:u.name,email:u.email,role:u.role, id:u._id}});
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
