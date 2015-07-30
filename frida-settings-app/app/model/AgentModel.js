/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 04:17
 */
Ext.define('FridaSettings.model.PeopleModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'risk', type: 'int'},
            {name: 'first', type: 'string'}
        ]
    }
});
