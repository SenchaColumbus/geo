Ext.define('GEO.controller.Main', {
  extend: 'Ext.app.Controller'

  , refs: [
    { ref: 'nav', selector: 'mainnav' } // getNav()
  ]

  , views: [
    'Main'
  ]

  , init: function () {
    var me = this;

    me.control({
      'mainnav': {
        beforeitemclick: me.onNavBeforeItemClick,
        itemclick: me.onNavItemClick
      }
    });
  }
  
});