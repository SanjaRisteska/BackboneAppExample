/*var samsungS7 = new app.singlePhone({
    manufacturer : "Samsung",
	model : "Galaxy S7 Edge",
	price : "510$",
    color : "Grey",
    img : "img/smartphone.png"
});

var samsungJ7 = new app.singlePhone({
    manufacturer : "Samsung",
	model : "Galaxy J7",
	price : "240$",
    color : "Grey",
    img : "img/smartphone.png"
});

var iphone7 = new app.singlePhone({
    manufacturer : "Apple",
	model : "iPhone 7 32GB",
	price : "820$",
    color : "Black",
    img : "img/smartphone.png"
});

var huaweiP9 = new app.singlePhone({
    manufacturer : "Huawei",
	model : "P9",
	price : "400$",
	color : "Rose gold",
    img : "img/smartphone.png"
});

var nexus5 = new app.singlePhone({
    manufacturer : "Nexus",
	model : "5",
	price : "300$",
	color : "White",
    img : "img/smartphone.png"
});


var phonesGroup = new app.phonesCollection([
    samsungS7, iphone7, samsungJ7, huaweiP9, nexus5
]);*/

var phonesGroup = new app.phonesCollection(data);
console.log(phonesGroup);


var phonesGroupView = new app.allPhonesView({collection: phonesGroup});
$("#allPhones").html(phonesGroupView.render().el);
