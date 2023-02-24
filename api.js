
let btn_send = document.querySelector("#btn");
btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city").value;
  let samo = document.querySelector(".city");
  const regex =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  if(input_city.match(regex) && input_city.value !== ""){
    fetchingData(input_city)
    samo.value="";
  }
  else{
    document.querySelector(".error").innerHTML = "Your data is not correct"
  }
  
  
});

function fetchingData(input_city) {
  console.log("im here")
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
  console.log(data.weather[0].main)
  document.querySelector(".cityy").innerHTML = data.name
}
