let video = document.getElementById('video');
let modal = document.getElementById("myModal");
let videoSrc = 'https://naimi.gjirafa.com/api/media/gjvideo/y1x1x1/1080/index.m3u8';


// Krijimi i objektit te librarise, attach dhe play

if(Hls.isSupported()){
        let hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        video.play();
        
        
}
// nje settimeout per me e ndalu videon pas 10 sekondave dhe funksioni qe i handle pjesen tjeter
const timeout = 10000;
setTimeout(playPause, timeout);




// nese skemi asgje ne local storage, behet pause, kerkohen te dhena
// nese kemi yes ne local storage, vetem vazhdohet video, pra useri mbahet mend nese API ka dal "yes"


function playPause(){
    if(localStorage.getItem("APIResponse") === "yes"){
        

    video.play();

    }else{ 

    video.pause();
    
    modal.style.display = "block";

    }
    
        
    
}


function pauseVid(){
    video.pause();
}































