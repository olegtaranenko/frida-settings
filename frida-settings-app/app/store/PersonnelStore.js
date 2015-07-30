Ext.define('FridaSettings.store.PersonnelStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Rest'
    ],

    alias: 'store.personnel',

    config: {
        autoLoad: true,
        autoSync: true,
        filters: [{
            filterFn: function(item) {
                return item.getId() != 5;
            }
        }]
    },

    proxy: {
        type: 'rest',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'DELETE'
        },
        api: {
            create  : 'api/user/create',
            read    : 'api/user/list.json',
            update  : 'api/user/update',
            destroy : 'api/user/destroy'
        },
//        url: 'api/user/list.json',
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    }
});
