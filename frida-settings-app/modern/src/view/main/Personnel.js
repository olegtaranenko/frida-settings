/**
 * This view is an example list of people.
 */
Ext.define('FridaSettings.view.settings.Personnel', {
    extend: 'Ext.grid.Grid',
    xtype: 'personnel',

    requires: [
        'FridaSettings.store.PersonnelStore'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ]
});
