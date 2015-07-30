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
        { text: 'Risk',  dataIndex: 'risk', width: 50 },
        { text: 'Transaction Date',  dataIndex: 'transactionDate', width: 150, column: 'Ext.grid.column.Date' },
        { text: 'Top Item With Price', dataIndex: 'topItem', flex: 3 },
        { text: 'First Name',  dataIndex: 'first', flex: 1},
        { text: 'Last Name',  dataIndex: 'last', flex: 1 }
    ]
});
