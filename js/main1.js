
    $(document).ready(function(){
        flowplayer("tl_player", "../assets/videos/ocean.mp4",{
            clip:  {
                autoPlay: true,       //是否自动播放，默认true
                autoBuffering: true     //是否自动缓冲视频，默认true
            },
            playlist: [//播放列表
              
                {
                    url: '../assets/videos/ocean.mp4',//需要播放的文件
                    autoPlay: true
                }
              ]
    });
      });
    
