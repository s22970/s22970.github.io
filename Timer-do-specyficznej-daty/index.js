var countDownDate = new Date('2022-11-29T00:00:00').getTime();

var timeCounting = setInterval(function(){

    var now = new Date().getTime();
    var leftTime = countDownDate - now;

    var days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

    document.getElementById('dni').innerHTML = days + 'dni ';
    document.getElementById('godziny').innerHTML = hours + 'godzin ';
    document.getElementById('minuty').innerHTML = minutes + 'minut ';
    document.getElementById('sekundy').innerHTML = seconds + 'sekund ';

    if (leftTime <= 0)
    {
    document.getElementById('dni').innerHTML = '';
    document.getElementById('godziny').innerHTML = '';
    document.getElementById('minuty').innerHTML = '';
    document.getElementById('sekundy').innerHTML = '';
    document.getElementById('koniec').innerHTML = 'NADSZEDŁ CZAS SMOKÓW';
    }

}, 1000);