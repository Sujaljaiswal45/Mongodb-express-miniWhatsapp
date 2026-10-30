const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res)=>{
    console.log("connection successful");
    
}).catch(err => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChat =  [
    {
        from: "Rahul",
        to: "Amit",
        msg: "Hey Amit, how are you?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Rahul",
        msg: "I'm good! What about you?",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Sneha",
        msg: "Have you completed the assignment?",
        created_at: new Date()
    },
    {
        from: "Sneha",
        to: "Priya",
        msg: "Not yet, I'll finish it today.",
        created_at: new Date()
    },
    {
        from: "Aman",
        to: "Rohit",
        msg: "Let's meet at the library tomorrow.",
        created_at: new Date()
    },
    {
        from: "Rohit",
        to: "Aman",
        msg: "Sure, I'll be there at 10 AM.",
        created_at: new Date()
    },
]

Chat.insertMany(allChat)


