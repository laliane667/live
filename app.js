
/* List of audio */
var audioList = [
    {aud: document.getElementById("piano-dry").children[0]},
    {aud: document.getElementById("piano-largeHall").children[0]},    
    {aud: document.getElementById("piano-reflected").children[0]},  
    {aud: document.getElementById("piano-delay").children[0]},    
    {aud: document.getElementById("piano-freeze").children[0]}  
];

var currentAudio = audioList[0].aud; //Curent audio selected, initialy: dry piano
var audioSelectedID = 0; // 0 correspond to the dry piano

currentAudio.pause();

var isAudioActive = false;//Boolean that enable/disable audio playing

/* Function that turn of all audios */
function pauseAllAudio(){   
    for(let i = 0; i < audioList.length; i++){
        audioList[i].aud.pause();
    }
} 
pauseAllAudio();


/* Function that set the current audio selected; affected to selection buttons */
function setCurrentAudio(audioSelected) {

    audioSelectedID = audioSelected;
    currentAudio.pause();
    currentAudio = audioList[audioSelected].aud;

    if(isAudioActive == true)
        currentAudio.play();
}

/* Function that enable/disable audio playing; affected to play/pause button */
function playPause(sel)
{
    isAudioActive = !isAudioActive; 
    if(isAudioActive == true){
        currentAudio.play();
    }else if(isAudioActive == false){
        currentAudio.pause();
        if((sel == 0 && (audioSelectedID == 3 || audioSelectedID == 4)) || (sel == 1 && (audioSelectedID == 1 || audioSelectedID == 2))){
            currentAudio = audioList[0].aud;
        }
    }
}
