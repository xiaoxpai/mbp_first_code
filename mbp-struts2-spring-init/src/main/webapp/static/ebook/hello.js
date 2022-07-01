//创建一个 Template 实例
var tpl = Ext.create('Ext.Template', [
    'Hello {firstName} {lastName}!',
    ' Nice to meet you!'
]);

//2、配置表单面板
var forPanel = Ext.create('Ext.form.FormPanel', {
    itemId: 'formPanel',
    frame: true,
    layout: 'anchor',
    defaultType: 'textfield',
    defaults: {
        anchor: '-10',
        labelWidth: 65
    },
    //3、配置两个输入框
    items: [
        {
            fieldLabel: 'First name',
            name: 'firstName'
        },
        {
            fieldLabel: 'Last name',
            name: 'lastName'
        }
    ],
    //4、配置反馈按钮
    buttons: [
        {
            text: 'Submit',
            handler: function () {
                var formPanel = this.up('#formPanel'),
                    vals = formPanel.getValues(),
                    greeting = tpl.apply(vals);
                //5、显示Ext.Msg警告对话框
            }
        }
    ]


})

//二、调用Ext.onReady
Ext.onReady(function (){
   //2.渲染窗口
   Ext.create('Ext.window.Window',{
       height : 125,
       width : 200,
       closable : false,
       title : 'Input needed.',
       border : false,
       layout : 'fit',
       items : forPanel
   }).show();
});