// const sounds  = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// sounds.forEach(sound => {
//     const btn = document.createElement("button");
//     btn.innerHTML = sound;
//     btn.classList.add("btn");
//     btn.addEventListener("click", () =>{
//         stopSongs()
//         console.log(btn) 
//         document.getElementById(sound).play()
//         console.log(sound+"  second console")
//     })
//     document.getElementById("buttons").appendChild(btn)

// })

// function stopSongs(){
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)
//         console.log(song+"  third console")
//         song.pause()
//         song.currentTime = 0;
//     })
// }

const sounds  = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound  => {

    const btn = document.createElement("button")
    btn.innerHTML = sound
    document.getElementById("buttons").appendChild(btn)
    btn.classList.add("btn")
    btn.addEventListener("click", () =>{
        sounds.forEach(sound =>{
            const songs = document.getElementById(sound);
            songs.pause()
            songs.currentTime = 0
        })
        document.getElementById(sound).play()
    })
})