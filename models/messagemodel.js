const mongoose=require("mongoose");

const messageModel = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },
    file: {
        filename: String,
        path: String,
        mimetype: String,
        size: Number
    }
},{timestamps:true});
const Message = mongoose.model("Message", messageModel);
module.exports=Message;