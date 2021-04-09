$.get("https://ssl.geoplugin.net/json.gp?k=36a168c612a12e85", function (resp) {
    var data = JSON.parse(JSON.stringify(resp));
    $("#locationJS").html(data.geoplugin_city);
});

$(document).ready(function(){setTimeout(function(){$("#button_chechout_hero").show();$("#button_chechout_final").show()}, 1470  * 1 * 1000)});

 //1550