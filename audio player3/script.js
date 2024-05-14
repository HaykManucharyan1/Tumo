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
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e10ccd0-8864-444e-b827-f24cc5d28701/ddkbdmh-935df0af-5b8d-457e-b826-2db931d66bc2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTBjY2QwLTg4NjQtNDQ0ZS1iODI3LWYyNGNjNWQyODcwMVwvZGRrYmRtaC05MzVkZjBhZi01YjhkLTQ1N2UtYjgyNi0yZGI5MzFkNjZiYzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j3wHJzkjQaL1--XsihgP7kPZq_gr_eF5I-dTxPt8HtU",
    "https://media1.giphy.com/media/T72qhZdzEpOfE5rxdC/200w.gif?cid=6c09b95256f34xtybseuucy873pqv2vze52k3jdk0g89bmae&ep=v1_gifs_search&rid=200w.gif&ct=g",
    "https://media2.giphy.com/media/bqm6WOjuLu480/200w.gif",
    "https://www.icegif.com/wp-content/uploads/icegif-2016.gif"
    ]
    
    }

    let song = new Audio()


    window.onload = function(){
        playSong()
    }


    let currentSong = 0 

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
    song.addEventListener("timeupdate",function (){
        // console.log(song.currentTime);
        // console.log(song.duration);
        let fill = document.getElementsByClassName("fill")
        let position = song.currentTime / song.duration
        fill[0].style.marginLeft = position * 100 + "%"
        convertTime(song.currentTime)
        if(song.ended){
            next()
        }
    })


    function convertTime(seconds){
        let currentTime = document.getElementsByClassName("currentTime")
        let min = Math.floor(seconds/60)
        let sec = Math.floor(seconds%60)
        min = (min < 10)? "0" + min : min;
        sec = (sec < 10)? "0" + sec : sec;
        currentTime[0].textContent = min + ":" + sec;
        totalTime(song.duration)
    }
    function totalTime(seconds){
        let min = Math.floor(seconds / 60)
        let sec = Math.floor(seconds % 60)
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        currentTime[0].textContent += "/" + "mian"
    }
    function next(){
        currentSong++
        if(currentSong >= data.song.lenght){
            currentSong = 0 
        }

        playSong()
    }
  function prev(){
      currentSong--
      if(currentSong < 0){
        currentSong = data.song.lenght - 1
      }
      playSong()
  }
