// let picCount = document.querySelectorAll('.lent img').length;

// let lent = document.querySelector('.lent');
// lent.style.width = (picCount * 100) + 'vw';

// let ulTag = document.querySelector('ul')

// let left_btn = document.querySelector('.fa-chevron-left');
// let right_btn = document.querySelector('.fa-chevron-right');

// createDots();
// let dots = document.querySelectorAll('li');
// dots[0].classList.add('active');


// let position = 0;
// right_btn.addEventListener('click', function () {
//     if (position < 100 * (picCount - 1)) {
//         position = position + 100;
//     } else {
//         position = 0;
//     }
//     setActive();
//     lent.style.right = position + 'vw';
// })
// left_btn.addEventListener('click', function () {
//     if (position > 0) {
//         position = position - 100;
//     } else {
//         position = 100 * (picCount - 1);
//     }
//     setActive();
//     lent.style.right = position + 'vw';
// })

// let slide = setInterval(btnclick, 2000);


// function btnclick() {
//     if (position < 100 * (picCount - 1)) {
//         position = position + 100;
//     } else {
//         position = 0;
//     }
//     lent.style.right = position + 'vw';
// }


// lent.addEventListener('mouseenter', function () {
//     clearInterval(slide);
// })
// lent.addEventListener('mouseleave', function () {
//     slide = setInterval(btnclick, 2000);
// })

// function createDots() {
//     for (let i = 0; i < picCount; i++) {
//         let li = document.createElement('li');
//         li.addEventListener('click', function () {
//             position = i * 100;
//             lent.style.right = position + 'vw';
//             setActive();
//         })
//         ulTag.appendChild(li);
//     }
// }


// function setActive() {
//     let activeIndex = position / 100;
//     dots.forEach((e) => {
//         e.classList.remove('active')
//     })
//     dots[activeIndex].classList.add('active');
// }   




let picCount = document.querySelectorAll('.lent img');
let left_btn = document.querySelector('.fa-chevron-left');
let right_btn = document.querySelector('.fa-chevron-right');
let index = 0;
let p = document.querySelector('p');

function remove() {
    for (let i = 0; i < picCount.length; i++) {
        picCount[i].classList.remove('active')
    }
}
left_btn.addEventListener('click', function () {
    remove()
    if (index == 0) {
        index = picCount.length - 1;
    } else {
        index--;
    }
    picCount[index].classList.add('active')
    let span = document.createElement('span');
    span = index + ' / ' + picCount.length
    p.appendChild(span);
})
right_btn.addEventListener('click', function () {
    remove()
    if (index == (picCount.length - 1)) {
        index = 0;
    } else {
        index++;
    }
    picCount[index].classList.toggle('active')
    let span = document.createElement('span');
    span.innerText = index + ' / ' + picCount.length
    p.appendChild(span);


})