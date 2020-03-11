const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let button = document.querySelector("button")
button.addEventListener("click", () => {
  fetchData()
})

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => fillUser(json.results[0]))
}


function findAndfill(id, content){
  let tag =document.getElementById(id)
  tag.innerText = content
}

function fillUser(json){
  document.getElementById("profile_picture").src = json.picture.large
  findAndfill("fullname", `${json.name.first} ${json.name.last}`)
  findAndfill("email", json.email)
  findAndfill("street", `${json.location.street.number} ${json.location.street.name}`)
  findAndfill("city", json.location.city)
  findAndfill("state", `${json.location.state}/${json.location.country}`)
  findAndfill("postcode", json.location.postcode)
  findAndfill("phone", json.phone)
  findAndfill("cell", json.cell)
  findAndfill("date_of_birth", json.dob.date)
}