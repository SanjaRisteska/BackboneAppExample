
var phonesGroup = new app.phonesCollection(data);
console.log(phonesGroup);


var phonesGroupView = new app.allPhonesView({collection: phonesGroup});
$("#allPhones").html(phonesGroupView.render().el);
