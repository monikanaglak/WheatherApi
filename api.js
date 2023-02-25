//animation rotation card

/*const container = document.querySelector(".container");
const card = document.querySelector(".card");



container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 1.5 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 1 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  
});
//mouse leave

container.addEventListener("mouseleave", (e) => {
  card.style.transitions = "all 1s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

});
*/
btn_send.addEventListener("click", (e) => {
  e.preventDefault();
  let input_city = document.querySelector(".city").value;
  let samo = document.querySelector(".city");
  const regex =
    /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
  if (input_city.match(regex) && input_city.value !== "") {
    fetchingData(input_city);
    samo.value = "";
  } else {
    document.querySelector(".error").innerHTML = "Your data is not correct";
  }
});

function fetchingData(input_city) {
  console.log("im here");
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
  document.querySelector(".cityy").innerHTML = data.name;
}
