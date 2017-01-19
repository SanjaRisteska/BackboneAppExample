var app = app || {};

app.allPhonesView = Backbone.View.extend({

    tagName: "section",

    initialize: function(){
      
    },
    
    render: function(){
        this.collection.each(this.addPhone, this);
        return this;
    },
    
    addPhone: function(phone){
        var phoneView =  new app.singlePhoneView({ model: phone });
        this.$el.append(phoneView.render().el);
    },
    
    closeAllPhonewView: function() {
		this.remove();
	}
    

});