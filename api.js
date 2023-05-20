const btn_send = document.querySelector("#btn");
btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city_search").value;
  let input = document.querySelector(".city_search");
  let error = document.querySelector(".error");
  let error_city = document.querySelector(".error_city");
  
  const regex =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;

  if (input_city.match(regex) && input_city.value !== "") {
    fetching(input_city);
    input.value = "";
    
  } else {
    displayError();
    input.value = "";
    
  }
});


async function fetching(input_city){
  let apiKey = "9a947decfc79f5effa7b7d90a7f7093d";
  let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
  input_city +
  "&appid=" +
  apiKey)

  if(!response.ok){
    displayErrorData()
    return;
  }
  let data = await response.json();
  displayData(data)
}

function displayData(data) {
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
  Math.round(data.main.temp - 273) + "°C";
  document.querySelector(".description").innerHTML = data.weather[0].main;
  
  let tl = gsap.timeline();
  let tld = gsap.timeline();
  tl.from(".city", { opacity: 0, y: -20, duration: 0.5 });
  tl.from(".temperature", { opacity: 0, y: -50, duration: 0.5, delay: 0.5 });
  tl.from(".description", { opacity: 0, y: -80, duration: 0.5, delay: 1 });
  if (document.querySelector(".description").value === "clouds" || "cloudy") {
    console.log("oh not nice outside");
  }
}
/***not a string */
function displayError() {
  let td = gsap.timeline();
  td.to(".error", { opacity: 1, y: 10, duration: 0.5 });
}
function displayErrorData(){
  let td = gsap.timeline();
  td.to(".error_city", { opacity: 1, y: 10, duration: 0.5 });
}

