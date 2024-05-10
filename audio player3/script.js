let data = {
    title : [
    "Sweet Smile",
    "David Kushner Daylight",
    "One More Shot",
    "Adler Mary Jane",
    "WTF 2"],
    song : [
    "music/sweet smile.mp3",
    "David Kushner - Daylight (Official Music Video).mp3",
    "Novacaine - Shiloh Dynasty  One More Shot Speed Up.mp3",
    "Shwayze- Cisco Adler-Mary Jane-textmp3.ru (1).mp3",
    "UGOVHB - WTF 2 ( PROD.EF ).mp3"],
    poster : [
    "https://i.pinimg.com/originals/3a/76/20/3a762091c6d9fb10d75ed9793d3beb29.gif",

    "https://media2.giphy.com/media/bqm6WOjuLu480/200w.gif",
    "https://www.icegif.com/wp-content/uploads/icegif-2016.gif"
    ]
    
    }

    let song = new Audio()


    window.onload = function(){
        playSong()
    }


    let currentSong = 0 
    console.log(data.title[currentSong]);

    function playSong(){
        song.src = data.song[currentSong]
        let songTitle = document.getElementById("songTitle")
        songTitle.textContent = data.title[currentSong]
        let img = document.getElementsByClassName("row1")
        img[0].style.backgroundImage="url(" + data.poster[currentSong]+")";
        let main = document.getElementsByClassName("main")
        main[0].style.backgroundImage = "url("+data.poster[currentSong]+")";
        song.play()
    }
    function playOrPauseSong(){
        let play = document.getElementById("play")
        if(song.paused){
    song.play()
    play.src = "images/pause.png"
        }else{
            song.pause()
            play.src = "images/play-button-arrowhead.png"
        }
    }