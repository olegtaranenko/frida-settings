/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 07:18
 */
Ext.define('FridaSettings.view.settings.Profile', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.ux.colorpick.Field'
    ],

    alias: 'widget.profile',
    bodyPadding: 5,
    defaultType: 'textfield',

    config: {
        trackResetOnLoad: true,
        standardSubmit: false
    },

    persist: function() {
        var me = this,
            form = me.getForm();

        form.checkDirty();
        form.checkValidity();

        var validated = form.isValid(),
            dirty = form.isDirty();

        if (dirty && validated) {
            var value = form.getValues(),
                record = me.getRecord(),
                stores = record.joined;

            record.set(value);

            if (record.dirty) {
                Ext.each(stores, function(store) {
                    store.sync();
                    return false;
                })
            }
        }
    },

    defaults: {
        preventMark: false,
        labelWidth: '50%',
        labelAlign: 'right',
        anchor: '100%'
    },
    items: [{
        disabled: true,
        fieldLabel: 'ID',
        name: 'id'
    }, {
        fieldLabel: 'First Name',
        name: 'firstname',
        allowBlank: true
    }, {
        fieldLabel: 'Last Name',
        name: 'lastname',
        allowBlank: false
    }, {
//        xtype: 'email',
        fieldLabel: 'email',
        name: 'email',
        allowBlank: false
    }, {
        fieldLabel: 'Icon Color',
        xtype: 'colorfield',
        name: 'color'
    }]
});
