import '../css/style.css'
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function mouseEnterSaturate(e){
    if (e.classList.includes('saturate')) {
        this.classList.remove('saturate');
    } else {
        this.classList.add('saturate');
    }
}

panels.forEach((panel)=>{
  panel.addEventListener('click',toggleOpen);
  panel.addEventListener('mouseenter',mouseEnterSaturate);
  panel.addEventListener('mouseexit',mouseEnterSaturate);
});

let experienceText = Array.from(document.querySelectorAll('span'));
let listItems = Array.from(document.querySelectorAll('li'));

listItems.forEach((item)=>{
  item.addEventListener('mouseenter',()=>{
    experienceText[listItems.indexOf(item)].classList.add('open');
  });
  item.addEventListener('mouseleave',()=>{
    experienceText[listItems.indexOf(item)].classList.remove('open');
  });
});

console.log(experienceText, listItems);