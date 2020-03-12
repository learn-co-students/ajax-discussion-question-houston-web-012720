const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const btn = document.querySelector("button")

function createUser(json) {
  const labels = Array.from(document.querySelectorAll("h4"))

  const data = json.map( info => {
    Object.values(info).map( key => tag.innerText = key );
  });

  labels.map( tag => {
  });

};

btn.addEventListener("click", () => {
  fetch('https://randomuser.me/api/')
    .then( response => {
      return response.json()
    })
    .then( json => {
      console.log(json['results'])
      createUser(json["results"])
    });
});
