$.ajax({
    url: "https://api.fantasydata.net/v3/cbb/scores/{format}/AreAnyGamesInProgress?" + $.param(params),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","415ccd5602b4e06870ba5c497510cbd");
    },
    type: "GET",
    // Request body
    data: "{body}",
})
.done(function(data) {
    alert("success");
})
.fail(function() {
    alert("error");
});
