const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: "string",
    description: "string",
    createDate: "date",
    updatedDate: "date",
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const Task = mongoose.model("todos", taskSchema);

module.exports = {
  Task,
};
