const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Basic", "Intermediate", "Advanced"],
  },
  coursepdf: {
    type: String,
  },
});

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    bullet1: {
      type: String,
      required: true,
    },
    bullet2: {
      type: String,
      required: true,
    },
    bullet3: {
      type: String,
      required: true,
    },
    bullet4: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    videos: [videoSchema], // Array of videos
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);
module.exports = Course;

// const mongoose = require("mongoose");
// const { Schema, model } = mongoose;

// const courseSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },
//     thumbnail: {
//       type: String,
//       required: true,
//     },
//     bullet1: {
//       type: String,
//       required: true,
//     },
//     bullet2: {
//       type: String,
//       required: true,
//     },
//     bullet3: {
//       type: String,
//       required: true,
//     },
//     bullet4: {
//       type: String,
//       required: true,
//     },
//     category:{
//       type:String,
//       required:true,
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

// const Course = model("Course", courseSchema);
// module.exports = Course;
