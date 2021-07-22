const setKittyName = function () {
    const kitcatName = document.querySelector('.catname').value;
    document.querySelector('.second').textContent = `${kitcatName}, that's a really cute name :3`;
}
//this is the function that handles creating a phrase that says how cute the cat's name is,
//and accepts the input stored from lines 8-10 & 12-16 (same input received different ways,)
//via enter or click

document.querySelector('.kittybtn').addEventListener('click', function(){
    setKittyName();
});

document.querySelector('.catname').addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        setKittyName();
    }
});

document.querySelector('.reset').addEventListener('click', function(){
    document.querySelector('.second').textContent = `try again, silly!`
    document.querySelector('.catname').value = ``
});
//this is the reset button function, which handles clicking the reset button,
//getting a try again phrase, and resetting the placeholder phrase


// link .js after everything else so that text images etc load first, then the style comes in after.
// when you have two differnet ways to do the same thing (set hte kitty name in this case by pressing enter or 
// by clicking) it's better code style to move that functionality into a function.  