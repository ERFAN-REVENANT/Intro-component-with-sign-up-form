document.querySelector('.claim-button').addEventListener('click', function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('.field-icon input');
    const errorIcons = document.querySelectorAll('.icon-error');
    const errorMsgs = document.querySelectorAll('.msg');

    inputs.forEach((input, index) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const value = input.value.trim();

        if (value === '' || (input.type === 'email' && !emailPattern.test(value))) {
            input.classList.add('error');
            errorMsgs[index].style.display = 'block';
            errorIcons[index].style.display = 'block';
            input.style.color = 'red';
        } else {
            input.classList.remove('error');
            errorMsgs[index].style.display = 'none';
            errorIcons[index].style.display = 'none';
            input.style.color = 'black';
        }
    });
});