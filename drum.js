window.addEventListener('keydown', playSound);
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;//stop the function from running all together
    audio.currentTime = 0;//rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    // console.log(e);// we can notice the propertyName: transform after press any key
    //so we want to remove the class "playing" when the propertyname=transform; 
    if (e.propertyName !== 'transform') return;// skip it if no transform ocuured
    this.classList.remove('playing'); //this refer to key
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
