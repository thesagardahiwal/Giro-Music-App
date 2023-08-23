// Initiallizong Variables
let masterPlay = document.getElementById('play');
let backPlay = document.querySelector('#back');
let forPlay = document.getElementById('forword');
let myProgressBar = document.getElementById('myProgressBar');
let audioElement = new Audio('1.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let play_pause = document.querySelectorAll('.song');
let songIndex = 1;
let inp = document.querySelector('input');
let btn = document.querySelector('.button');
let songBanner = document.querySelector('#alubm');

let songs = [
    { songname: "Music 01", filePath: '1.mp3', coverPath: 'images/Cover01.webp' },
    { songname: "Music 02", filePath: '2.mp3', coverPath: 'images/Cover02.webp' },
    { songname: "Music 03", filePath: '3.mp3', coverPath: 'images/Cover03.jpeg' },
    { songname: "Music 04", filePath: '4.mp3', coverPath: 'images/Cover04.jpeg' },
    { songname: "Music 05", filePath: '5.mp3', coverPath: 'images/Cover05.jpeg' },
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
        audioElement.src = `${songIndex}.mp3`;
        bannerChange(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');



    })
}
// masterPlay
masterPlay.addEventListener('click', (e) => {
    songIndex;
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        bannerChange(songIndex);
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    } else {
        audioElement.pause();
        makeAllPlays(e);
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
    }
})


// bannerChange
const bannerChange = (songIndex)=>{
    let val = (`${songIndex}.mp3`);
    for (m of songs){
        if(m.filePath == val){
            
            songBanner.src = m.coverPath;
        }
    }
}
// forPlay
forPlay.addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 1;
    } else {
        songIndex += 1;
    };
    audioElement.src = `${songIndex}.mp3`;
    bannerChange(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    
});
// blackPlay 
backPlay.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    };
    audioElement.src = `${songIndex}.mp3`;
    bannerChange(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    
    
})
btn.addEventListener('click', () => {
    let info = inp.value;
    console.log(info);
    for (song of songs) {
        console.log(song.songname);
        if (info == song.songname) {
            audioElement.src = song.filePath;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
    }
})

// myProgressBar
audioElement.addEventListener("timeupdate", () => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
});




