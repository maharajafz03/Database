const mongoose = require('mongoose');





async function main(){

     mongoose.connect('mongodb://127.0.0.1:27017/test');

const data = await user.create({name:"kannan", age:53})

}

// console.log(data)

       //OLD WAY 

// const data = new user({
//     name:"kannan",
//     age:53
// })

// data.save().then(()=>{ console.log("data saved")})


