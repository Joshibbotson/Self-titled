window.onscroll = function () {
    addSticky()
}

const navBar = document.getElementById('navbar')

const sticky = navBar.offsetTop

function addSticky() {

    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    }
    else {
        navBar.classList.remove("sticky")
    }
}