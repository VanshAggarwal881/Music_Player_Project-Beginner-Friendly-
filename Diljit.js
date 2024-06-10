const music = new Audio('artist_diljit_songs/1.mp3');
// music.play();


const songs = [ 
    {
        id : 1,
        songname : `Born To Shine
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 2,
        songname : `Hass Hass
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 3,
        songname : `5 Taara
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 4,
        songname : `Proper Patola
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 5,
        songname : `Naina
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 6,
        songname : `Raat Di Gedi
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 7,
        songname : `Goat
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    },

    {
        id : 8,
        songname : `Clash
        <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "goat.webp"
    }

    

    
]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;

})

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click' , () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
        
    }
});

const makeallplay = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) =>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');

    })
}

const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) =>{
        el.style.background = 'rgba(150, 149, 149, .0)';
    })
}

let index = 0;
let poster_play_bar = document.getElementById('poster_play_bar');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click' , (el) =>{
        index = el.target.id;
        poster_play_bar.src = `goat.webp`;
        music.src = `artist_diljit_songs/${index}.mp3`;
        music.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        download_music.href = `artist_diljit_songs/${index}.mp3`;
        let songtitles = songs.filter((els) =>{
            return els.id == index;
        });

        songtitles.forEach(elss =>{
            let {songname} = elss;
            title.innerHTML = songname;
            download_music.setAttribute('download' , songname);
        })

        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
        makeallplay();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active1');
    })
})







let scroll_left = document.getElementById('scroll_left');
let scroll_right = document.getElementById('scroll_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
// let item = document.getElementsByClassName('item')[0];
scroll_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 150;
    // item.scrollLeft -= 150;
});
scroll_right.addEventListener('click', () => {
    pop_song.scrollLeft += 150;
    // item.scrollLeft += 150;
});

let scroll_left_artist = document.getElementById('scroll_left_artist');
let scroll_right_artist = document.getElementById('scroll_right_artist');
// let pop_song = document.getElementsByClassName('pop_song')[0];
let item = document.getElementsByClassName('item')[0];
scroll_left_artist.addEventListener('click', () => {
    // pop_song.scrollLeft -= 150;
    item.scrollLeft -= 150;
});
scroll_right_artist.addEventListener('click', () => {
    // pop_song.scrollLeft += 150;
    item.scrollLeft += 150;
});

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentend.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    
    currentstart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change' , () => {
    music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change' ,() => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
 });

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' , () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `artist_diljit_songs/${index}.mp3`;
    poster_play_bar.src = `goat.webp`;
    music.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

    let songtitles = songs.filter((els) =>{
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songname} = elss;
        title.innerHTML = songname;
    })

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
    makeallplay();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
});


next.addEventListener('click' , () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `artist_diljit_songs/${index}.mp3`;
    poster_play_bar.src = `goat.webp`;
    music.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

    let songtitles = songs.filter((els) =>{
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songname} = elss;
        title.innerHTML = songname;
    })

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
    makeallplay();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click' , () =>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
                shuffle.classList.remove('fa-repeat');
                shuffle.classList.remove('fa-music');
                shuffle.classList.add('fa-shuffle');
                shuffle.innerHTML = 'shuffle';
                break;

        case "shuffle":
                    shuffle.classList.remove('fa-repeat');
                    shuffle.classList.add('fa-music');
                    shuffle.classList.remove('fa-shuffle');
                    shuffle.innerHTML = 'next';
                    break;
    }
});



const nextSong = () =>{
    if (index == songs.length) {
        index=1;
        
    } else {
        index++;
    }
    music.src = `artist_diljit_songs/${index}.mp3`;
    poster_play_bar.src = `goat.webp`;
    music.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

    let songtitles = songs.filter((els) =>{
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songname} = elss;
        title.innerHTML = songname;
    })

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
    makeallplay();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}

const repeatSong = () =>{
    index;
    music.src = `artist_diljit_songs/${index}.mp3`;
    poster_play_bar.src = `goat.webp`;
    music.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

    let songtitles = songs.filter((els) =>{
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songname} = elss;
        title.innerHTML = songname;
    })

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
    makeallplay();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}

const randomSong = () =>{
    if (index == songs.length) {
        index=1;
    } else {
        index = Math.floor((Math.random()*songs.length)+1);
    }
    music.src = `artist_diljit_songs/${index}.mp3`;
    poster_play_bar.src = `goat.webp`;
    music.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

    let songtitles = songs.filter((els) =>{
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songname} = elss;
        title.innerHTML = songname;
    })

    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgba(150, 149, 149, .1)';
    makeallplay();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}

music.addEventListener('ended' , () =>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeatSong();
            
            break;
    
        case 'next':
                nextSong();
                
                break;

        case 'shuffle':
            randomSong();
                    
            break;
    }

});