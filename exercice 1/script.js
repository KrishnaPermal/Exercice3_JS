let img = document.getElementById('image1');


function hoverImg(x) {

    let target = event.target;
    target.style.border = '3px solid red';

}


function normalImg(x) {
    let target = event.target;
  target.style.border = 'none';
}