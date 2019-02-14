var daysofweek = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
var month =['Janv', 'Fevr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Septe', 'Octo', 'Nove', 'Dece'];

function clock(){
    // variables de la date
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var daytoday = today.getDay();
    var date = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();



    // Ajout des zeros avant
    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    // Change les valeurs du document
    document.getElementById('hours').innerText = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById(''+daysofweek[(daytoday-1)]+'').style.color = '#fff';
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year ;

}
var inter = setInterval(clock,400);
