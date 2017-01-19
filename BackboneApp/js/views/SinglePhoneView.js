var app = app || {};

app.singlePhoneView = Backbone.View.extend({

    tagName: "article",
    className: "phoneItem",
    
    events: {},
    
    template: _.template($("#phoneElement").html()),
    
    initialize: function(){
      console.log("Single phone view is created.");  
    },
    
    render: function(){
        var phoneTemplate = this.template(this.model.toJSON());
        this.$el.html(phoneTemplate);
        return this;
    }
});