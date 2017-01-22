var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
        "" : "showFirstPage",
        "GalaxyS7Edge" : "showMoreInfoGalaxyS7Edge",
        "iPhone7" : "showMoreInfoiPhone7",
        "GalaxyJ7" : "showMoreInfoGalaxyJ7",
        "HuaweiP9" : "showMoreInfoHuaweiP9",
        "Nexus5" : "showMoreInfoNexus5",
    },
    
    showFirstPage: function(){
        $("#phonePreviewSection").hide();
        $("#allPhones").show();
    },
    
    showMoreInfoGalaxyS7Edge: function(){
        var galaxyS7 = new app.phonePreview(
        _.first(
            _.filter(data,function(phone){
            return phone.link === "GalaxyS7Edge";
        })
        )
        );
        $("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : galaxyS7});
        $("#phonePreviewSection").html(samsungS7Preview.render().el);
        $("#phonePreviewSection").show();
    },
    
    showMoreInfoiPhone7: function(){
       var iPhone7 = new app.phonePreview(
       _.first(
            _.filter(data,function(phone){
            return phone.link === "iPhone7";
        })
        )
       );
        $("#allPhones").hide();
        var iPhonePreview = new app.phonePreviewView({model : iPhone7});
        $("#phonePreviewSection").html(iPhonePreview.render().el);
        $("#phonePreviewSection").show();
    },
    
    showMoreInfoGalaxyJ7: function(){
       var galaxyJ7 = new app.phonePreview(
       _.first(
            _.filter(data,function(phone){
            return phone.link === "GalaxyJ7";
        })
        )
       );
        $("#allPhones").hide();
        var samsungJ7Preview = new app.phonePreviewView({model : galaxyJ7});
        $("#phonePreviewSection").html(samsungJ7Preview.render().el);
        $("#phonePreviewSection").show();
    },
    
    showMoreInfoHuaweiP9: function(){
        var HuaweiP9 = new app.phonePreview(
        _.first(
            _.filter(data,function(phone){
            return phone.link === "HuaweiP9";
        })
        )
        );
        $("#allPhones").hide();
        var huaweiPreview = new app.phonePreviewView({model : HuaweiP9});
        $("#phonePreviewSection").html(huaweiPreview.render().el);
        $("#phonePreviewSection").show();
    },
    
    showMoreInfoNexus5: function(){
       var Nexus5 = new app.phonePreview(
       _.first(
            _.filter(data,function(phone){
            return phone.link === "Nexus5";
        })
        )
       );
        $("#allPhones").hide();
        var nexusPreview = new app.phonePreviewView({model : Nexus5});
        $("#phonePreviewSection").html(nexusPreview.render().el);
        $("#phonePreviewSection").show();
    }
    
});