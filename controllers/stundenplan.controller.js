const Topic = require('../models/Topic')

exports.create = async (topic) => {
    const topicdata = await Topic.create(topic);
    return topicdata;
}

exports.findAll = async () => {
    const list = await Topic.find();
    console.log(list)
    return list;
};

exports.find = async (id) => {
    const topic = await Topic.findById(id);
    return topic;
}

exports.update = async (id,topic) => {
   const newtopic = await Topic.findByIdAndUpdate(id,topic,{new: true})
   return newtopic;
}

exports.remove = async (id) => {
    const topic = await Topic.findByIdAndDelete(id);
    return topic;
}