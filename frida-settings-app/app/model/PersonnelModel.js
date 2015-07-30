/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 04:17
 */
Ext.define('FridaSettings.model.PersonnelModel', {
    extend: 'Ext.data.Model',

    alias: 'model.personnel',

    requires: [
        'FridaSettings.proxy.PersonnelProxy'
    ],

    config: {
        fields: [
            {name: 'color', type: 'string'},
            {name: 'disabled', type: 'boolean'},
            {name: 'email', type: 'string'},
            {name: 'firstname', type: 'string'},
            {name: 'id', type: 'int'},
            {name: 'lastname', type: 'string'}
        ]

//        proxy: 'personnel'
    }
});
