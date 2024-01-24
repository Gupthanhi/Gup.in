function fg(){
    
    document.getElementById('brd').style.backgroundColor='white'
    document.getElementById('brw').style.backgroundColor='white'
 
    
}
function fe(){
    
    document.getElementById('brd').style.backgroundColor='black'
    document.getElementById('brw').style.backgroundColor='black'
 
    
}
function fx(){
    
    document.getElementById('rt').style.color='black'   
}
function fy(){
    
    document.getElementById('rt').style.color='#7a0404'   
}


let isMouseDown = false;
let startX;
let scrollLeft;

const slidesContainer = document.getElementById('slides-container');

slidesContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - slidesContainer.offsetLeft;
  scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

slidesContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
});

slidesContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - slidesContainer.offsetLeft;
  const walk = (x - startX) * 3;
  slidesContainer.scrollLeft = scrollLeft - walk;
});

