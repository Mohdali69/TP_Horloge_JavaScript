(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {
      var daysofweek = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
      var months = ['Janv', 'Fevr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Septe', 'Octo', 'Nove', 'Dece'];
      var music = ['./assets/oh.m4a', './assets/lou.m4a', './assets/berson.m4a']
      var tbody = document.getElementsByTagName("tbody")[0];
      var add = document.getElementById('add');
      var i = 0;

      function clock(){
          // variables de la date
          var today = new Date();
          var h = today.getHours();
          var m = today.getMinutes();
          var s = today.getSeconds();
          var daytoday = today.getDay();
          var date = today.getDate();
          var mon = today.getMonth();
          var y = today.getFullYear();

          daytoday = daytoday-1===0? 6: daytoday-1;
          // Variable du document
          var hours = document.getElementById('hours');
          var min = document.getElementById('min');
          var sec = document.getElementById('sec');
          var days = document.getElementById(''+daysofweek[daytoday]+'');
          var day = document.getElementById('day');
          var month = document.getElementById('month');
          var year = document.getElementById('year');

          // Ajout des zeros avant
          h = h<10? '0'+h: h;
          m = m<10? '0'+m: m;
          s = s<10? '0'+s: s;

          // Change les valeurs du document
          try{
            hours.removeChild(hours.lastChild);
          }catch(error){}
          hours.appendChild(document.createTextNode(h));

          try{
            min.removeChild(min.lastChild);
          }catch(error){}
          min.appendChild(document.createTextNode(m));

          try{
            sec.removeChild(sec.lastChild);
          }catch(error){}
          sec.appendChild(document.createTextNode(s));

          try{
            days.forEach(function(element) {
              element.style.color = 'rgba(255, 255, 255, 0.2)';
            });
          }catch(error){}
          days.style.color = '#fff';

          try{
            day.removeChild(day.lastChild);
          }catch(error){}
          day.appendChild(document.createTextNode(date));

          try{
            month.removeChild(month.lastChild);
          }catch(error){}
          month.appendChild(document.createTextNode(months[mon]));

          try{
            year.removeChild(year.lastChild);
          }catch(error){}
          year.appendChild(document.createTextNode(y));

      }
      var inter = setInterval(clock,400);
      var check = setInterval(checkAlarm,1000);

      function checkAlarm(){
        var alarms = document.getElementsByTagName("tr");
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        for (var i = 1; i < alarms.length; i++) {
          var td = alarms[i];
          var inputs = td.getElementsByTagName("input");
          var select = td.getElementsByTagName("select")[0].selectedIndex;
          var checkbox;
          var heure;
          var minute;

          for (var j = 0; j < inputs.length; j++) {
            var input = inputs[j];
            switch(input.type){
              case "checkbox":
                checkbox = input.checked;
                break;
              case "number":
                if(input.name === "heure"){
                  heure = input.value;
                } else if (input.name === "minute") {
                  minute = input.value;
                }
                break;
            }
          }
          if(checkbox && heure == h && minute == m && s == 0){
            var audio = new Audio(music[select]);
            audio.play();
            //alert("C'est l'heure de l'alarme.")
          }
        }
      }
      function newAlarm(){
        i++;
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        // Creer ligne de tableau
        var tr = document.createElement("tr");
        tr.id = i;

        // Checkbox
        var td_c = document.createElement("td");
        var div_c = document.createElement("div");
        div_c.className = "form-group";
        var div_c_c = document.createElement("div");
        div_c_c.className = "custom-control custom-checkbox";
        var input_c = document.createElement("input");
        input_c.className = "custom-control-input";
        input_c.type = "checkbox";
        input_c.id = "check"+i;
        var label_c = document.createElement("label");
        label_c.className = "custom-control-label";
        label_c.setAttribute("for", "check"+i);
        div_c_c.appendChild(input_c);
        div_c_c.appendChild(label_c);
        div_c.appendChild(div_c_c);
        td_c.appendChild(div_c);

        // Heure
        var td_h = document.createElement("td");
        var div_h = document.createElement("div");
        div_h.className = "form-group";
        var input_h = document.createElement("input");
        input_h.className = "form-control";
        input_h.type = "number";
        input_h.name = "heure";
        input_h.value = h;
        div_h.appendChild(input_h);
        td_h.appendChild(div_h);

        // Minute
        var td_m = document.createElement("td");
        var div_m = document.createElement("div");
        div_m.className = "form-group";
        var input_m = document.createElement("input");
        input_m.className = "form-control";
        input_m.type = "number";
        input_m.name = "minute";
        input_m.value = m;
        div_m.appendChild(input_m);
        td_m.appendChild(div_m);

        // Nom
        var td_n = document.createElement("td");
        var div_n = document.createElement("div");
        div_n.className = "form-group";
        var input_n = document.createElement("input");
        input_n.className = "form-control";
        input_n.type = "text";
        div_n.appendChild(input_n);
        td_n.appendChild(div_n);

        // Son
        var td_s = document.createElement("td");
        var div_s = document.createElement("div");
        div_s.className = "form-group";
        var select_s = document.createElement("select");
        select_s.className = "custom-select";
        var option_s_1 = document.createElement("option");
        option_s_1.value = 1;
        option_s_1.appendChild(document.createTextNode("One"));
        var option_s_2 = document.createElement("option");
        option_s_2.value = 2;
        option_s_2.appendChild(document.createTextNode("Two"));
        var option_s_3 = document.createElement("option");
        option_s_3.value = 3;
        option_s_3.appendChild(document.createTextNode("Three"));
        select_s.appendChild(option_s_1);
        select_s.appendChild(option_s_2);
        select_s.appendChild(option_s_3);
        div_s.appendChild(select_s);
        td_s.appendChild(div_s);

        //Fermer
        var td_f = document.createElement("td");
        var button_f = document.createElement("button");
        button_f.className = "btn btn-outline-danger";
        button_f.appendChild(document.createTextNode("Supprimer"));
        button_f.type = "button";
        td_f.appendChild(button_f);
        button_f.addEventListener('click', function (event) {
          var sup = button_f.parentNode.parentNode;
          sup.parentNode.removeChild(sup);
        }, false);

        // Ajoute les éléments dans la ligne
        tr.appendChild(td_c);
        tr.appendChild(td_h);
        tr.appendChild(td_m);
        tr.appendChild(td_n);
        tr.appendChild(td_s);
        tr.appendChild(td_f);

        tbody.appendChild(tr);

      }

      add.addEventListener('click', function (event) {
          newAlarm();
      }, false);
    });
})(jQuery);
