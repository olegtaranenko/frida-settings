/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 07:18
 */
Ext.define('FridaSettings.view.settings.Profile', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.layout.FormLayout'
    ],

    alias: 'widget.profile',
    bodyPadding: 5,
    defaultType: 'textfield',
//    layout: 'form',
    defaults: {
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
        name: 'first',
        allowBlank: true
    }, {
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }, {
        fieldLabel: 'email',
        name: 'last',
        allowBlank: false
    }]
});
