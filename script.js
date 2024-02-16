window.addEventListener('scroll', function(e){
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }
});

function rangeSlider() {
    let slider = document.querySelectorAll(".range-slider");
    let range = document.querySelectorAll(".range-slider__range");
    let value = document.querySelectorAll(".range-slider__value");
  
    slider.forEach((currentSlider) => {
      value.forEach((currentValue) => {
        let val = currentValue.previousElementSibling.getAttribute("value");
        currentValue.innerText = val;
      });
  
      range.forEach((elem) => {
        elem.addEventListener("input", (eventArgs) => {
          elem.nextElementSibling.innerText = eventArgs.target.value;
        });
      });
    });
  }
  rangeSlider();
