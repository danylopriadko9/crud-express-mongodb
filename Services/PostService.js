import Posts from '../moduls/Posts.js';

class PostService {
  async create(post) {
    const createdPost = await Posts.create(post);
    return createdPost;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('Id is not a indicated!');
    }

    const updatedPost = await Posts.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id is not a indicated!');
    }
    const deletedPost = await Posts.findByIdAndDelete(id);
    return deletedPost;
  }

  async getAll() {
    const posts = await Posts.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id is not a indicated!');
    }

    const post = await Posts.findById(id);
    return post;
  }
}

export default new PostService();
