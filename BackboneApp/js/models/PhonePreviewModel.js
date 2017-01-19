var app = app || {};

app.phonePreview = Backbone.Model.extend({

    defaults:{
        manufacturer: "",
        model: "",
        price: ""
    },
    
    initialize : function(){
        console.log("Phone Preview model for " +this.get("manufacturer")+" "+this.get("model")+" is created.");
    }

});