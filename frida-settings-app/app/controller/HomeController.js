Ext.define('FridaSettings.controller.HomeController', {
    extend: 'Ext.app.Controller',

    requires: [
        'FridaSettings.view.Settings'
    ],

    alias: 'controller.home',

    control: {
        'homepanel button[action=settings]': {
            click: 'onSettingsClick'
        }
    },

    config: {
        refs: [{
            ref: 'settingsWindow',
            selector: 'settingswindow'
//            autoCreate: true
        }]
    },

    onSettingsClick: function(bt) {
        var me = this,
            settingsWindow = me.getSettingsWindow();

        if (!settingsWindow) {
            settingsWindow = Ext.widget('settingswindow');
        }

        settingsWindow.show();
    }
});
