var app = app || {};

app.singlePhone = Backbone.Model.extend({

    defaults:{
        manufacturer: "Samsung",
        model: "Galaxy S7",
        price: "500$"
    },
    
    initialize : function(){
        console.log("Phone " +this.get("manufacturer")+" "+this.get("model")+" is created.");
    }

});