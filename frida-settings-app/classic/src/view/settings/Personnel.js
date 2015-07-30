/**
 * This view is an example list of people.
 */
Ext.define('FridaSettings.view.settings.Personnel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.personnel',

    requires: [
        'Ext.grid.column.Check',
        'Ext.grid.plugin.CellEditing',
        'FridaSettings.store.PersonnelStore'

    ],

    persist: function(controller) {
        controller.persistPersonnel();
    },

    store: {
        type: 'personnel'
    },

    columns: {
        items: [
            { text: 'ID',  dataIndex: 'id', width: 40 },
            { text: 'First',  dataIndex: 'firstname', flex: 1},
            { text: 'Last',  dataIndex: 'lastname', flex: 1 },
            { text: 'Email', dataIndex: 'email', flex: 2 },
            { text: 'Color', dataIndex: 'color', width: 100},
            { text: 'Active', dataIndex: 'disabled', column: 'checkcolumn', editor: false}

        ],
        defaults: {
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }
    },

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    }
});
