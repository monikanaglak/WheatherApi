let btn_send = document.querySelector("#btn");
btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city").value;
  const valeur_string =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  if(input_city.match(valeur_string) && input_city.value !== ""){
    fetchingData(input_city)
  }
  else{
    console.log("sometnih is wrong")
    document.querySelector(".error").innerHTML = "Your data is not correct"
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
  console.log(data.weather[0].description)
  document.querySelector(".cityy").innerHTML = data.name
}
