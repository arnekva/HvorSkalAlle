$( document ).ready(function() {
$('#rom').html("Laster inn romnummer...");
//legg til: get timeedit fra localstorage - add options
let timeedit = "https://cloud.timeedit.net/hvl/web/studbergen/ri14X55Yg50041Q0g4QY5404Z565X572561Y540yZ06Q0675Y9X67701Z5cuZ505575Y2Q5X170YY1Zp770l5Q4xu06Q727l9Q5X047YL5W8l97Y1W03vwXEjWX47n66l51Xæq3ZnWQ1w52wa6a7178eWw7bn8tXpwc7WrWaa6K7QwmleXcbWcZrWj26en9rUWxclr7c7j8neEWmnæt71a7Wa83nWwwv1w2UXxnWr6tm7aWWXwX1rLb8bpc3j9X1XWw5Wrw6r705c1W92WcWX6nE5X6wav6WjnX6e6976eKWc9jj)nojtWa5XpXvvaxxcu6wW6v(xVwVXa5(nKcKvcowW75)X6Xj6dZ0wuaXwWr055WWY06k675QoZemQ9trtn16b61W1X5pdw47Q0ZD2043E63AF34CE619E2A055AA8B37EA7F.phtml"
let fagkoder = ["DAT152", "DAT155", "DAT159"]
//Starting get for timeedit
$.get( timeedit, function(response){

$('#testDiv').html(response);
let date = new Date()
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

      }else{
//nothing

      }
    }
    t=8;
  }else{
    console.log("Adding one hour for " + i)
  time = (date.getHours()-9+t) + ":" + "15"
  }
  }


//time = (date.getHours()+i) + ":" + "15"


}
/*
for(let j = 0; j<3;j++){
  let course = document.querySelector('[data-fag="' + fagkoder[j] + '"]')
  console.log(fag)
  $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Rom:" + arrayNode.innerHTML.substr(29,6) + "</p>")
  $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Fag:" + arrayNode.innerHTML.substr(0,6) + "</p>")
  $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Type:" + arrayNode.innerHTML.substr(64,10) + "</p>")
  $('[data-fag="'+ fagkoder[j] +'"]').append("<p>Klokken:" + time + "</p>")
}
*/
/*
  console.log("Adding one hour")

  time = (date.getHours()+i) + ":" + "15"
  timeint += i
  console.log("TID: " + time + ", FAG:" + fagkoder[j] + ", DATO:" + dato)
*/


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
//https://cloud.timeedit.net/hvl/web/studbergen/ri10Yf506550Z9QY2XQ4757XZX076405702546Yy566Y5Q1g05Y10u5c47l5Q76X7Q70ZY7Y2ZQ0p9u0107xXZX4Q71l1502557Y651Qæl617W74WL3ZwX7ve87l5a5W78W6aX8WwE7Ynq5jX9n1W1Ww3p7wcxc6bmncUb9ceWjlXrn7rlrjQZ8e3tW6ra2wwK7XWc172aWWbn7rLW8vXpWmWet8nweXwcxbæ1wrjacWw3nnU6Emr1tacrXanjKw697WeWXW7vXXW55Won6cE65w26jWxX99196w1WX6a0W5v6KcXtnW7c)wv6v(V)aaw61xcXV5WX6X6KYoujxj(anj5w5v5Wop6b4a15p6w7175n9ZwWQQDeWQmdXr6tZ6Ewk00dZr0u1XtW43D06081E6C80F273E7912877DD9FE4.phtml
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
/*
function save(){
  let timeedit = document.getElementById('timeedit-link').value
  localStorage.setItem('timeedit', timeedit)
  location.reload()
}
function gettimeedit(){
  let timeedit = localStorage.getItem('timeedit')
  return timeedit
}
*/
