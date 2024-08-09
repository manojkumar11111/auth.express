// const express=require("express");
//  const app= express();

// app.put("/health", function(req,res){
//    const kidneys=req.body.kidneys;
//  const length=kidneys.length;

// res.send("you have "+length+" kidneys")
// })
// app.listen(3000)


/******************* project 2 ******************/




const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="123456";

const app=express();
app.use(express.json());


const users=[
   {
      username:"manoj12@gamil.com",
      password:"123213",
      name:"manoj"
   },
   {
      username:"bhanu@gamil.com",
      password:"321234",
      name:"bhanu"
   },
   {
      username:"priya23@gmail.com",
      password:"674654",
      name:"priya"
   }
];


function existUsers(username,password){
   for(let i=0;i<=users.length;i++){
      if(users[i]==username && users[i]==password){
         return true
      }
   }
   return false
}



app.post("/signIn", function(req,res){
   const username=req.body.username;
   const password=req.body.password;

   if(!existUsers(username,password)){
      res.json("doesnt exist in database");
   }

   var token=jwt.sign({username:username},"shhhh");
   res.json({
      token,
   });
});

app.get("/user",function(req,res){
   const token=req.headers.authorization;
   try{
      const decode=jwt.verify(token,jwtPassword);
      const username=decode.username;
   }catch(err){
      res.json({
         msg:"invalid token"
      });
   }
});

app.listen(3000);



