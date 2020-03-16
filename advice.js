const request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice');
request.onloadend = function() {
    if (request.status === 404) {
        document.getElementById('title').innerText = '~ 404 ~';
        document.getElementById('advice').innerText = 'shit man something messed up';
    }
};
request.responseType = 'json';
request.send();
request.onload = function() {
    if(request.status === 200){
        const response = request.response.slip.advice;
        document.getElementById('advice').innerText = response;
    }
    else{
        document.getElementById('title').innerText = '~ ' + request.status + ' ~';
        document.getElementById('advice').innerText = 'shit man something messed up';
    }
};