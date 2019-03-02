const express = require('express')
const bodyParser = require('body-parser');

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) =>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) =>{
  res.end('Will send all promotion to you!');
})
.post((req,res,next) =>{
  res.end('Will add the promotion: '+ req.body.name + 'with details: '+req.body.description);
})
.put((req,res,next) =>{
  res.statusCode=403;
  res.end('PUT operation is not supported on /promotion');
})
.delete((req,res,next) =>{
  res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) =>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) =>{
  res.end('Will send you the details of promotion '+req.params.promoId+' to you');
})
.post((req,res,next) =>{
  res.end('Post operation is not supported on promotion/'+req.params.promoId);
})
.put((req,res,next) =>{
  res.statusCode=403;
  res.end('PUT operation is not supported on /promotion/:'+req.params.promoId);
})
.delete((req,res,next) =>{
  res.end('Deleting the promotion:'+req.params.promoId);
});

module.exports= promoRouter;
