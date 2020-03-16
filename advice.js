const request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice');
request.responseType = 'json';
request.send();
request.onload = function() {
    if(request.status === 200){
        const response = request.response;
        document.getElementById('advice').innerText = response.slip.advice;
    }
    else{
        document.getElementById('advice').innerText = 'shit man something messed up ' + response.status;
    }
};