import Posts from './moduls/Posts.js';
import PostService from './Services/PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.status(200).json(updatedPost);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id);
      return res.status(200).json(deletedPost);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostController();
