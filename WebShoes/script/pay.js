const btn1 = document.querySelector(".btn_click1");
const btn2 = document.querySelector(".btn_click2");
const div = document.querySelector(".pay_card");
btn1.addEventListener('click', ()=> {
    div.style.display = 'none';
});
btn2.addEventListener('click', ()=> {
        div.style.display = 'block';
});