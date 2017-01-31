var app = app || {};

app.allPhonesView = Backbone.View.extend({

    tagName: "section",

    initialize: function(){
        this.collection.bind("reset", _.bind(this.render, this));
        this.collection.fetch({
            success: function(response){
                var data = response.toJSON();
            },
            reset: true
        });
    },
    
    render: function(){
        this.collection.each(this.addPhone, this);
        $("#allPhones").html(this.el);
        //return this;
    },
    
    addPhone: function(phone){
        var phoneView =  new app.singlePhoneView({ model: phone });
        this.$el.append(phoneView.render().el);
    },
    
    closeAllPhonewView: function() {
		this.remove();
	}
    

});