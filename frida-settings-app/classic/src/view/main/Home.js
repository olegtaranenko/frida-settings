/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 11:00
 */
Ext.define('FridaSettings.view.main.Home', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homepanel',
    requires: [
        'Ext.toolbar.Toolbar',
        'FridaSettings.view.main.Agents'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: ['->', {
            text: 'Open',
            action: 'open'
        }, {
            text: 'Settings',
            action: 'settings',
            listeners: {
                click: 'onSettingsClick'
            }
        }]
    }],

    items: [{
        xtype: 'agentslist'
    }]
});
