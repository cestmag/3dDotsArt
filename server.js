const express= require('express')
const app= express()

app.set('view-engine', 'ejs')

app.use(express.static('views'));

app.get('/',(req, res) =>{
    res.render('recep.ejs')
})
app.get('/gallery',(req, res)=>{
    var version=req.query.ver
    var quality=req.query.qua
    //console.log(version)
    if(version=="static"){
        res.render('indexx.ejs',{quality: quality, versi:version}) 
    }else if(version=="dynamic"){
        res.render('index.ejs',{quality: quality, versi:version})
    }
    
})
app.get('/expla',(req, res)=>{
    var version=req.query.ver
    var quality=req.query.qua
    res.render('expl.ejs',{quality: quality, versi:version})
})

app.listen(process.env.PORT||3000)