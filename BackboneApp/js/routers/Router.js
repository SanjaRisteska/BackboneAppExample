var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
        "GalaxyS7Edge" : "showMoreInfo"
    },
    
    showMoreInfo: function(){
        alert("Galaxy s7 edge");
    }
    
});