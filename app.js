
const express = require('express');
const app = express()
const appRouter=require('./Router/appRouter')
const morgan=require('morgan')
const AppError=require(`./error`)
const openAPISpec=require(`./openAPIspec`)
const swaggerUi=require('swagger-ui-express')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan(`dev`))
app.use('/documentation',swaggerUi.serve,swaggerUi.setup(openAPISpec))
app.use('/subscribers',appRouter)
app.all(`*`,(req,res,next)=>{
  next(new AppError(`can't find ${req.originalUrl} on this server`),404)
})
app.use((err,req,res,next)=>{
    console.log(err.stack)
    err.statusCode=err.statusCode||500;
    err.status=err.status||'error'
    res.status(err.statusCode).json({
        status:err.statusCode,
        message:err.message
    })
})
module.exports=app;



















module.exports = app;
