
const tempLoad = () => {
    let temp = document.querySelector('#temp');

    // for initial step of animation
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#d63031"; 

    // for 2nd quarter step of animation
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#f8b627";
    }, 1000);

    // for half step of animation
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    }, 2000);

    // for 3rd quarter step of animation
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
    }, 3000);

    // for final step of animation
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031";
    }, 4000);
}

tempLoad(); // this function will run the animation

setInterval(tempLoad, 5000); // setInterval will help for applying loop the animation