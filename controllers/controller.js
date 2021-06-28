const Post = require('../models/post')

exports.create = async (post) => {
    const postdata = await Post.create(post);
    return postdata;
}

exports.findAll = async () => {
    const list = await Post.find();
    console.log(list)
    return list;
};

exports.find = async (id) => {
    const post = await Post.findById(id);
    return post;
}

exports.update = async (id,post) => {
   const newpost = await Post.findByIdAndUpdate(id,post,{new: true})
   return newpost;
}

exports.remove = async (id) => {
    const post = await Post.findByIdAndDelete(id);
    return post;
}