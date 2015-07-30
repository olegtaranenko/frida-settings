Ext.define('FridaSettings.store.AgentsStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Memory',
        'FridaSettings.model.AgentModel'
    ],

    alias: 'store.agents',

    config: {
        autoLoad: true,
        model: 'FridaSettings.model.AgentModel'
    },


    data: { items: [
        { id: 35213, first: 'Jason', last: 'Steward', risk: '23', transactionDate: '20141102 09:12:00', topItem: 'SA Galaxy S IV (white), $649.99'}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
