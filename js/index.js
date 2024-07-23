var banners = ["./img/destaque-home.png","./img/destaque-home-2.png"];
var bannerAtual = 0;

function imgRot(){
    bannerAtual = (bannerAtual + 1)% 2;
    document.querySelector('.destaque img').src = 
    banners[bannerAtual];
}
setInterval(imgRot, 3000);


const AudioP = (document.querySelector('#audioPlayer'));
const InputRange = document.querySelector('#input-range');
const ButtonPlay = document.querySelector('#Play');

InputRange.addEventListener("input", () => { AudioP.volume = InputRange.value;});

ButtonPlay.addEventListener("click", () => {
    AudioP.play();
});
