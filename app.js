let city = document.getElementById("city");
let btn = document.querySelector("#btn");
let weather = {
  apiKey: "9a947decfc79f5effa7b7d90a7f7093d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apiKey 
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error)=>console.log(error))
  },
  
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inp = document.querySelector("#city");
  let container = document.querySelector(".box");
  const para = document.createElement("p");
  para.innerText = inp.value;
  container.appendChild(para);
  document.body.appendChild(container);

  inp.value = "";
  
});

/*const gettingInfos = () => {
  console.log("lets fetch the infos");
};*/
