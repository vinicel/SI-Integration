videoPause();

function checkVideo(){
    if(littleOn == 0){
            document.getElementById("carousel-big").classList.add('carousel-hidden');
            document.getElementById("carousel-big-2").classList.remove('carousel-hidden');
            document.getElementById("carousel-little").classList.add('carousel-hidden');
            document.getElementById("carousel-little-2").classList.remove('carousel-hidden');
            video1.pause();
            video2.play();
            littleOn = 1;

    } else if(littleOn == 1){
            document.getElementById("carousel-big").classList.remove('carousel-hidden');
            document.getElementById("carousel-big-2").classList.add('carousel-hidden');
            document.getElementById("carousel-little").classList.remove('carousel-hidden');
            document.getElementById("carousel-little-2").classList.add('carousel-hidden');
            video1.play();
            video2.pause();
            littleOn = 0;
    }
}


function videoPause(){
    video3.pause();
    video4.pause();
    video1.play();
    video2.play();
    document.getElementById("carousel-big").classList.remove('carousel-grey');
    document.getElementById("carousel-big-2").classList.remove('carousel-grey');
}

function videoPlay(){
    video3.play();
    video4.play();
    video1.pause();
    video2.pause();
    document.getElementById("carousel-big").classList.add('carousel-grey');
    document.getElementById("carousel-big-2").classList.add('carousel-grey');
}