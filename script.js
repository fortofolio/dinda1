const linkmp3 = document.querySelector('#linkmp3');
audio = new Audio('' + linkmp3.src);
audio.play();

let title = document.querySelector('.title');
let count = 0;

let sliceWidth = 30;
let sliceHeight = 30;
let rows = 10;
let cols = 10;

let imageUrl1 = './images/dinda/1d.jpg';
let container1 = document.querySelector('.image-container1');
let slices1 = [];

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        let span = document.createElement('span');
        span.classList.add('image-slice1');
        span.style.top = `${row * sliceHeight}px`;
        span.style.left = `${col * sliceWidth}px`;
        span.style.width = `${sliceWidth}px`;
        span.style.height = `${sliceHeight}px`;
        span.style.backgroundImage = `url(${imageUrl1})`;
        span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
        container1.appendChild(span);
        slices1.push(span);
        slices1.forEach((slice, index) => {
                slice.style.transform = `translate(${Math.random() * 100 - 50}vw, 
                ${Math.random() * 100 - 50}vh) 
                rotate(${Math.random() * 360}deg)`;
        });
    }
}

let imageUrl2 = './images/dinda/2d.jpg';
let container2 = document.querySelector('.image-container2');
let slices2 = [];

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        let span = document.createElement('span');
        span.classList.add('image-slice2');
        span.style.top = `${row * sliceHeight}px`;
        span.style.left = `${col * sliceWidth}px`;
        span.style.width = `${sliceWidth}px`;
        span.style.height = `${sliceHeight}px`;
        span.style.backgroundImage = `url(${imageUrl2})`;
        span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
        span.style.opacity = 0;
        container2.appendChild(span);
        slices2.push(span);
        slices2.forEach((slice, index) => {
                slice.style.transform = `translate(${Math.random() * 100 - 50}vw, 
                ${Math.random() * 100 - 50}vh) 
                rotate(${Math.random() * 360}deg)`;
        });
    }
}

let imageUrl3 = './images/dinda/3d.jpg';
let container3 = document.querySelector('.image-container3');
let slices3 = [];

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        let span = document.createElement('span');
        span.classList.add('image-slice3');
        span.style.top = `${row * sliceHeight}px`;
        span.style.left = `${col * sliceWidth}px`;
        span.style.width = `${sliceWidth}px`;
        span.style.height = `${sliceHeight}px`;
        span.style.backgroundImage = `url(${imageUrl3})`;
        span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
        span.style.opacity = 0;
        container3.appendChild(span);
        slices3.push(span);
        slices3.forEach((slice, index) => {
                slice.style.transform = `translate(${Math.random() * 100 - 50}vw, 
                ${Math.random() * 100 - 50}vh) 
                rotate(${Math.random() * 360}deg)`;
        });
    }
}

let imageUrl4 = './images/dinda/4d.jpg';
let container4 = document.querySelector('.image-container4');
let slices4 = [];

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        let span = document.createElement('span');
        span.classList.add('image-slice4');
        span.style.top = `${row * sliceHeight}px`;
        span.style.left = `${col * sliceWidth}px`;
        span.style.width = `${sliceWidth}px`;
        span.style.height = `${sliceHeight}px`;
        span.style.backgroundImage = `url(${imageUrl4})`;
        span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
        span.style.opacity = 0;
        container4.appendChild(span);
        slices4.push(span);
        slices4.forEach((slice, index) => {
                slice.style.transform = `translate(${Math.random() * 100 - 50}vw, 
                ${Math.random() * 100 - 50}vh) 
                rotate(${Math.random() * 360}deg)`;
        });
    }
}

let imageUrl5 = './images/dinda/5d.jpg';
let container5 = document.querySelector('.image-container5');
let slices5 = [];

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        let span = document.createElement('span');
        span.classList.add('image-slice5');
        span.style.top = `${row * sliceHeight}px`;
        span.style.left = `${col * sliceWidth}px`;
        span.style.width = `${sliceWidth}px`;
        span.style.height = `${sliceHeight}px`;
        span.style.backgroundImage = `url(${imageUrl5})`;
        span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
        span.style.opacity = 0;
        container5.appendChild(span);
        slices5.push(span);
        slices5.forEach((slice, index) => {
                slice.style.transform = `translate(${Math.random() * 100 - 50}vw, 
                ${Math.random() * 100 - 50}vh) 
                rotate(${Math.random() * 360}deg)`;
        });
    }
}

const animateButton = document.querySelector('.animateButton');
animateButton.addEventListener('click', () => {
    count++;
    if (count === 1) {
        // audio.play();
        slices1.forEach((slice, index) => {
            slice.style.opacity = 1;
            slice.style.transform = `translate(0, 0) rotate(0deg)`;
        });    
        slices2.forEach((slice, index) => {
            slice.style.opacity = 0.1;
        }); 

        // title.innerHTML = 'Hard Work Today';
        title.innerHTML = 'Semangat Yak!';
    } else if(count === 2) {
        slices2.forEach((slice, index) => {
            slice.style.opacity = 1;
            slice.style.transform = `translate(0, 0) rotate(0deg)`;
        });
        slices3.forEach((slice, index) => {
            slice.style.opacity = 0.1;
        });
        title.innerHTML = 'Jangan Cape2';    
    } else if(count === 3) {
        slices3.forEach((slice, index) => {
            slice.style.opacity = 1;
            slice.style.transform = `translate(0, 0) rotate(0deg)`;
        });
        slices4.forEach((slice, index) => {
            slice.style.opacity = 0.1;
        });
        title.innerHTML = 'Banyakin Istirahat';
    } else if(count === 4) {
        slices4.forEach((slice, index) => {
            slice.style.opacity = 1;
            slice.style.transform = `translate(0, 0) rotate(0deg)`;
        });
        slices5.forEach((slice, index) => {
            slice.style.opacity = 0.1;
        });
        title.innerHTML = 'Perbanyak Nyeblak!';
    } else if(count === 5) {
        slices5.forEach((slice, index) => {
            slice.style.opacity = 1;
            slice.style.transform = `translate(0, 0) rotate(0deg)`;
        });
        title.innerHTML = 'Good Work!';
    }
});
