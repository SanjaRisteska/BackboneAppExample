var app = app || {};

app.phonePreviewView = Backbone.View.extend({

    tagName: "div",
    
    template: _.template($("#phonePreview").html()),
    
    initialize: function(){
      console.log("Phone preview view is created.");  
    },
    
    render: function(){
        var phonePreviewTemplate = this.template(this.model.toJSON());
        this.$el.html(phonePreviewTemplate);
        return this;
    }
});