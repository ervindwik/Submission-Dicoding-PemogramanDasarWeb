window.onscroll = function () {
    myFunction(mediaQuery)
};
var mediaQuery = window.matchMedia("(max-width: 800px)")
myFunction(mediaQuery)
mediaQuery.addListener(myFunction)

function myFunction(mediaQueryOn) {
    if (mediaQueryOn.matches) { // If media query matches
        console.log('ok');
        document.getElementById("head").style.boxShadow = "0 2px 10px rgba(0, 0, 0, .5)";
    } else {

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("head").style.height = "90px";
            document.getElementById("head").style.boxShadow = "0 2px 10px rgba(0, 0, 0, .5)";
            document.querySelector(".logo").style.fontSize = "36px";
            document.querySelector(".nav-links").style.fontSize = "16px";
        } else {
            document.getElementById("head").style.height = "80px";
            document.querySelector(".logo").style.fontSize = "30px";
            document.querySelector(".nav-links").style.fontSize = "14px";
            document.getElementById("head").style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
        }
        console.log('siap');
    }
}