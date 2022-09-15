const listBtn = document.querySelectorAll('.list');
const itemBox = document.querySelectorAll('.item_box');

for(let i = 0; i < listBtn.length; i++){
	listBtn[i].addEventListener('click', function(){
		for(let j = 0; j < listBtn.length; j++){
			listBtn[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for(let k = 0; k < itemBox.length; k++){
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');

			if(itemBox[k].getAttribute('data-item') == dataFilter || 
			dataFilter == "all"){
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			}
		}
	})
}
// menu
const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
if(bar){
	bar.addEventListener('click', ()=>{
		menu.classList.add('active');
	})
}
if(close){
	close.addEventListener('click', ()=>{
		menu.classList.remove('active');
	})
}
