const express = require('express')
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded())
server.use(express.json())
let users = []


// Ändra namet på html filerna om de heter något annat
server.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/' + 'index.html')
})
server.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/public/' + 'login.html')
})
server.get('/signup', (req, res)=>{
    res.sendFile(__dirname + '/public/' + 'signup.html')
})

//Spara till array på server. OBS ifall du startar om servern blir users array tom!!
server.post('/signup', (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    let user = {
        email: email,
        password: password
    }
    users.push(user)
    console.log(users);
    res.sendFile(__dirname + '/public/' + 'login.html')
})
server.post('/login', (req, res)=>{
    const {email, password} = req.body
    users.forEach((user)=>{
        if(user.email == email && user.password == password){
            res.sendFile(__dirname + '/public/' + 'dashboard.html')
        } else {
            res.send('Login faild')
        }
    })

})
server.listen(3000)