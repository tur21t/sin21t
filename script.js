const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u']
const FREQUENCIES = [131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247]

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const frequencyIndex = FREQUENCIES.indexOf(1)

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

//play with computer keyboard 
document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active') //changing color of active key
    noteAudio.addEventListener('ended', () => {//change color back
        key.classList.remove('active')
    })

    //Send propeties to Diisplay function
    let freq;
    let noteName;
    noteName = key.dataset.note;
    if (key.dataset.note == "C3") {
        freq = 0;
        noteName = "C3";
      } else if (key.dataset.note == "Db3") {
        freq = 1;
      } else if (key.dataset.note == "D3") {
        freq = 2;
      } else if (key.dataset.note == "Eb3") {
        freq = 3;
      } else if (key.dataset.note == "E3") {
        freq = 4;
      } else if (key.dataset.note == "F3") {
        freq = 5;
      } else if (key.dataset.note == "Gb3") {
        freq = 6;      
      } else if (key.dataset.note == "G3") {
        freq = 7;
      } else if (key.dataset.note == "Ab3") {
        freq = 8;
      } else if (key.dataset.note == "A3") {
        freq = 9;
      } else if (key.dataset.note == "Bb3") {
        freq = 10;  
      } else {
        freq = 11;
      }
    display(FREQUENCIES[freq], noteName)
}




//This function accepts the values clicked as a parameter and returns the same to the textbox
function display(val, noteName){
    document.getElementById('result').value = noteName + " ≈ " + val + " Hz "
    return val
}
