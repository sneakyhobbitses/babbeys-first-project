document.querySelector('.ok').addEventListener('click', function() {
    if (document.querySelector('.yourname').value === '') {
        document.querySelector('.fortune').textContent = `try again :-)`
    } else if (document.querySelector('.favecolor').value === '') {
        document.querySelector('.fortune').textContent = `try again :-)`
    } else if (document.querySelector('.food').value === '00') {
        document.querySelector('.fortune').textContent = `try again :-)`
    } else if (document.querySelector('.month').value === '00') {
        document.querySelector('.fortune').textContent = `try again :-)`
    } else {
        submitForm();
    }
});

const submitForm = function() {
    const yourNameHere = document.querySelector('.yourname').value;
    const yourFaveColor = document.querySelector('.favecolor').value;
    const lastFood = document.querySelector('.food').value;
    const birthMonth = document.querySelector('.month').value;
    document.querySelector('.fortune').textContent = `okay, ${yourNameHere}... here's ur fortune:
    u said ur fave color is ${yourFaveColor}. that indicates big things coming ur way in ${birthMonth} months.
    as for the immediate future, it looks like you'll have a ${lastFood} day.`;
};

document.querySelector('.reset').addEventListener('click', function() {
    document.querySelector('.yourname').value = '';
    document.querySelector('.favecolor').value = '';
    document.querySelector('.food').value = '00';
    document.querySelector('.month').value = '00';
    document.querySelector('.fortune').textContent = `try again :-)`
});

document.querySelector('.ok').addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        submitForm()
    }
});