/*cookie函数，设置cookie，移除cookie，取得cookie值(最后一位参数为回调函数)，面向对象风格，可以链式调用*/
var cookieFun = {
    setCookie: function (name,value,time){
        document.cookie = name + '=' + value + ';max-age=' + time;
        // document.cookie = 'left=398;max-age=100000000';
        // console.log(name + '=' + value + ';max-age=' + time)
        return this;
    },
    removeCookie: function (name){
        this.setCookie(name,'','-1')
        return this;
    },
    getCookie: function (name,callback){
        var cooKieArr = document.cookie.split('; ');
        for(var i = 0,len = cooKieArr.length;i < len;i++){
            var tempArr = cooKieArr[i].split('=');
            if(tempArr[0] == name){
                if(callback){
                    callback(tempArr[1]);
                } else {
                    return tempArr[1];
                }
            }
        }
        return tempArr[1];
    }
}