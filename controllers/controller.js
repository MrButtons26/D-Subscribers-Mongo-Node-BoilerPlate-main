const mongoose = require('mongoose')
const subscriberModel= require('../models/subscribers')
const AppError=require('../error')


exports.getAllSubs=async(req,res,next)=>{
    try{
    const docs=await subscriberModel.find().select('-__v')
    res.status(200).json({
        status:'success',
        docs:docs
    })
}
catch(e){
 next(e);
}
}

exports.getNames=async(req,res,next)=>{
    try{
  const docs=await subscriberModel.find().select(`name subscribedChannel -_id`)
   res.status(200).json({
        status:'success',
        docs:docs
    })
}
catch(e){
next(e);
}
}

exports.getId=async(req,res,next)=>{
    try{
  const {id}=req.params
  console.log(id)
  const docs=await subscriberModel.findById(id).select('-__v')
  if(!docs){
   return next(new AppError('No tour found with that ID',400))
  }
   res.status(200).json({
        status:'success',
        docs:docs
    })
}
catch(e){
next(e);
}
}