'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        // this.ctx.body='新闻系统';
        var list = await this.service.news.getNewsList();
        await this.ctx.render('news', {
            list: list,
        })
    }
    async content() {
        //获取get传值
        var aid = this.ctx.query.aid;
        var list = await this.service.news.getNewsContent(aid);
        // console.log(list);
        await this.ctx.render('newscontent', {
            list: list,
        })
    }
}

module.exports = NewsController;
