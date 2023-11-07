const Post = require('../models/post')

async function getPosts (req, res) {
  try {
    const posts = await Post.find()
    res.json({ posts })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function getPost (req, res) {
  try {
    const id = req.params.id

    const post = await Post.findById(id)

    res.json({ post })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function createPost (req, res) {
  try {
    const { title, content, image, author } = req.body

    const post = await Post.create({ title, content, image, published: Date.now(), author })

    res.json({ post })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function updatePost (req, res) {
  try {
    const id = req.params.id

    const { title, content, image } = req.body

    await Post.findByIdAndUpdate(id, { title, content, image })

    const post = await Post.findById(id)

    res.json({ post })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function deletePost (req, res) {
  try {
    const id = req.params.id

    await Post.findByIdAndDelete(id)

    res.json({ message: 'Post deleted' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost }
