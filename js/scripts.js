// $.get("https://ssl.geoplugin.net/json.gp?k=36a168c612a12e85", function (resp) {
//     var data = JSON.parse(JSON.stringify(resp));
//     $("#locationJS").html(data.geoplugin_city);
// });

function notify(type, name, message) {
    (() => {
        var audio = new Audio('sound/nsound.mp3');
        audio.play();
        let n = document.createElement("div");
        let id = Math.random().toString(36).substr(2, 10);
        n.setAttribute("id", id);
        n.classList.add("notification", type);
        n.innerText = name + message;
        document.getElementById("notification-area").appendChild(n);
        setTimeout(() => {
            var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
            for (let i = 0; i < notifications.length; i++) {
                if (notifications[i].getAttribute("id") == id) {
                    notifications[i].remove();
                    break;
                }
            }
        }, 3500);
    })();
}

setTimeout(function () {
    notify("success", "Ana", " e outras 12 pessoas compraram este produto!");
}, 1710000);
setTimeout(function () {
    notify("success", "Luisa", " e outras 7 pessoas compraram este produto!");
}, 1800000);
setTimeout(function () {
    notify("success", "Maria", " e outras 24 pessoas compraram este produto!");
}, 1828800);
setTimeout(function () {
    notify("success", "Lilian", " e outras 18 pessoas compraram este produto!");
}, 2053800);


$(document).ready(function () {
    setTimeout(function () {
        $("#button_chechout_hero").show();
        $("#button_chechout_final").show()
    }, 1692000)
}); //1550