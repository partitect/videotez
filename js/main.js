
    $(document).ready(function(){
        var videoPlayer = $("#myVideo");
        videoPlayer.on("ended", function() {
            var v = $(this);
            videoPlayer.children("source").attr("src","assets/video/ocean.mp4")
            //alert("end video 1")
        });
        videoPlayer.click(function() {
            this.paused ? this.play() : this.pause();
        });
        $(".new-game").on("click",function(){
            videoPlayer.css("display","block")
            videoPlayer.trigger('play');
        })
      });
    
