$.get("https://ssl.geoplugin.net/json.gp?k=36a168c612a12e85", function (resp) {
    var data = JSON.parse(JSON.stringify(resp));
    $("#locationJS").html(data.geoplugin_city);
});

function notify(type, name, message){
    (()=>{
      var audio = new Audio('sound/nsound.mp3');
      audio.play();
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2,10);
      n.setAttribute("id",id);
      n.classList.add("notification",type);
      n.innerText = name + message;
      document.getElementById("notification-area").appendChild(n);
      setTimeout(()=>{
        var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
        for(let i=0;i<notifications.length;i++){
          if(notifications[i].getAttribute("id") == id){
            notifications[i].remove();
            break;
          }
        }
      },3500);
    })();
  }

  // setTimeout(function() { 
  // //    notify("success", "🛒 Ana", " e outras 12 pessoas compraram este produto!");
  // //	notify("success", "Luisa", " e outras 7 pessoas compraram este produto!");
  // //	notify("success", "Maria", " e outras 24 pessoas compraram este produto!");
  // //	notify("success", "Juliana", " e outras 18 pessoas compraram este produto!");
  // }, 2000);
  
  

$(document).ready(function(){

  var muteStatus;
  var c = 0;
  var nw = true;
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;*

  function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          videoId: "u49wjPa19Ug", //Change to the video ID you want
          playerVars: {
              autoplay: 0,
              cc_load_policy: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              playsinline: 1,
              modestbranding: 1,
              iv_load_policy: 3,
              rel: 0,
              showinfo: 0,
              host: 'https://www.youtube.com'
          },
          events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
              onError: onPlayerError
          }
      });
  }

  function onPlayerStateChange(e) {
    if (e.data === -1) {
        c++;
        if (c > 1) {
            setTimeout(function() {
                if (player.getPlayerState() === -1) {
                    resetvid();
                }
            }, 3500);
        }
    }

    if (e.data === 2) {
      $(".cov").show();
  }

  $(".cov").click(function() {
    player.playVideo();
    $(".cov").hide();
  });


    setTimeout(function(){
        $("#button_chechout_hero").show();
        $("#button_chechout_final").show()}, 1470  * 1 * 1000)
    });

 //1550