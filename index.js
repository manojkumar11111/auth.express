// const express=require("express");
//  const app= express();

// app.put("/health", function(req,res){
//    const kidneys=req.body.kidneys;
//  const length=kidneys.length;

// res.send("you have "+length+" kidneys")
// })
// app.listen(3000)


/******************* project 2 ******************/




// const express=require("express");
// const jwt=require("jsonwebtoken");
// const jwtPassword="123456";

// const app=express();
// app.use(express.json());


// const users=[
//    {
//       username:"manoj12@gamil.com",
//       password:"123213",
//       name:"manoj"
//    },
//    {
//       username:"bhanu@gamil.com",
//       password:"321234",
//       name:"bhanu"
//    },
//    {
//       username:"priya23@gmail.com",
//       password:"674654",
//       name:"priya"
//    }
// ];


// function existUsers(username,password){
//    for(let i=0;i<=users.length;i++){
//       if(users[i]==username && users[i]==password){
//          return true
//       }
//    }
//    return false
// }



// app.post("/signIn", function(req,res){
//    const username=req.body.username;
//    const password=req.body.password;

//    if(!existUsers(username,password)){
//       res.json("doesnt exist in database");
//    }

//    var token=jwt.sign({username:username},"shhhh");
//    res.json({
//       token,
//    });
// });

// app.get("/user",function(req,res){
//    const token=req.headers.authorization;
//    try{
//       const decode=jwt.verify(token,jwtPassword);
//       const username=decode.username;
//    }catch(err){
//       res.json({
//          msg:"invalid token"
//       });
//    }
// });

// app.listen(3000);

const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { username: "user1@gmail.com", password: "password1", name: "User One" },
  { username: "user2@gmail.com", password: "password2", name: "User Two" },
  { username: "user3@gmail.com", password: "password3", name: "User Three" },
  { username: "user4@gmail.com", password: "password4", name: "User Four" },
  { username: "user5@gmail.com", password: "password5", name: "User Five" },
  { username: "user6@gmail.com", password: "password6", name: "User Six" },
  { username: "user7@gmail.com", password: "password7", name: "User Seven" },
  { username: "user8@gmail.com", password: "password8", name: "User Eight" },
  { username: "user9@gmail.com", password: "password9", name: "User Nine" },
  { username: "user10@gmail.com", password: "password10", name: "User Ten" }
];

// Route to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route to get a single user by username
app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find(u => u.username === username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});

// Route to add a new user
app.post("/users", (req, res) => {
  const { username, password, name } = req.body;
  const userExists = users.some(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
  }
  users.push({ username, password, name });
  res.status(201).json({ msg: "User added" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

