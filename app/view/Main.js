Ext.define('GEO.view.Main', {
  extend: 'Ext.container.Viewport'
  , alias: 'widget.main'

  , items: [
    {
      minWidth: 120
      , region: 'west'
      , width: 200
      , html: 'Navigation'
    }
    , {
      items: [
        {
          html: 'Tab 1'
          , title: 'Tab 1'
        }
        , {
          html: 'Tab 2'
          , title: 'Tab 2'
        }
      ]
      , region: 'center'
      , xtype: 'tabpanel'
    }
  ]
  , layout: 'border'
});