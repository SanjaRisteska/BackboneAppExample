var app = app || {};

app.phonesCollection = Backbone.Collection.extend({
    
    model: app.singlePhone,
    
    initialize: function(){
        console.log("Collection of phones is created.")   
    }
    
});