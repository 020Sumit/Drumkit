// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return null;
//   key.classList.add("playing");
//   audio.currentTime = 0;
//   audio.play();
//   setTimeout(function() {
//     key.classList.remove("playing");
//   }, 100);
// }

// // function removeTransition(e) {
// //   if (e.propertyName !== "tansform") return;
// //   e.target.classList.remove("playing");
// // }

// // const keys = Array.from(document.querySelectorAll(".key"));
// // keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function play(e){
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    setTimeout(function(){
        key.classList.remove('playing');
    },100);
}

window.addEventListener("keydown", play);
