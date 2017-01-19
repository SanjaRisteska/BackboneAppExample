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
         $("#allPhones").show();
    },
    
    showMoreInfoGalaxyS7Edge: function(){
        var galaxyS7 = new app.phonePreview({
            manufacturer : "Samsung",
            model : "Galaxy S7 Edge",
            price : "510$",
            color : "Grey",
            size : "5.5 inches",
            weight : "157 g",
            CPU : "Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo) Octa-core (4x2.3 GHz Mongoose & 4x1.6 GHz Cortex-A53)",
            primary_camera : "12 MP, f/1.7, 26mm, phase detection autofocus, OIS, LED flash",
            secondary_camera : "5 MP, 1/4.1' sensor size, 1.34 µm pixel size, f/1.7, 22mm, dual video call, Auto HDR"
        });
        $("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : galaxyS7});
        $("#phonePreviewSection").html(samsungS7Preview.render().el);
    },
    
    showMoreInfoiPhone7: function(){
       var iPhone7 = new app.phonePreview({
            manufacturer : "Apple",
            model : "iPhone 7 32GB",
            price : "820$",
            color : "Black",
            img : "img/iphone.png",
            link : "iPhone7",
            size : "4.7 inches",
            weight : "138 g",
            CPU : "Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
            primary_camera : "12 MP, f/1.8, 28mm, phase detection autofocus, OIS, quad-LED (dual tone) flash",
            secondary_camera : "7 MP, f/2.2, 32mm, 1080p@30fps, 720p@240fps, face detection, HDR, panorama"
        });
        ("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : iPhone7});
        $("#phonePreviewSection").html(iPhone7.render().el);
    },
    
    showMoreInfoGalaxyJ7: function(){
       var galaxyJ7 = new app.phonePreview({
            manufacturer : "Samsung",
            model : "Galaxy J7",
            price : "240$",
            color : "Grey",
            size : "5.5 inches",
            weight : "170 g",
            CPU : "Octa-core (4x1.6 GHz Cortex-A53 & 4x1.0 GHz Cortex-A53) Octa-core 1.6 GHz Cortex-A53",
            primary_camera : "13 MP, f/1.9, 28mm, autofocus, LED flash",
            secondary_camera : "5 MP, f/1.9, LED flash"
        });
        ("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : galaxyJ7});
        $("#phonePreviewSection").html(galaxyJ7.render().el);
    },
    
    showMoreInfoHuaweiP9: function(){
        var HuaweiP9 = new app.phonePreview({
            manufacturer : "Huawei",
            model : "P9",
            price : "400$",
            color : "Rose gold  ",
            size : "5.2 inches",
            weight : "144 g",
            CPU : "Octa-core (4x2.5 GHz Cortex-A72 & 4x1.8 GHz Cortex-A53)",
            primary_camera : "Dual 12 MP, f/2.2, 27 mm, Leica optics, phase detection autofocus, dual-LED (dual tone) flash",
            secondary_camera : "8 MP, f/2.4, 1080p"
        });
        ("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : HuaweiP9});
        $("#phonePreviewSection").html(HuaweiP9.render().el);
    },
    
    showMoreInfoNexus5: function(){
       var Nexus5 = new app.phonePreview({
            manufacturer : "LG",
            model : "Nexus5",
            price : "300$",
            color : "White",
            size : "4.95 inches",
            weight : "130 g",
            CPU : "Quad-core 2.3 GHz Krait 400",
            primary_camera : "8 MP, f/2.4, 30mm, autofocus, OIS, LED flash",
            secondary_camera : "1.3 MP, f/2.4, 1/6' sensor size, 1.9µm pixel size"
        });
        ("#allPhones").hide();
        var samsungS7Preview = new app.phonePreviewView({model : Nexus5});
        $("#phonePreviewSection").html(Nexus5.render().el);
    }
    
});