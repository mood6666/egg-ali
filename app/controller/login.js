'use strict';

// const Controller = require('egg').Controller;
const HttpController = require('./base/http');
// GET /posts -> app.controller.posts.index
// GET /posts/new -> app.controller.posts.new
// GET /posts/:id -> app.controller.posts.show
// GET /posts/:id/edit -> app.controller.posts.edit
// POST /posts -> app.controller.posts.create     添加数据
// PUT /posts/:id -> app.controller.posts.update
// DELETE /posts/:id -> app.controller.posts.destroy

const createRule = {
  title: 'string',
  content: 'string'
}

// 获取用户通过 HTTP 传递过来的请求参数。
// 校验、组装参数。
// 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
// 通过 HTTP 将结果响应给用户。

class LoginController extends HttpController {
    async login() {
        const { ctx } = this;
        ctx.body = '请登录';
    }
    async logout() {
        const { ctx } = this;
        ctx.logout();
    }

    async sign() {
        const { ctx } = this;
        await ctx.render('sign.nj');
    }
}

module.exports = LoginController;
