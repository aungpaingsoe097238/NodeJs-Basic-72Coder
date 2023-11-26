const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true, ref: "post" },
  name : { type: String, require: true },
  email : { type: String, require: true },
  content : { type: String, require: true },
  created : { type: Date, default: Date.now }  
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
