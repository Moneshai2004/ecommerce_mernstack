const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
    })
    .then((con) => {
      console.log(`mongo is connected succesfully :${con.connection.host}`);
    }).catch((err)=>{
        console.log(err) 
    })
};
module.exports=connectDatabase;