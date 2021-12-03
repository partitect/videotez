$(document).ready(function () {
  var DomVideoPlayer = document.getElementById("videoplayer");
  var sources = DomVideoPlayer.getElementsByTagName("source");
  var $videoPlayer = $("video#videoplayer"); // İd'si videoplayer olan
  DomVideoPlayer.ontimeupdate = function () {
    var percentage =
      (DomVideoPlayer.currentTime / DomVideoPlayer.duration) * 100;
    $("#custom-seekbar span").css("width", percentage + "%");
    //list.html("");
  };
  $(".skip-video").on("click", function () {
    jumpToTime(DomVideoPlayer.duration + 100);
    $(this).children("img").attr("src", "assets/stop.svg");
  });
  function jumpToTime(time) {
    DomVideoPlayer.currentTime = time;
  }
  DomVideoPlayer.play();

  $videoPlayer.click(function () {
    if (this.paused) {
      this.play();
      $(".play-pause img").attr("src", "assets/play.svg");
    } else {
      this.pause();
      $(".play-pause img").attr("src", "assets/pause.svg");
    }
  });
  $(".true-answer").on("click", function () {
    $(".answer-feed span").html("Doğru Cevap");
    $(".answer-feed").removeClass("wrong").addClass("true");
    $(".answer-feed").animate({ bottom: "0px" }, 1000);
    const audio = new Audio("/assets/sounds/correct_answer.mp3");
    audio.play();
    setTimeout(function () {
      $(".answer-feed").animate({ bottom: "-80px" }, 1000);
    }, 2000);
    var point = $(".puan span").html();
    $(".puan span").html(parseInt(point) + 100);
  });
  $(".wrong-answer").on("click", function () {
    $(".answer-feed span").html("Yanlış Cevap");

    $(".answer-feed").removeClass("true").addClass("wrong");
    $(".answer-feed").animate({ bottom: "0px" }, 1000);
    const audio = new Audio("/assets/sounds/wrong_answer.mp3");
    audio.play();
    setTimeout(function () {
      $(".answer-feed").animate({ bottom: "-80px" }, 1000);
    }, 2000);
    var point = $(".puan span").html();
    $(".puan span").html(parseInt(point) - 10);
  });
});
