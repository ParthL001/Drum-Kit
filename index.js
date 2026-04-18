var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;

        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;

        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;

        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;

        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;

        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;

        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;

        default:
            console.log(key);
    }
}