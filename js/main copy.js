
    $(document).ready(function(){
        $(function(){

            var videoplayer = $('video#videoplayer'); // İd'si videoplayer olan Video etiketini seç


            videoplayer.on("ended", function() {
                var v = $(this);
                //videoPlayer.children("source").attr("src","assets/video/ocean.mp4")
                //alert("end video 1")
            });
            videoplayer.click(function() {
                this.paused ? this.play() : this.pause();
            });
            var video = videoplayer[0]; // videoplayer değişkenin sıfırıncı değerini al (Jquery ile çalışmak için bu şekilde sıfırıncı değeri almalıyız )
        
            function toplamSureBul(parametre=false) {  // Verilen parametrenin (dakika:saniye) olarak süresini bulur
                if(parametre == false)  // Eğer parametre false ise
                {
                    var toplamSure = video.duration;  // video uzunluğunu toplamSure değişkenine aktar
                }else
                {
                    var toplamSure = video.currentTime; // video anlık zamanını toplamSure değişkenine aktar
                }
                saniye = Math.floor(toplamSure);  // Saniye olarak bul ve tam sayıya yuvarla
                dakika = Math.floor(toplamSure/60); // Dakika olarak bul ve tam sayıya yuvarla
                saniye = Math.floor(saniye % 60); // Saniye 
                dakika = dakika < 10 ? "0"+dakika : dakika; 
                saniye = saniye < 10 ? "0"+saniye : saniye;
                return dakika+":"+saniye;
            }
        
            video.oncanplay = function() {  // Video hazır olduğu zaman
                $('span.sure').text( toplamSureBul(true)+" / "+toplamSureBul() ); // Class'ı süre olan span'a toplam süre fonksiyonundan gelen değeri aktar
            };
        
            $('button.baslat').on("click",function(){  // Başlat butonuna tıklandığı zaman
                if(video.paused) // Eğer video çalıştırılırsa
                {
                    $(this).html('<i class="fa fa-pause" aria-hidden="true"></i>'); // butona pause ikonu ekle
                    video.play();  // Videoyu çalıştır
                }else 
                {
                    $(this).html('<i class="fa fa-play" aria-hidden="true"></i>');  // butona play ikonu ekle
                    video.pause(); // Videoyu durdur
                }
                
            });
        
            video.ontimeupdate = function()  // Videonun her çalıştığı süre boyunca
            {
                video_sure();  // video_sure fonksiyonunu çalıştır
            }
        
            function video_sure()  // Bu fonksiyon ile her saniye video süre çubuğu ve zaman bilgisi yazan yerler güncellenecek
            { 
                var video_suan=video.currentTime * (100 / video.duration);  // Videonun şuanki zamanını bul
                $('input.video_sure').val(video_suan);  // class'ı video_sure olan inputun değerini video_suan değişkenine eşitle
                $('span.sure').text( toplamSureBul(true)+" / "+toplamSureBul() ); // Her saniye boyunca class'ı süre olan spanın değerini güncelle
            }
        
            video.onended = function()  // Eğer video biterse
            {
                $('button.baslat').html('<i class="fa fa-play" aria-hidden="true"></i>'); // class'ı başlat olan butona play butonu ekle
                video.pause(); // Videoyu durdur
            }
        
            $('input.video_sure').change(function(){  // Eğer video süre çubuğu değiştirilse 
                var video_suan_sure=video.duration*($(this).val()/100); // Süre çubuğunun değerini bul
                video.currentTime=video_suan_sure; // Ve videonun zamanını süre çubuğundaki zamana eşitle
            });
        
            $('input.video_ses').change(function(){  // Ses çubuğu değiştirilirse
                video.volume=$(this).val()/100;  // Videonun sesini ses çubuğundaki değere eşitle
            });
        
            $('button.ses').click(function(){ // class'ı ses olan butona tıklayınca
                $('input.video_ses').prop('value','0');
                video.volume=0; // Sesi kapat
            });
        });

        videoplayer.ontimeupdate = function(){
            var percentage = ( videoplayer.currentTime / videoplayer.duration ) * 100;
            $("#custom-seekbar span").css("width", percentage+"%");
          };
          
          $("#custom-seekbar").on("click", function(e){
              var offset = $(this).offset();
              var left = (e.pageX - offset.left);
              var totalWidth = $("#custom-seekbar").width();
              var percentage = ( left / totalWidth );
              var vidTime = videoplayer.duration * percentage;
              videoplayer.currentTime = vidTime;
          });//click()
      });
    
