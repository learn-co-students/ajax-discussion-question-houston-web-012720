const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  buttonFn();
});

let buttonFn = () => {
    const button = document.querySelector('button.btn-primary')
    button.addEventListener('click', e => {
      addPerson();
    })
  }

let addPerson = () => {
  fetch('https://randomuser.me/api/')
  .then(r => r.json())
  .then(json => appendToHTML(json['results'][0]));
}

let appendToHTML = (person) => {
  fillPicture(person)
  fillName(person);
  fillEmail(person);
  fillStreet(person);
  fillCity(person);
  fillState(person);
  fillPostcode(person);
  fillPhone(person);
  fillCell(person);
  fillDOB(person);
}

let fillPicture = (p) => {
  const picture = document.getElementById('profile_picture')
  picture.src = p['picture']['large']
}

let fillName = (p) => {
  const name = document.getElementById('fullname');
  const fullname = `${p['name']['title']} ${p['name']['first']} ${p['name']['last']}`
  name.innerText = fullname
}

let fillEmail = (p) => {
  const email = document.getElementById('email');
  email.innerText = p['email']
}

let fillStreet = (p) => {
  const street = document.getElementById('street');
  const st = p['location']['street']
  street.innerText = `${st['number']} ${st['name']}`
}

let fillCity = (p) => {
  const city = document.getElementById('city');
  city.innerText = p['location']['city']
}

let fillState = (p) => {
  const state = document.getElementById('state');
  state.innerText = p['location']['state']
}

let fillPostcode = (p) => {
  const postcode = document.getElementById('postcode');
  postcode.innerText = p['location']['postcode']
}

let fillPhone = (p) => {
  const phone = document.getElementById('phone');
  phone.innerText = p['phone']
}

let fillCell = (p) => {
  const cell = document.getElementById('cell');
  cell.innerText = p['cell']
}

let fillDOB = (p) => {
  const dob = document.getElementById('date_of_birth');
  dob.innerText = Date(p['dob']['date'])
}