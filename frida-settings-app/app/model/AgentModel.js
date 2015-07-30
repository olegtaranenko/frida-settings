/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 04:17
 */
Ext.define('FridaSettings.model.AgentModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'first', type: 'string'},
            {name: 'id', type: 'int'},
            {name: 'last', type: 'string'},
            {name: 'risk', type: 'int'},
            {name: 'topItem', type: 'string'},
            {name: 'transactionDate', type: 'time'}
        ]
    }
});
