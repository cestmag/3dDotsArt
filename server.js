const express= require('express')
const app= express()

app.set('view-engine', 'ejs')

app.use(express.static('views'));

app.get('/',(req, res) =>{
    res.render('recep.ejs')
})
app.get('/gallery',(req, res)=>{
    var version=req.query.ver
    //console.log(version)
    if(version=="static"){
        res.render('indexx.ejs') 
    }else if(version=="dynamic"){
        res.render('index.ejs')
    }
    
})
app.get('/expla',(req, res)=>{
    res.render('expl.ejs')
})

app.listen(process.env.PORT||3000)