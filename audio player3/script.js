let data = {
    title : [
    "Sweet Smile",
    "David Kushner Daylight",
    "One More Shot",
    "Mary Jane",
    "WTF 2"],
    song : [
    "music/sweet smile.mp3",
    "music/David Kushner - Daylight (Official Music Video).mp3",
    "music/Novacaine - Shiloh Dynasty  One More Shot Speed Up.mp3",
    "music/Mary Jane.mp3",
    "music/UGOVHB - WTF 2 ( PROD.EF ).mp3"],
    poster : [
    "https://i.pinimg.com/originals/3a/76/20/3a762091c6d9fb10d75ed9793d3beb29.gif",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e10ccd0-8864-444e-b827-f24cc5d28701/ddkbdmh-935df0af-5b8d-457e-b826-2db931d66bc2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTBjY2QwLTg4NjQtNDQ0ZS1iODI3LWYyNGNjNWQyODcwMVwvZGRrYmRtaC05MzVkZjBhZi01YjhkLTQ1N2UtYjgyNi0yZGI5MzFkNjZiYzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j3wHJzkjQaL1--XsihgP7kPZq_gr_eF5I-dTxPt8HtU",
    "https://media1.giphy.com/media/T72qhZdzEpOfE5rxdC/200w.gif?cid=6c09b95256f34xtybseuucy873pqv2vze52k3jdk0g89bmae&ep=v1_gifs_search&rid=200w.gif&ct=g",
    "https://media2.giphy.com/media/bqm6WOjuLu480/200w.gif",
    "https://www.icegif.com/wp-content/uploads/icegif-2016.gif",
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


    let currentTime = document.getElementsByClassName("currentTime")
    function convertTime(seconds){
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
        currentTime[0].textContent += " / " + min + " : " + sec
    }
//
    function next(){
        currentSong++
        if(currentSong == data.song.length){
            currentSong = 0 
        }

        playSong()
    }

  function prev(){
      currentSong--
      if(currentSong < 0){
        currentSong = data.song.length - 1
      }
      playSong()
  }


  let mutes = document.getElementById("mute")
  function mute(){
      if(song.muted){
          song.muted = false
          mutes.src = "images/volume.png"
      }else{
          song.muted = true
          mutes.src = "images/volume-mute.png"
      }
  }

  function deacrase(){
      song.volume-=0.2
 
  }
  function increase(){
      song.volume += 0.2

  }