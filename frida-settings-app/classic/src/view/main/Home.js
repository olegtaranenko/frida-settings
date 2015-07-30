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
        'FridaSettings.view.main.Agents',
//        'FridaSettings.controller.HomeController',
        'FridaSettings.view.main.Personnel',
        'FridaSettings.view.main.Profile'
    ],

//    controller: 'home',
//    viewModel: 'home',

    dockedItems: [{
        xtype: 'toolbar',
        items: ['->', {
            text: 'Open',
            action: 'open'
        }, {
            text: 'Settings',
            action: 'settings'
        }]
    }],

    items: [{
        xtype: 'agentslist'
    }]
});
