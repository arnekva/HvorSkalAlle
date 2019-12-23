$( document ).ready(function() {

let timeedit = "https://cloud.timeedit.net/hvl/web/studbergen/ri14X55Yg50041Q0g4QY5404Z565X572561Y540yZ06Q0675Y9X67701Z5cuZ505575Y2Q5X170YY1Zp770l5Q4xu06Q727l9Q5X047YL5W8l97Y1W03vwXEjWX47n66l51Xæq3ZnWQ1w52wa6a7178eWw7bn8tXpwc7WrWaa6K7QwmleXcbWcZrWj26en9rUWxclr7c7j8neEWmnæt71a7Wa83nWwwv1w2UXxnWr6tm7aWWXwX1rLb8bpc3j9X1XWw5Wrw6r705c1W92WcWX6nE5X6wav6WjnX6e6976eKWc9jj)nojtWa5XpXvvaxxcu6wW6v(xVwVXa5(nKcKvcowW75)X6Xj6dZ0wuaXwWr055WWY06k675QoZemQ9trtn16b61W1X5pdw47Q0ZD2043E63AF34CE619E2A055AA8B37EA7F.phtml"
let fagkoder = ["DAT152", "DAT155", "DAT159"]
//Starting get for timeedit
$.get( timeedit, function(response){

$('#testDiv').html(response);
let date = new Date()
//TODO: Fix dato og tid
let dato = "10.09.2019"//formatDate(date)
let time = "10:15"//checkTime(date.getHours())
console.log("Ja?")


let dagensNoder = document.querySelectorAll('[title*=" ' + dato + '"]')

//finn DAT152
let dat152 = []
for(let i = 0; i<dagensNoder.length;i++){

  for(let t = 0; t<8;t++){
  console.log(time)

  if(dagensNoder[i].title.includes(time)){
    console.log("found")

    for(let j = 0; j<fagkoder.length;j++){
      if(dagensNoder[i].title.includes(fagkoder[j])){
          $('[data-fag="'+ fagkoder[j] +'"]').append("<p class='pclock'>Klokken: " + time + "</p>")
          if(dagensNoder[i].title.includes("Forelesning")){
            $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Rom: " + dagensNoder[i].innerHTML.substr(29,6) + "</p>")
            $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Type: " + dagensNoder[i].innerHTML.substr(16,11) + "</p>")
          }else if(dagensNoder[i].title.includes("Øving")){
            $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Rom: " + dagensNoder[i].innerHTML.substr(23,6) + "</p>")
            $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Type: " + dagensNoder[i].innerHTML.substr(16,5) + "</p>")

          }
$('[data-fag="'+ fagkoder[j] +'"]').append("<hr>")
      }else{
//nothing

      }
    }
    t=8;
  }else{
    console.log("Adding one hour for " + i)
  time = (date.getHours()-9+t) + ":" + "15"
  //TODO: Fjern -9
  }
  }


}
for(k = 0;k<fagkoder.length;k++){
if(document.querySelector('[title*=" ' + fagkoder[k] + '"]') == null){
  $('[data-fag="'+ fagkoder[k] +'"]').append("<p class='ingenting'>Du har ingen timer i dag!</p>")
}
}

});
});

function checkTime(time){
  var date = new Date()
  if(time < 10){
    console.log("small number")
    time = '0' + time + ":" + "15"
  } else{
    console.log("large number")
    time = date.getHours() + ":" + "15"
  }
  return time
}
function checkTimePrevious(time){
  var date = new Date()
  if(time < 10){
    console.log("small number")
    time = time-1
    time = '0' + time + ":" + "15"
    console.log("checktime" + time)
  } else{
    console.log("large number")
    time = date.getHours()-1 + ":" + "15"
  }
  return time
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('.')
}
