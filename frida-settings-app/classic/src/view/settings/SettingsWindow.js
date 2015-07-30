/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 12:11
 */
Ext.define('FridaSettings.view.settings.SettingsWindow', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.tab.Panel',
        'Ext.toolbar.Toolbar',
        'FridaSettings.view.settings.Personnel',
        'FridaSettings.view.settings.Profile'
    ],

    alias: 'widget.settingswindow',


    config: {
        title: 'Frida Settings',
        plain: true,
        closeAction: 'hide',
        height: '90%',
        width: '90%'
    },
    buttons: [{
        text: 'Save'
    }, {
        text: 'Cancel'
    }],

    items: [{
        xtype: 'tabpanel',
        ui: 'navigation',
        items: [{
            title: 'Profile',
            iconCls: 'fa-user',
            items: [{
                xtype: 'profile'
            }]
        }, {
            title: 'Manage Users',
            iconCls: 'fa-users',
            items: [{
                xtype: 'personnel'
            }]
        }]
    }]
});