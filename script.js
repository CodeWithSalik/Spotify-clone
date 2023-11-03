//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Galat Fehmi - CodeWithSalik", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Gangsta's Paradise - Coolio", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Heat Waves - Glass Animals", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Love Nwantiti - C-Kay", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Perfect - Ed Sheeran", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Safari - Serena", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Stereo Hearts - Gym Class Heroes", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
   
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;


    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})




//Listen to events
audioElement.addEventListener('timeupdate', () => {

    //update seeker

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress)
    myProgressBar.value = progress

})
myProgressBar.addEventListener('change', () => {
    seekUp = myProgressBar.value * audioElement.duration / 100;
    audioElement.currentTime = seekUp
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime = 0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})