const Post = require('../models/Post');

class PostService {
  async getAll() {
    return await Post.find();
  }

  async removeById(id) {
    const post = await Post.findById(id);

    await post.remove();
  }

  async store({ originalname: name, size, key, location: url = '' }) {
    const post = await Post.create({
      name,
      size,
      key,
      url,
    });

    return post;
  }
}

module.exports = new PostService();
