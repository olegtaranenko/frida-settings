Ext.define('FridaSettings.view.settings.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.settings',

    listen: {
        store: {
            '#personnel': {
                load: 'onPersonnelLoad'
            }
        }
    },

    persistPersonnel: function() {
        var personnel = Ext.getStore('personnel');

        personnel.sync({
            callback: function(batch, options) {
                var operations = batch.getOperations();
                Ext.each(operations, function(op) {
                    var records = op.getRecords();
                    Ext.each(records, function(record) {
                        record.commit();
                    })
                })
            }
        })
    },

    onPersonnelLoad: function(store, records) {
        var settings = Ext.ComponentQuery.query('settingswindow')[0],
            profileTab = settings.down('profile'),
            profileRecord = store.getById(5);

        if (profileTab) {
            profileTab.loadRecord(profileRecord);
        }
    },

    onSaveClick: function(bt) {
        var me = this,
            form = bt.up('window'),
            tabs = form.down('tabpanel'),
            current = tabs.getActiveTab(),
            subComponents = current.query('*');

        subComponents.unshift(current);

        Ext.each(subComponents, function(cmp) {
            var persistMethod = cmp && cmp.persist;

            if (persistMethod) {
                persistMethod.call(cmp, me);
                return false;
            }
        })

    },

    onCancelClick: function(bt) {
        var form = bt.up('window');

        form.close();
    }
});
