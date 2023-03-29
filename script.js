const colorOptions = document.querySelectorAll('.color-option');
const submitButton = document.querySelector('.submit-button');

let chosenColor;

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(option => {
            option.classList.remove('selected');
        });
        option.classList.add('selected');
        chosenColor = option.style.backgroundColor;
    });
});


