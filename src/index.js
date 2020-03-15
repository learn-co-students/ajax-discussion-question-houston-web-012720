   const fullname = document.getElementById("fullname");
   console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

   document.addEventListener("DOMContentLoaded", () => {
       let button = document.querySelector('button')
       button.addEventListener('click', function() {
           fetch('https://randomuser.me/api/')
               .then(res => res.json())
               .then(person => (showlabel(person["results"])))
       })

       function showlabel(arrayofperson) {
           arrayofperson.forEach(function(label) {
               console.log(label)
               createperson(label)
           })

       }

       function createperson(label) {
           let fullName = document.querySelector('[for="fullname"]')
           fullName.innerText = `Name : ${label["name"]["first"]} ${label["name"]["last"]}`
           let email = document.querySelector('[for="email"]')
           email.innerText = `Email : ${label["email"]}`
           let phone = document.querySelector('[for="phone"]')
           phone.innerText = `Phone: ${label["phone"]}`
           let date_of_birth = document.querySelector('[for="date_of_birth"]')
           date_of_birth.innerText = `Date of Birth: ${label["dob"]["date"]}`
           let cell = document.querySelector('[for="cell"]')
           cell.innerText = `Cell: ${label["cell"]}`

       }





   })