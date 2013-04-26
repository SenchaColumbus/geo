Ext.application({
  name: 'GEO'

  // can list static stores here with autoload:true to load stores when application loads
  //, stores: []

  , controllers: [
    'Main'
  ]

  , launch: function () {
    //Create Viewport
    Ext.create('GEO.view.Main');
  }
});