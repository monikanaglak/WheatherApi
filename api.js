const btn_send = document.querySelector("#btn");
btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city_search").value;
  let input = document.querySelector(".city_search");
  const regex =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  if (input_city.match(regex) && input_city.value !== "") {
    fetchingData(input_city);
    input.value = "";
  } else {
    document.querySelector(".error").innerHTML =
      "The name of the city is not correct";
      input.value = "";
  }
});

function fetchingData(input_city) {
  let apiKey = "9a947decfc79f5effa7b7d90a7f7093d";

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input_city +
      "&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp - 273) + "°C";
  document.querySelector(".description").innerHTML = data.weather[0].main;

  let tl = gsap.timeline();
  let tld = gsap.timeline();
  tl.from(".city", { opacity: 0, y: -20,duration:0.5 });
  tl.from(".temperature", { opacity: 0, y: -50,duration:0.5,delay:0.5 });
  tl.from(".description", { opacity: 0, y: -80,duration:0.5,delay:1})
  if(document.querySelector(".description").value === "clouds" || "cloudy"){
    console.log("oh not nice outside")
  }
}
