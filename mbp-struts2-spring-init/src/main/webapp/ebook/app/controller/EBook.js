Ext.define('ebook.app.controller.EBook', {
    extend: 'Ext.app.Controller',

    stores: ['EBook'],

    models: ['EBook'],

    views: ['ebook.Edit', 'ebook.List'],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > ebooklist dataview': {
                itemdblclick: this.editUser
            },
            'ebookedit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});
