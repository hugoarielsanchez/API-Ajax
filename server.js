const btnDatos = document.getElementById("btnDatos");
const imgPicture = document.getElementById("image");
const h1Title = document.getElementById("title");
const h3Date = document.getElementById("date");
const pExplanation = document.getElementById("explanation");
const inputDate = document.getElementById("fecha");

btnDatos.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);

    h1Title.textContent = response.title;
    h3Date.textContent = response.date;
    pExplanation.textContent = response.explanation;
    imgPicture.src = response.url;
  });

  xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+ inputDate.value);
  xhr.send();
});
