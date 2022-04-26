const express = require('express');
const app =  express()

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/test',(req,res,next)=>{
    req.query.fullname = req.query.fullname.toLowerCase();   
    req.requestTime = Date.now();  
    next();
  })

  app.use('/home',(req,res,next)=>{
    console.log('middleware for home route')
    next()
  })
  
  app.get('/test',(req,res)=>{
    console.log(req.requestTime)
    res.send('full name is ' + req.query.fullname);
  })



app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/HTMLForm/form.html')
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/HTMLForm/home.html')
})

app.get('/success',(req,res)=>{
    res.sendFile(__dirname + '/HTMLForm/success.html')
})

  app.post('/success',(req,res)=>{
      res.sendFile(__dirname + '/HTMLForm/success.html')

  })

  
app.post('/home',(req,res)=>{
    res.sendFile(__dirname + '/HTMLForm/home.html')
})

//  app.post('/success',(req,res)=>{
//        let fname = req.body.username;
//        let email = req.body.email;
//        let password = req.body.password;
//        res.send(fname + email + password);

//    })


app.listen(3000,(e)=>{
    console.log('server started')
})


