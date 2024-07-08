const body = document.querySelector('body');
const container = document.querySelector('.container');
const size = [10, 18, 24, 32, 38, 48];
const sound = new Audio('underwater-ambience-6201.mp3');
let X, Y;

sound.play();
sound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

onmousemove = function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    X = mouseX;
    Y = mouseY;
}


setInterval(() => {
    let i = Math.floor(Math.random() * (6));
    let a = 0;
    let b = 0;
    let c = X;
    let d = Y;
    let reverse = Math.floor(Math.random() * 2) ? true : false;


    const el = document.createElement('div');
    el.classList.add('bubles');
    container.appendChild(el);

    el.style.width = `${size[i]}px`;
    el.style.height = `${size[i]}px`;
    el.style.left =  `${X}px`;
    el.style.top = `${Y}px`; 


    let n = setInterval(bubles, 50);

    function bubles() {
        if(a == 30) {
            reverse = true;
        }
        if(a == -30) {
            reverse = false;
        }
        
        if(reverse) {
            a -= 10;
        } else {
            a += 5;
        }

        if(b == 1200) {
            clearInterval(n);
        }

        b += 20;
        
        el.style.left = `${a + c}px`;
        el.style.top = `${d - b}px`;
    }


    function noBubles() {
        container.removeChild(container.firstChild);
    }
    
    setTimeout(noBubles, 5000);
}, 200);
