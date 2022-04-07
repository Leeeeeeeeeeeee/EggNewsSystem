

module.exports = (options,app) => {
    //返回一个异步的方法
    return async function printDate(ctx,next){
        console.log(options.msg+new Date());
        await next();
    }
}