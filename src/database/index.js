import mongoose from 'mongoose'

const connectToDB = async () =>{
  const connectionUrl = "mongodb://127.0.0.1:27017/mylogintest"
  mongoose
  .connect(connectionUrl)
  .then(()=> console.log(`Auth database connected succesfully.`))
  .catch((e)=>console.log(e))

}

export default connectToDB