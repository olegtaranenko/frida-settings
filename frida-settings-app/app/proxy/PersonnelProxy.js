/**
 * Created by JetBrains WebStorm.
 * User: user1
 * Date: 30.07.15
 * Time: 16:12
 */
Ext.define('FridaSettings.proxy.PersonnelProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.personnel',
    config: {
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'DELETE'
        },
        api: {
            create  : 'api/user/create',
            read    : 'api/user/list.json',
            update  : 'api/user/update',
            destroy : 'api/user/destroy'
        },
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    }
});
