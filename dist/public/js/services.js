var services = {};

services.hex = (function() {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    })
    .done(function( data ) {
      console.log(data);
    });
});

services.getUsers = (function() {
    var users = "/listUsers";
    $.getJSON( users, {
      format: "json"
    })
    .done(function( data ) {
      console.log(data);
    });
});