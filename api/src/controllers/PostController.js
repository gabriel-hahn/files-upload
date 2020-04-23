const PostService = require('../services/PostService');

class PostController {
  async store(req, res) {
    const post = await PostService.store(req.file);

    return res.json(post);
  }

  async remove(req, res) {
    const { id } = req.params;

    await PostService.removeById(id);

    return res.send();
  }

  async index(req, res) {
    const posts = await PostService.getAll();

    return res.json(posts);
  }
}

module.exports = new PostController();
