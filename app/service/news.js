'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async getNewsList() {
        //通过抓取接口返回数据
        //curl的方法可以获取远程的数据
        var api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
        var response = await this.ctx.curl(api);
        //将返回的Buffer转换为Json对象
        var data = JSON.parse(response.data);
        return data.result;
    }
    async getNewsContent(aid){
        var api = this.config.api + 'appapi.php?a=getPortalArticle&aid='+aid;
        var response = await this.ctx.curl(api);
        var data = JSON.parse(response.data);
        return data.result[0];
    }
}

module.exports = NewsService;
