let city = document.getElementById("city");
let btn = document.querySelector("#btn");
let weather = {
  apiKey: "9a947decfc79f5effa7b7d90a7f7093d",
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
  gettingInfos();
});

const gettingInfos = () => {
  console.log("lets fetch the infos");
};
