const express= require('express')
const app= express()

app.set('view-engine', 'ejs')

app.use(express.static('views'));

app.get('/',(req, res) =>{
    res.render('recep.ejs')
})
app.get('/gallery',(req, res)=>{
    res.render('index.ejs')
})

app.listen(process.env.PORT||3000)