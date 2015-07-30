/**
 * This view is an example list of people.
 */
Ext.define('FridaSettings.view.main.Personnel', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.grid.column.Check',
        'Ext.grid.plugin.CellEditing',
        'FridaSettings.store.PersonnelStore'

    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', width: 40 },
        { text: 'First',  dataIndex: 'firstname', flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        { text: 'Last',  dataIndex: 'lastname', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2 },
        { text: 'Color', dataIndex: 'color', width: 100},
        { text: 'Active', dataIndex: 'disabled', column: 'checkcolumn'}
    ],

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },


    listeners: {
        select: 'onItemSelected'
    }
});
