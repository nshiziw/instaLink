import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    // this schema will have two participants and messageID
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: []
        }
    ]
}, {timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;