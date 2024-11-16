import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User