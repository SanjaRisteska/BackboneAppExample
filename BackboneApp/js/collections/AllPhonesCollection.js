var app = app || {};

app.phonesCollection = Backbone.Collection.extend({
    
    model: app.singlePhone,
    urlRoot: 'http://127.0.0.1:8080/api/phones',
    url: 'http://127.0.0.1:8080/api/phones',
    
    initialize: function(){
        
    }
    
});