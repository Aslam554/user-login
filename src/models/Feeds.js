import mongoose  from 'mongoose';

const FeedsSchema = new mongoose.Schema({
    post:String,
})

const Feeds = mongoose.models.Feeds || mongoose.model("Feeds",FeedsSchema)

export default Feeds