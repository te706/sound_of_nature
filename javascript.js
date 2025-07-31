let isPlaying = null; 
function toggleVideo(playing){
    const iframe = document.getElementById('video');
    if (isPlaying === playing) {
        iframe.src = "";
        isPlaying = null;
    }
    else{
        iframe.src = `https://www.youtube.com/embed/${playing}?autoplay=1&loop=1&playlist=${playing}`;
        isPlaying = playing;
    }
}
let anime = null;
let VIDEO = null;
const Header    = document.getElementById('Head');
const animation = document.getElementById('BODY');
const Animation = document.getElementById('circle');
const Sun       = document.getElementById('sun');
const Mon       = document.getElementById('mon');
const Photo1    = document.getElementById('photo1') , Photo2 =  document.getElementById('photo2') , Photo3 = document.getElementById('photo3') , Photo4 = document.getElementById('photo4'),
                                                      Photo5  = document.getElementById('photo5');

const BOX       = document.getElementById('box');
const ONplay    = document.getElementById('video');
const Videosho  = document.getElementById('videoSho');
const IMGvideo  = document.getElementById('PLAYvideo');

    function ani(){

        Header.classList.toggle("HEAD");
        if(anime == 1){
            console.log("ผ่าน");
            animation.classList.remove("BODY");
            Animation.classList.remove("circle");
            Animation.classList.add("Circle");
        
          anime = null;
        } else{
            console.log("ไม่ผ่าน");
            animation.classList.add("BODY");
            Animation.classList.add("circle");
            Animation.classList.remove("Circle");
          
          anime = 1;
            
        }

          Sun.classList.toggle("SUN");
          Mon.classList.toggle("MON");
          BOX.classList.toggle("Box"); Videosho.classList.toggle("Box");
          Photo1.classList.toggle("photo"); Photo2.classList.toggle("photo"); Photo3.classList.toggle("photo"); Photo4.classList.toggle("photo"); 
          Photo5.classList.toggle("photo"); IMGvideo.classList.toggle("photo");
    }
       function PLAYing(){
        ONplay.classList.toggle("playing");
        if (VIDEO==1){
            Videosho.innerText="sho video";
            VIDEO = null;
        }else{
            Videosho.innerText="remove video";
            VIDEO = 1;
        }
       }

       let Language          = null;
       const LanGuage        = document.getElementById('language');
       const VersionLanguage = document.getElementById('p');
       const Rain            = document.getElementById('rain');
       const Wind            = document.getElementById('wind');
       const Birds           = document.getElementById('birds');
       const Waves           = document.getElementById('waves');
       const Waterfall       = document.getElementById('waterfall');
       const HEAD            = document.getElementById('head');
       function LANGUAGE(){
        if(Language===1){
            LanGuage.src="png/english.png";
            VersionLanguage.innerText="english";
            Rain.innerText="he sound of rain.";
            Wind.innerText="the sound of wind.";
            Birds.innerText="the sound of birds.";
            Waves.innerText=" the sound of ocean waves.";
            Waterfall.innerText="the sound of a waterfall.";
            HEAD.innerText="Listen to natural sounds in the website to help you relax.";
            Language=null;
        }else{
            LanGuage.src="png/thai.png";
            VersionLanguage.innerText="ภาษาไทย";
            Rain.innerText="เสียงฝนตก";
            Wind.innerText="เสียงลมพัดผ่านใบไม้";
            Birds.innerText="เสียงนกร้อง";
            Waves.innerText="เสียงคลื่นทะเล";
            Waterfall.innerText="เสียงน้ำใหล";
            HEAD.innerText="ท่วงทำนองของรรมชาติ";
            Language=1;
        }
              }