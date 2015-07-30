/**
 * This view is an example list of people.
 */
Ext.define('FridaSettings.view.main.Agents', {
    extend: 'Ext.grid.Panel',
    xtype: 'agentslist',

    requires: [
        'FridaSettings.store.AgentsStore'
    ],

    title: 'Agents',

    store: {
        type: 'agents'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
