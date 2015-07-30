Ext.define('FridaSettings.store.PersonnelStore', {
    extend: 'Ext.data.Store',
    requires: [
        'FridaSettings.model.PersonnelModel',
        'FridaSettings.proxy.PersonnelProxy'
    ],

    alias: 'store.personnel',

    config: {
        storeId: 'personnel',
        model: 'FridaSettings.model.PersonnelModel',
        autoLoad: true,
        autoSync: false,
        filters: [{
            filterFn: function(item) {
                return item.getId() != 5;
            }
        }]
    },

    proxy: 'personnel'
});
