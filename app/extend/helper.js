var sd = require('silly-datetime');

module.exports={
    formatTime(timestamp){
        //10位时间戳在js中无效，需要转化为13位
        return sd.format(new Date(timestamp*1000),'YYYY-MM-DD HH:mm');
    }
}