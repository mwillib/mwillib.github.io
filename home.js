window.addEventListener('mousemove', function (e) {
    if(e.x < document.documentElement.clientWidth/2) {
        const image = document.getElementById('mike').src = "img/mikeflipped.png";
    }else {
        const image = document.getElementById('mike').src = "img/mike.png";
    }
})