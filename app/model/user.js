

module.exports = app => {
    const mongoose = app.mongoose;   // 因为引入了插件
    // 创建了schema
    const Schema = new mongoose.Schema({  // 文章字段
        username: { type: String, unique: true },
        password: String,
    });
    
    //创建model类, ctx上面可以访问到 model类， 业务里面会经常调用 这个类的方法进行增删改查
    return mongoose.model('user', Schema);  // 把model类return出去
}