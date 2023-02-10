import '../css/style.css'
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    this.children[1].children[0].classList.toggle('linkUnClickable')
  }
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