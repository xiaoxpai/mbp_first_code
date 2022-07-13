
    /*
        Person.prototype={}; 原型构造器 - object
        - 原型构造器总是指向当前类本身
     */
    //extend
    //Sup Class
    Ext.define('Person',{
       config: {
           name: 'fatherName',
           card: 'fatherCard'
       } ,
        constructor: function (config) {
            var me = this;
            me.initConfig(config);
        }
    });

    //Sub Class
    Ext.define('Boy',{
       //使用Ext的继承
       extend: 'Person',
       config: {
           sex: '男',
           age: 17
       }
    });

    var b = Ext.create('Boy',{
       name: '战3',
        age: 25,
        card: '3600'
    });

    alert(b.name);
    alert(b.sex);
    alert(b.age);
    alert(b.card);
