// Initiallizong Variables
let masterPlay = document.getElementById('play');
let backPlay = document.querySelector('#back');
let forPlay = document.getElementById('forword');
let myProgressBar = document.getElementById('myProgressBar');
let audioElement = new Audio('music/1.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let play_pause = document.querySelectorAll('.song');
let songIndex = 1;
let inp = document.querySelector('input');
let btn = document.querySelector('.button');
let songBanner = document.querySelector('#alubm');
let para = document.querySelector('p');
let head = document.querySelector('h3');

let songs = [
    { songname: "Music 01", filePath: 'music/1.mp3', coverPath: 'images/Cover01.webp' },
    { songname: "Music 02", filePath: 'music/2.mp3', coverPath: 'images/Cover02.webp' },
    { songname: "Music 03", filePath: 'music/3.mp3', coverPath: 'images/Cover03.jpeg' },
    { songname: "Music 04", filePath: 'music/4.mp3', coverPath: 'images/Cover04.jpeg' },
    { songname: "Music 05", filePath: 'music/5.mp3', coverPath: 'images/Cover05.jpeg' },
];

// Accessor
songItem.forEach((element, i) => {
    element.getElementsByClassName('songName')[0].innerText = songs[i].songname;
    element.querySelectorAll('img')[0].src = songs[i].coverPath;
});
    


//  playTraker
const makeAllPlays = (e) => {
    let playBtn = e.target.classList.value;
    for (pla of play_pause) {
        if (playBtn != pla) {
            pla.classList.remove('fa-pause');
            pla.classList.add('fa-play');
        }

    }
}
// pauseTraker
const makeAllPause = (e) => {
    // Pause Function
}


// play list buttons function
for (play of play_pause) {
    
    play.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPlays(e);



        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `music/${songIndex}.mp3`;
        bannerChange(songIndex);
        audioElement.currentTime = 0;
        statusPlay();



    })
}
// masterPlay
masterPlay.addEventListener('click', (e) => {
    songIndex;
    if (audioElement.paused || audioElement.currentTime <= 0) {
        statusPlay();

        bannerChange(songIndex);
        
    } else {
        
        makeAllPlays(e);
        statusStop();
    }
})


// bannerChange
const bannerChange = (songIndex)=>{
    let val = (`music/${songIndex}.mp3`);
    for (m of songs){
        if(m.filePath == val){
            
            songBanner.src = m.coverPath;
            para.innerText = m.songname;

        }
    }
}
const statusPlay = ()=>{
    audioElement.play();
    head.innerText = "Playing..."
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

}

const statusStop =()=>{
    audioElement.pause();
    masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
}

// forPlay
forPlay.addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 1;
    } else {
        songIndex += 1;
    };
    audioElement.src = `music/${songIndex}.mp3`;
    bannerChange(songIndex);
    audioElement.currentTime = 0;
    statusPlay();
    
    
});
// blackPlay 
backPlay.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    };
    audioElement.src = `music/${songIndex}.mp3`;
    bannerChange(songIndex);
    audioElement.currentTime = 0;
    statusPlay();
    
    
    
})
btn.addEventListener('click', () => {
    let info = inp.value;
    console.log(info);
    for (song of songs) {
        console.log(song.songname);
        if (info == song.songname) {
            audioElement.src = song.filePath;
            statusPlay();
            
        }
    }
})

// myProgressBar
audioElement.addEventListener("timeupdate", (e) => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    songIndex;
    myProgressBar.value = progress;
    if (myProgressBar.value == 100){
        songIndex +=1;
        audioElement.src = `music/${songIndex}.mp3`;
        bannerChange(songIndex);
        makeAllPlays(e);
        statusPlay();
    }
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
});


// Adding a new Feature "Home Button"

// initializing variables

let homeFeature = document.querySelector('.home');
let logo = document.querySelector('.brand');
let account = document.querySelector('.account');
let library = document.querySelector('.library');
let accountData = document.querySelector('h4');
let datas = document.querySelectorAll('h5');
let rightSides = document.querySelector('.songBanner');
let exit = document.querySelector('.exit');
homeFeature.style.display = 'None';

logo.addEventListener('click', ()=>{
    homeFeature.style.display = 'block';
    rightSides.classList.add('rightSides');

})
exit.addEventListener('click', ()=>{
    homeFeature.style.display = 'None';
    rightSides.classList.remove('rightSides');
})


