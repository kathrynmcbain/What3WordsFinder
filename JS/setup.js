var settings = {
    "async": true,
    "crossDomain": true,
    //note that config.api key is in another file I haven't uploaded to github - you need your own key which is easy to obtain from WhatTheeWords.
    "url": "https://api.what3words.com/v3/convert-to-coordinates?key="+config.apiKey+"&words=filled.count.soap&format=json",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
