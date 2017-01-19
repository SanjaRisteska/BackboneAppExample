var app = app || {};

app.phonesCollection = Backbone.Collection.extend({
    
    model: app.singlePhone,
    
    initialize: function(){
        
    }
    
});