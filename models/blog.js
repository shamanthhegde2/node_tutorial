const mongoose = require('mongoose')

schema = mongoose.Schema

const blogSchema = schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const blog = mongoose.model('blog', blogSchema)

module.exports = blog
