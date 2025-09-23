//Writing All Logic for Masterplay where songs are actually play and controls
const music = new Audio('Songs/AZUL.mp3')


const songsobj = [
    {
        id: 1,
        songName: `AZUL<br>
        <div class="sub-title">Guru Randhwa</div>`,
        poster: "Images/Azul.jpg"
    },
    {
        id: 2,
        songName: `Chahun Main Ya Naa<br>
        <div class="sub-title">Arjit Sing & Palak Muchhal</div>`,
        poster: "Images/Chahun-Main-Ya-Naa.jpg"
    },
    {
        id: 3,
        songName: `I Really Do<br>
        <div class="sub-title">Karan Aujla</div>`,
        poster: "Images/I really Do.jpg"
    },
    {
        id: 4,
        songName: `Jannab-E-Aali<br>
        <div class="sub-title">Pritam & Sachet Tandon</div>`,
        poster: "Images/Jannab.jpg"
    },
    {
        id: 5,
        songName: `Kasturi<br>
        <div class="sub-title">Arjit Singh</div>`,
        poster: "Images/Kasturi.jpg"
    },
    {
        id: 6,
        songName: `Naam Chale<br>
        <div class="sub-title">Vikram Sarkar</div>`,
        poster: "Images/Naam Chale.jpg"
    },
    {
        id: 7,
        songName: `Pardesiyaa<br>
        <div class="sub-title">Krishnakali Saha & Sonu Nigam</div>`,
        poster: "Images/pardesiya.jpg"
    },
    {
        id: 8,
        songName: `Saiyaara - Old Version<br>
        <div class="sub-title">By Voice of Kishor Kumar</div>`,
        poster: "Images/Saiyaara.jpg"
    },
    {
        id: 9,
        songName: `Thodi Si Daaru<br>
        <div class="sub-title">AP Dhillon</div>`,
        poster: "Images/Thodi Si Daaru.jpg"
    },
    {
        id: 10,
        songName: `On My Way<br>
        <div class="sub-title">Alan Walker</div>`,
        poster: "Images/On My Way.jpg"
    },
    {
        id: 11,
        songName: `Be Intehaan<br>
        <div class="sub-title">Atif Aslam</div>`,
        poster: "Images/Be Intehaan.jpg"
    },
    {
        id: 12,
        songName: `Chaleya - Jawan<br>
        <div class="sub-title">Anirudh Ravichander</div>`,
        poster: "Images/Chaleya.jpg"
    },
    {
        id: 13,
        songName: `Paaniyo Sa<br>
        <div class="sub-title">Atif Aslam</div>`,
        poster: "Images/Paaniyo Sa.jpg"
    },
    {
        id: 14,
        songName: `Pehla Pyaar<br>
        <div class="sub-title">Armaan malik</div>`,
        poster: "Images/Pehla Pyaar.jpg"
    },
    {
        id: 15,
        songName: `Perfect - Ed Sheeran<br>
        <div class="sub-title">Ed Sheeran</div>`,
        poster: "Images/Perfect.jpg"
    },
    {
        id: 16,
        songName: `Tum Ho Toh<br>
        <div class="sub-title">Vishal Mishra & Hansika Pareek</div>`,
        poster: "Images/Tum Ho Toh.jpg"
    },
    {
        id: 17,
        songName: `Tumhare Hi Rahenge<br>
        <div class="sub-title">Varun Jain & Shilpa Rao</div>`,
        poster: "Images/Tumhare hi Rahenge.jpg"
    },
    {
        id: 18,
        songName: `Khoobsurat<br>
        <div class="sub-title">Vishal Mishra</div>`,
        poster: "Images/Khoobsurat.jpg"
    },
    
]


//Writing Code and Logic for searching songs
let searchResult = document.getElementsByClassName("searchResult")[0]

songsobj.forEach(element => {
    const {id, songName, poster} = element
    // console.log(poster)
    let card = document.createElement("a")
    card.classList.add('card')
    card.href = '#' + id
    card.innerHTML = `<img src="${poster}" alt="">
                        <div class="content">
                            ${songName}
                        </div>`
    searchResult.appendChild(card)
});

let input = document.getElementsByTagName('input')[0]
input.addEventListener('keyup', ()=>{
    let inputValue = input.value.toUpperCase()
    let items = searchResult.getElementsByTagName('a')

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0]
        let textValue = as.textContent || as.innerHTML

        if (textValue.toUpperCase().indexOf(inputValue) > -1) {
            items[index].style.display = "flex"
        } else {
            items[index].style.display = "none"
        }
        
        if (inputValue == 0) {
            searchResult.style.display = "none"
        } else {
            searchResult.style.display = ""
        }
    }
})



//Getting Poster and Names and Singer of Songs
Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songsobj[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songsobj[i].songName
})

//making logic to play songs and according to songs wave will act
let masterPlay = document.getElementById("masterPlay")
let wave = document.getElementById("wave")
masterPlay.addEventListener("click", ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
    }else{
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.add("bi-play-fill")
        masterPlay.classList.remove("bi-pause-fill")
    }
})




//Now changing play button to pause and vice verse
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName("playListPlay")).forEach((e)=>{
        e.classList.remove("bi-play-fill")
        e.classList.add("bi-pause-fill")
        
    })
}

//To Make background change when we select single song to play
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName("songItem")).forEach((e)=>{
        e.style.background = 'rgb(105, 105, 105, .0)'
        
    })
}





//Targeting by id to each song to be play when they get click and changes its poster accorind to songs. also when got click master's play nd pause button get changed.
let index = 0
let posterMasterPlay = document.getElementById("posterMasterPlay")
let downloadMusic = document.getElementById("downloadMusic")
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (b)=>{
        index = b.target.id
        // console.log(index)
        music.src = `Songs/${index}.mp3`;

        //This Method for getting poster can also work but for more smooth to understand, new mwthod mention below in next 8line (posterMasterPlay.src = poster)
        // posterMasterPlay.src = `ImagesMaster/${index}.jpg`;

        music.play()
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
        downloadMusic.href = `Songs/${index}.mp3`

        //Adding songs title into master by filtering above array which consists of objects.
        let songTitles = songsobj.filter((songElement)=>{
            return songElement.id ==index
        })

        songTitles.forEach(element =>{
            let {songName , poster} = element;
            title.innerHTML = songName
            posterMasterPlay.src = poster
            downloadMusic.setAttribute('download', songName)//Through this line 196.. we can download our playing song
        })

        //function for when particular song get played its background will change
        makeAllBackground()
        document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


        //function for when we click on play button it will get played and alse wave will play
        makeAllPlay();
        e.classList.add('bi-play-fill')
        e.classList.remove('bi-pause-fill')
        wave.classList.add('active1')
    })
})



//Writing Codes and Logics for Song's Time, progress bar
let currentStart = document.getElementById("currentStart")
let currentEnd = document.getElementById("currentEnd")
let seek = document.getElementById("seek")
let bar2 = document.getElementById("bar2") 
let dot = document.getElementById("dot")


music.addEventListener('timeupdate', ()=>{
    let music_CurrentTime = music.currentTime;
    let music_Duration = music.duration;
    // console.log(music_Duration)

    //Converting time into minutes
    let minutes1 = Math.floor(music_Duration / 60)
    let seconds1 = Math.floor(music_Duration % 60)

    if (seconds1 < 10) {
        seconds1 = `0${seconds1}`
    }
    currentEnd.innerHTML = `${minutes1}:${seconds1}`


    let minutes2 = Math.floor(music_CurrentTime / 60)
    let seconds2 = Math.floor(music_CurrentTime % 60)
    if (seconds2 <= 9) {
        seconds2 = `0${seconds2}`
    }
    currentStart.innerHTML = `${minutes2}:${seconds2}`


    //writing codes and logic for progressbar
    let progressbar = parseInt((music_CurrentTime / music_Duration)* 100)
    seek.value = progressbar
    // console.log(seek.value)
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`  
})



//Writing Code and Logic to change points on seekbar wherever we want to play the currentsong
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})



/*All Buttons Logic and Codes Starts from Here*/
//Writing Code and Logic for Volume
let vol_icon = document.getElementById("vol_icon")
let vol = document.getElementById("vol")
let volBar = document.getElementById("volBar")
let volDot = document.getElementById("volDot")

vol.addEventListener("change", ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-up");
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.add("bi-volume-mute-fill")
    }
    if (vol.value > 0) {
        vol_icon.classList.remove("bi-volume-up");
        vol_icon.classList.add("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-mute-fill")
    }
    if (vol.value > 50) {
        vol_icon.classList.add("bi-volume-up");
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-mute-fill")
    }
    //Writing code for controlling volume (Increase or Decrease)
    let vol_a = vol.value
    volBar.style.width = `${vol_a}%`
    volDot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
})



//Writing Logic and Code for Music Button to Shuffle, Random and Repeat
let shuffle = document.getElementsByClassName("shuffle")[0]
shuffle.addEventListener("click", ()=>{
    let a = shuffle.innerHTML

    switch (a) {
        case "next":
            shuffle.classList.add("bi-repeat")
            shuffle.classList.remove("bi-music-note-beamed")
            shuffle.classList.remove("bi-shuffle")           
            shuffle.innerHTML = "repeat"
            break;
    
        case "repeat":
            shuffle.classList.remove("bi-repeat")
            shuffle.classList.remove("bi-music-note-beamed")
            shuffle.classList.add("bi-shuffle")           
            shuffle.innerHTML = "random"
            break;

        case "random":
            shuffle.classList.remove("bi-repeat")
            shuffle.classList.add("bi-music-note-beamed")
            shuffle.classList.remove("bi-shuffle")           
            shuffle.innerHTML = "next"
            break;
    }
})



//Creating Function to Play Next Song Automatically when current song ends.
const nextSong = ()=>{
       if (index == songsobj.length) {
        index = 1;
    } else {
        index++
    }
        music.src = `Songs/${index}.mp3`;

        music.play()
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
        downloadMusic.href = `Songs/${index}.mp3`

        //Adding songs title into master by filtering above array which consists of objects.
        let songTitles = songsobj.filter((songElement)=>{
            return songElement.id ==index
        })

        songTitles.forEach(element =>{
            let {songName , poster} = element;
            title.innerHTML = songName
            posterMasterPlay.src = poster
            downloadMusic.setAttribute('download', songName)//Through this line 196.. we can download our playing song
        })

        //function for when particular song get played its background will change
        makeAllBackground()
        document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


        //function for when we click on play button it will get played and alse wave will play
        makeAllPlay();
        e.classList.add('bi-play-fill')
        e.classList.remove('bi-pause-fill')
        wave.classList.add('active1')
}


//Creating Function to Play Repeat Song.
const repeatSong = ()=>{
    index;
        music.src = `Songs/${index}.mp3`;

        music.play()
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
        downloadMusic.href = `Songs/${index}.mp3`

        //Adding songs title into master by filtering above array which consists of objects.
        let songTitles = songsobj.filter((songElement)=>{
            return songElement.id ==index
        })

        songTitles.forEach(element =>{
            let {songName , poster} = element;
            title.innerHTML = songName
            posterMasterPlay.src = poster
            downloadMusic.setAttribute('download', songName)//Through this line 196.. we can download our playing song
        })

        //function for when particular song get played its background will change
        makeAllBackground()
        document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


        //function for when we click on play button it will get played and alse wave will play
        makeAllPlay();
        e.classList.add('bi-play-fill')
        e.classList.remove('bi-pause-fill')
        wave.classList.add('active1')
}



//Creating Function to Play random Song from our array.
const randomSong = ()=>{
    if (index == songsobj.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random()*songsobj.length) + 1)
    };
        music.src = `Songs/${index}.mp3`;

        music.play()
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
        downloadMusic.href = `Songs/${index}.mp3`

        //Adding songs title into master by filtering above array which consists of objects.
        let songTitles = songsobj.filter((songElement)=>{
            return songElement.id ==index
        })

        songTitles.forEach(element =>{
            let {songName , poster} = element;
            title.innerHTML = songName
            posterMasterPlay.src = poster
            downloadMusic.setAttribute('download', songName)//Through this line 196.. we can download our playing song
        })

        //function for when particular song get played its background will change
        makeAllBackground()
        document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


        //function for when we click on play button it will get played and alse wave will play
        makeAllPlay();
        e.classList.add('bi-play-fill')
        e.classList.remove('bi-pause-fill')
        wave.classList.add('active1')
}


//Here we are adding event listner to music abt what to do when song end -- reference to music button, shuffle or repear
music.addEventListener("ended", ()=>{
    let b = shuffle.innerHTML

    switch (b) {
        case 'repeat':
            repeatSong()
            break;
    
        case 'next':
            nextSong()
            break;
        case 'random':
            randomSong()
            break;
    }
    
})




//Writing Code and Logic for Next and Previous Buttons.
let back = document.getElementById("back")
let next = document.getElementById("next")

//for Making Songs Previous
back.addEventListener("click", ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length
    }
    music.src = `Songs/${index}.mp3`;

    music.play()
    masterPlay.classList.remove("bi-play-fill") 
    masterPlay.classList.add("bi-pause-fill")

    //Adding songs title into master by filtering above array which consists of objects.
    let songTitles = songsobj.filter((songElement)=>{
        return songElement.id ==index
    })

    songTitles.forEach(element =>{
        let {songName , poster} = element;
        title.innerHTML = songName
        posterMasterPlay.src = poster
        })

    //function for when particular song get played its background will change
    makeAllBackground()
    document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


    //function for when we click on play button it will get played and alse wave will play
    makeAllPlay();
    e.classList.add('bi-play-fill')
    e.classList.remove('bi-pause-fill')
    wave.classList.add('active1')
})

//For Making Songs Next
next.addEventListener("click",()=>{
    index ++ ;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 1;
    }

    music.src = `Songs/${index}.mp3`;

    music.play()
    masterPlay.classList.remove("bi-play-fill") 
    masterPlay.classList.add("bi-pause-fill")

    //Adding songs title into master by filtering above array which consists of objects.
    let songTitles = songsobj.filter((songElement)=>{
        return songElement.id ==index
    })

    songTitles.forEach(element =>{
        let {songName , poster} = element;
        title.innerHTML = songName
        posterMasterPlay.src = poster
        })

    //function for when particular song get played its background will change
    makeAllBackground()
    document.getElementsByClassName("songItem")[index-1].style.background = "rgb(105, 105, 105, .1)";


    //function for when we click on play button it will get played and alse wave will play
    makeAllPlay();
    e.classList.add('bi-play-fill')
    e.classList.remove('bi-pause-fill')
    wave.classList.add('active1')
})




//Writing Logic for Scrolling Songs left and right
let pop_song_left = document.getElementById("pop_song_left")
let pop_song_right = document.getElementById("pop_song_right")
let popSongs = document.getElementsByClassName("popSongs")[0];

//For moving songs to left direction by scliking on right arrow
pop_song_right.addEventListener("click", ()=>{
    popSongs.scrollLeft +=330;
})

//For moving songs to right direction by scliking on left arrow
pop_song_left.addEventListener("click", ()=>{
    popSongs.scrollLeft -=330;
})



