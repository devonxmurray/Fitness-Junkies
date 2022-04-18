M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {coverTrigger:false});
});


var btn = $('#myybutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
/*
async function Test(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': 'Bearer eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.fZPCOE6mDM-kK3C-UWpR8ZDzIQgI2TIvtV-irrgDokHltMnHLIej_Aajv6k2uBRul2segtBnXah-_ysuJeFG89lCGTtakCVC.iJwIaSH4fauQzzOaba7e9w.ep7D3nZ1C_xppT0MEs4fIpDU5gsPogGVhVtu0JKmoSEYbidS1EyKmLtneFGxH4t_HlIUdTDPHTbfPtTLU1-6wa8t4ajKAwNxytbtg84nWwBZV3lzhXMzH3FMZsT1UB6uZwXdXOuhZJp75znM-CylI9oBiqo8fK6kp34QF5pIrTo.I8FRQ9lr7BSCVMlMwXq5ripcfwP-hV4suZaGxHtU2GU'
    },
    body: {
      
        "id":"2",
        "name":"Joseph",
        "email":"joseph@gmail.com",
        "google_oauth":{
            "id":"12345",
            "name":"Joseph",
            "email":"joseph@gmail.com"
        }
    
    }
  };
  let response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:tEjNk_X_/user`, options);
  let result = await response.json();
  console.log(result);
}
Test();
*/


var healthFrag = "";
var dietFrag = "";

var goal ="";
var gender="";
var timeframe = "";
var diet = "";
var mealTypes = ["Breakfast","Lunch", "Dinner", "Snack"];
var level = 0;
var foodlunch = ["chicken", "wraps", "pasta","fish", "tuna", "salmon","rice"];
var foodbreakfast = ["oats", "protein%20shake","fruits"];

var dishTypesB = ["&dishType=Cereals","&dishType=Egg","&dishType=Pancake"];

var dishTypesL = ["&dishType=Main%20course","&dishType=Salad"];

var dishTypesD = ["&dishType=Salad","&dishType=Soup"];

var dishTypesS = ["&dishType=Desserts","&dishType=Biscuits%20and%20cookies","&dishType=Sandwiches"];

//inclusions
var balanced = false;
var highprotien = false;
var lowcarb = false;
var lowfat = false;
var lowsodium = false;
var highfibre = false;
var vegan = false;
var vegetarian = false;
var keto = false;
var paleo = false;
var pes= false;

//exclusions
var dairy = false;
var gluten = false;
var peanut = false;
var soy = false;
var shellfish = false;
var redmeat = false;
var pork = false;
var eggless = false;

console.log(balanced);
console.log(highfibre);
console.log(highprotien);
console.log(lowcarb);
console.log(lowfat);
console.log(lowsodium);
console.log(vegan);
console.log(vegetarian);
console.log(keto);
console.log(paleo);
console.log(pes);

console.log(dairy);
console.log(gluten);
console.log(peanut);
console.log(soy);
console.log(shellfish);
console.log(redmeat);
console.log(pork);
console.log(eggless);

function Checkme(){
  if(document.getElementById('balancedStat').checked){
    balanced = true;
  }
  else{
    balanced = false;
  }
  console.log(balanced);
 
  if(document.getElementById('fibreStat').checked){
    highfibre = true;
  }
  else{
    highfibre = false;
  }
  console.log(highfibre);
  
  if(document.getElementById('protStat').checked){
    highprotien = true;
    
  }
  else{
    highprotien = false;
  }
  console.log(highprotien);
  
  if(document.getElementById('carbStat').checked){
    lowcarb = true;
    
  }
  else{
    lowcarb  = false;
  }
  console.log(lowcarb);
  
  if(document.getElementById('fatStat').checked){
    lowfat = true;
    
  }
  else{
    lowfat = false;
  }
  console.log(lowfat);
  
  
  if(document.getElementById('saltStat').checked){
    lowsodium = true;
    
  }
  else{
    lowsodium = false;
  }
  console.log(lowsodium);
  if(document.getElementById('veganStat').checked){
    vegan = true;
  }
  else{
    vegan = false;
  }
  console.log(vegan); 

  if(document.getElementById('vegeStat').checked){
    vegetarian = true;
  }
  else{
    vegetarian = false;
  }
  console.log(vegetarian);

  if(document.getElementById('ketoStat').checked){
    keto = true;
  }
  else{
    keto = false;
  }
  console.log(keto);

  if(document.getElementById('paleoStat').checked){
    paleo = true;
  }
  else{
    paleo = false;
  }
  console.log(paleo);

  if(document.getElementById('pesStat').checked){
    pes = true;
  }
  else{
    pes = false;
  }
  console.log(pes);

  if(document.getElementById('glutenStat').checked){
    gluten = true;
  }
  else{
    gluten = false;
  }
  console.log(gluten);

  if(document.getElementById('dairyStat').checked){
    dairy = true;
  }
  else{
    dairy = false;
  }
  console.log(dairy);

  if(document.getElementById('peanutStat').checked){
    peanut = true; 
  }
  else{
    peanut = false;
  }
  console.log(peanut);

  if(document.getElementById('soyStat').checked){
    soy = true;
  }
  else{
    soy = false;
  }
  console.log(soy);

  if(document.getElementById('fishStat').checked){
    shellfish = true;
  }
  else{
    shellfish = false;
  }
  console.log(shellfish);

  if(document.getElementById('meatStat').checked){
    redmeat = true;
  }
  else{
    redmeat = false;
  }
  console.log(redmeat);

  if(document.getElementById('porkStat').checked){
    pork = true;
  }
  else{
    pork = false;
  }
  console.log(pork);
  
  if(document.getElementById('eggStat').checked){
    eggless = true;
  }
  else{
    eggless = false;
  }
  console.log(eggless);
}

function dietURL(){
  dietFrag = "";

  if(balanced === true){
    dietFrag = dietFrag.concat("&diet=balanced");
  }
  if(highprotien === true){
    dietFrag = dietFrag.concat("&diet=high-protein");
  }
  if(lowcarb === true){
    dietFrag = dietFrag.concat("&diet=low-carb");
  }
  if(lowfat === true){
    dietFrag = dietFrag.concat("&diet=low-fat");
  }
  if(lowsodium === true){
    dietFrag = dietFrag.concat("&diet=low-sodium");
  }
}

function healthURL(){
  healthFrag = "";
  if(vegan === true){
    healthFrag = healthFrag.concat("&health=vegan");
  }
  if(vegetarian === true){
    healthFrag = healthFrag.concat("&health=vegetarian");
  }
  if(keto === true){
    healthFrag = healthFrag.concat("&health=keto-friendly");
  }
  if(paleo === true){
    healthFrag = healthFrag.concat("&health=paleo");
  }
  if(pes===true){
    healthFrag = healthFrag.concat("&health=pecatarian");
  }
  if(dairy===true){
    healthFrag = healthFrag.concat("&health=dairy-free");
  }
  if(gluten === true){
    healthFrag = healthFrag.concat("&health=gluten-free");
  }
  if(peanut === true){
    healthFrag = healthFrag.concat("&health=peanut-free");
  }
  if(soy === true){
    healthFrag = healthFrag.concat("&health=soy-free");
  }
  if(shellfish === true){
    healthFrag = healthFrag.concat("&health=shellfish-free");
  }
  if(redmeat === true){
    healthFrag = healthFrag.concat("&health=red-meat-free");
  }
  if(pork === true){
    healthFrag = healthFrag.concat("&health=pork-free");
  }
  if(eggless === true){
    healthFrag = healthFrag.concat("&health=egg-free");
  }
  
}

async function getRecipe(){
  dietURL();
  healthURL();
  let food = document.getElementById("textarea1").value;
  let calories = document.getElementById("textarea2").value;
  if(calories === "")
    calories = 1000;


    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const clientID = "9dccf6f6";
  const app_key = "aac177748420f51c660a6f9eb6d5879d"

  let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}${dietFrag}${healthFrag}&app_id=${clientID}&app_key=${app_key}&calories=${calories}`, requestOptions)
  let result = await response.json(); 
  console.log(result); 
  displayRecipe(result); 
}

  
function displayRecipe(data){
  
  let html = '';
  var error = `<div class = "container">`;
  if(data.count == 0){
    output += `<div class="row">
                  <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
                    <div class="card-panel green darken-3" style="text-align: center;">
                      <span class="white-text">No recipes found. Please include at least one (1) ingredient.<br><br>Don't forget to + your ingredients!</span>
                    </div>
                  </div>
              </div>`;
    document.getElementById('searchResults').innerHTML = error;
    $('body, html').animate({ scrollTop: $("#searchResults").offset().top }, 1000);
    
  }
  else{
    for(i in data.hits){
      var dlabels = ``;
      for(j in data.hits[i].recipe.dietLabels){
        dlabels +=  `${data.hits[i].recipe.dietLabels[j]}`+`<br>`;
      }
      var hlabels = ``;
      for(k in data.hits[i].recipe.healthLabels){
        hlabels += `${data.hits[i].recipe.healthLabels[k]}`+`<br>`;
      }
      html += `<div class="row" >
                  <div class="col s12 m7 col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
                    <div  class="card">
                      <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${data.hits[i].recipe.images.REGULAR.url}">
                      </div>
                      <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4" style="font-family:Times New Roman;">${data.hits[i].recipe.label}<i class="material-icons right">more_vert</i></span>
                      </div> 
                      <div class="card-action">
                        <a id="details" href="${data.hits[i].recipe.url}" target="_blank">Detailed Instructions<i class="material-icons">call_made</i></a>
                      </div>     
                      <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${data.hits[i].recipe.label}<i class="material-icons right">close</i></span>
                        <p>Diet Labels:</p>
                        <p styl>${dlabels}</p>
                        <p>Health Labels:</p>
                        <p>${hlabels}</p>
                      </div>
                    </div>
                  </div>
                </div>`;
      };
    document.getElementById('mealresult').innerHTML= html;
    $('body, html').animate({ scrollTop: $("#mealresult").offset().top }, 1000);

  }
 }

 function GetSelectedGoal(){
  var e = document.getElementById("goal");
  goal = e.options[e.selectedIndex].value;
  console.log(goal);
}
function GetSelectedLevel(){
  var e = document.getElementById("level");
  level = e.options[e.selectedIndex].value;
  console.log(level);
}
function GetSelectedGender(){
  var e = document.getElementById("gender");
  gender = e.options[e.selectedIndex].value;
  console.log(gender);
}
function GetSelectedDiet(){
  var e = document.getElementById("diet");
  diet = e.options[e.selectedIndex].value;
  console.log(diet);
}


async function getMacros(){

  let age = document.getElementById("t2").value;
  let height = document.getElementById("t3").value;
  let weight = document.getElementById("t4").value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': 'e6c22e8e13mshf7acf532fb1d00cp148c62jsn39fb0852a2ae'
    }
  };

  let response = await fetch(`https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${level}&goal=${goal}`, options)
  let result = await response.json();
  console.log(result);
  GetMealPlan(result);
}


async function GetMealPlan(macs){

  var cal = (Math.round(macs.data.calorie));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  let response = await fetch(`https://api.spoonacular.com/mealplanner/generate?&apiKey=9e2aa0c0c1864afeae040f883e224c38&timeFrame=day&targetCalories=${cal}&diet=${diet}`, options)
  let result = await response.json();
  console.log(result);
  displayMacros(result);

  var ids=[];
  for(i in result.meals){
    ids[i] = result.meals[i].id
  }

  var foo =0;
  for(i in ids){
    let response = await fetch(`https://api.spoonacular.com/recipes/${ids[i]}/information?apiKey=9e2aa0c0c1864afeae040f883e224c38&includeNutrition=false`, options)
    let result = await response.json();
    console.log(result.title);
    displayMealPlan(result,foo);
    foo++;
  }
}

function displayMacros(data){
  let html = '';
  html += `<div class="row">
            <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
              <div class="card-panel green lighten" style="text-align: center">
              <span class="white-text">Macros</span><br>
              <span class="white-text"><ul>
                <li>Calories: ${data.nutrients.calories}</li>
                <li>Carbohydrates: ${data.nutrients.carbohydrates}</li>
                <li>Fat: ${data.nutrients.fat}</li>
                <li>Protein: ${data.nutrients.protein}</li>
              </ul>
              </div></span>
            </div>
          </div>`;
    document.getElementById('content0').innerHTML = html;
    $('body, html').animate({ scrollTop: $("#content0").offset().top }, 1000);    
}

function displayMealPlan(MP,foo){
  if(foo===0){
    let html ='';
    html += `
            <div class="col l4 m4 s12">
              <div class="card " >
                <div class="card-image">
                  <img src="${MP.image}">                  
                  <a href= "${MP.sourceUrl}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">open_in_new</i></a>
                </div>
                <div class="card-content">
                  <p>${MP.title}</p>                                    
                <ul>
                  <li>Preparation time: ${MP.readyInMinutes} mins</li>
                  <li>Number of servings: ${MP.servings}</li>
                </ul>
                </div>
              </div>
            </div>
          `;
    document.getElementById('test1').innerHTML = html;
  }
  if(foo===1){
    let html ='';
    html += `
            <div class="col l4 m4 s12">
              <div class="card " >
                <div class="card-image">
                  <img src="${MP.image}">                  
                  <a href= "${MP.sourceUrl}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">open_in_new</i></a>
                </div>
                <div class="card-content">
                  <p>${MP.title}</p>
                  <ul>
                  <li>Preparation time: ${MP.readyInMinutes} mins</li>
                  <li>Number of servings: ${MP.servings}</li>
                </ul>
                </div>
              </div>
            </div>
          `;

    document.getElementById('test2').innerHTML = html;
  }
  if(foo===2){
    let html ='';
    html += `
            <div class="col l4 m4 s12">
              <div class="card " >
                <div class="card-image">
                  <img src="${MP.image}">
                  <a href= "${MP.sourceUrl}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">open_in_new</i></a>                
                </div>
                <div class="card-content">
                  <p>${MP.title}</p>
                  <ul>
                    <li>Preparation time: ${MP.readyInMinutes} mins</li>
                    <li>Number of servings: ${MP.servings}</li>
                  </ul>
                </div>
              </div>
            </div>
          `;

    document.getElementById('test3').innerHTML = html;
  }
}

async function getJoke(){
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  let response = await fetch(`https://api.spoonacular.com/food/jokes/random?&apiKey=9e2aa0c0c1864afeae040f883e224c38`, options)
  let result = await response.json();
  console.log(result);
  writeJoke(result);
}

function writeJoke(data){
  let html = "";
  html+=`<p style="text-align: center;">${data.text}</p>`;
  document.getElementById('joke').innerHTML = html;
}


 




/*
//Exercise List
async function Workouts(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'e6c22e8e13mshf7acf532fb1d00cp148c62jsn39fb0852a2ae'
	}
};

  let response = await fetch('https://exercisedb.p.rapidapi.com/exercises', options)
	let result = await response.json()
  console.log(result);
};
Workouts(); */