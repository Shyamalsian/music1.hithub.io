
console.log("Working")
let song=document.getElementById('m1');
let button = document.getElementById('btn')
console.log(button);
console.log(song);

button.onclick=function()
{
    if(song.paused){
    song.play();
    button.src = "pause.png";
    }
    else
    {
        song.pause();
        button.src = "play.png";
    }
    
}