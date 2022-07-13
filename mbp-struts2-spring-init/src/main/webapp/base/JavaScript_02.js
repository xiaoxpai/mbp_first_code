//准备函数
Ext.onReady(function () {

    /**
     * Ext.apply(): 就是为对象扩展属性或方法的
     */

    //源对象
    var src = { name: 'zhan3',age: 20};
    //配置对象
    var config = {name: 'li4',sex: '女'};
    //name: 'li4' age:20   sex: 女
    Ext.apply(src , config);
    for (var arr in src){
        // alert(arr + ":"+src[arr]);
    }
})
