const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Bug = require('../models/Bug');
const User = require('../models/User');

// create bug
router.post('/', auth, async (req,res)=>{
  const {title,description,severity} = req.body;
  try{
    const bug = new Bug({title,description,severity, reporter: req.user._id});
    await bug.save();
    res.json(bug);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

// get bugs (with optional filters). Admin sees all.
router.get('/', auth, async (req,res)=>{
  const {status,severity,search} = req.query;
  const q = {};
  if(req.user.role !== 'admin') q.reporter = req.user._id;
  if(status) q.status = status;
  if(severity) q.severity = severity;
  if(search) q.title = { $regex: search, $options: 'i' };
  try{
    const bugs = await Bug.find(q).populate('reporter','name email').sort({createdAt:-1});
    res.json(bugs);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

// update status (admin can update any; reporter only their own)
router.put('/:id/status', auth, async (req,res)=>{
  const {id} = req.params;
  const {status} = req.body;
  try{
    const bug = await Bug.findById(id);
    if(!bug) return res.status(404).json({msg:'Not found'});
    if(req.user.role !== 'admin' && bug.reporter.toString() !== req.user._id.toString()){
      return res.status(403).json({msg:'Forbidden'});
    }
    bug.status = status;
    await bug.save();
    res.json(bug);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
