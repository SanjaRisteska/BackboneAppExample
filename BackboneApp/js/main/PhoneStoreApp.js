
var phonesGroup = new app.phonesCollection(data);

var phonesGroupView = new app.allPhonesView({collection: phonesGroup});
$("#allPhones").html(phonesGroupView.render().el);

var phonesRouter = new app.Router();

Backbone.history.start();