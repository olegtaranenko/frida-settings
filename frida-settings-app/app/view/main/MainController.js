/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FridaSettings.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onSettingsClick: function(bt) {
        var me = this,
            settingsWindow = Ext.ComponentQuery.query('settingswindow'),
            personnelStore = Ext.getStore('personnel');

        if (settingsWindow.length) {
            settingsWindow = settingsWindow[0];
        } else {
            settingsWindow = Ext.widget('settingswindow');
        }

        settingsWindow.show(null, function() {
//            personnelStore.load();
        });
    }
});
