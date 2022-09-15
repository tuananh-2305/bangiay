const sliderValue = document.querySelector(".price_number")
const inputSlider = document.querySelector(".price_input")
inputSlider.oninput = (() => {
    const value = inputSlider.value;
    sliderValue.textContent = value;
    });

