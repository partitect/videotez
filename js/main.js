
    $(document).ready(function(){
        var videoPlayer = $("#myVideo");
        var questionsTitle = $(".questions h1");
        var questionsList = $(".questions .list");

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
        });
          
        videoPlayer.on('ended', function() {
            questionsTitle.html("Which response to the mom is the most appropriate?")
            questionsList.html("<a>Resource Mom</a><a>Change Transform</a><a>Transfer Hospital</a><a>Transfer Hospital</a>")
         });
      });
    
