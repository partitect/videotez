$(document).ready(function () {
  var DomVideoPlayer = document.getElementById("videoplayer");
  var $videoPlayer = $("video#videoplayer"); // İd'si videoplayer olan

  $videoPlayer.click(function () {
    this.paused ? this.play() : this.pause();
  });
  $videoPlayer.on("ended", function() {
    var v = $(this);
    var list = $(".questionList");
    list.html("<li>Soru 1</li><li>Soru 2</li><li>Soru 3</li><li>Soru 3</li>")
    //alert("end video 1")
});
  DomVideoPlayer.ontimeupdate = function () {
    var percentage =
      (DomVideoPlayer.currentTime / DomVideoPlayer.duration) * 100;
    $("#custom-seekbar span").css("width", percentage + "%");
    console.log(DomVideoPlayer.duration)
  };

  $("#custom-seekbar").on("click", function (e) {
    var offset = $(this).offset();
    var left = e.pageX - offset.left;
    var totalWidth = $("#custom-seekbar").width();
    var percentage = left / totalWidth;
    var vidTime = DomVideoPlayer.duration * percentage;
    DomVideoPlayer.currentTime = vidTime;
  }); //click()
  $(".ppbuton").on("click", function () {
    if ($(".ppbuton").hasClass("active")) {
      DomVideoPlayer.play();

      $(".ppbuton").html("<i class='pause icon'></i>");
      $(".ppbuton").toggleClass("active");
    } else {
       
      DomVideoPlayer.pause();

      $(".ppbuton").html("<i class='play icon'></i>");
      $(".ppbuton").toggleClass("active");
    }
  });

  $(".skipbutton").on("click",function(){
    jumpToTime(DomVideoPlayer.duration +100);
  })

  function jumpToTime(time){
    DomVideoPlayer.currentTime = time;
}
});
