const btn_send = document.querySelector("#btn")
  btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city").value;
  let input = document.querySelector(".city");
  const regex =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  if (input_city.match(regex) && input_city.value !== "") {
    fetchingData(input_city);
    input.value = "";
  } else {
    document.querySelector(".error").innerHTML = "The name of the city is not correct";
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
  console.log(data);
  console.log(data.weather[0].main);
  /*let monika = document.querySelector(".cityy").innerHTML;
  monika=data.name;*/

  document.querySelector(".cityy").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp-273)+"°C";

  let tl = gsap.timeline()
  let tld = gsap.timeline()
  /*gsap.fromTo(".cityy",{opacity:0},{opacity:1,duration:1,delay:0.5})*/
  tl.from(".cityy",{opacity:0, y:-20},{duration:1.5,delay:0.5})
  tld.from(".temperature",{opacity:0, y:-50},{duration:1.5,delay:3})
 
}  
