const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
    const sort_data = (hash) => {
      let new_hash = {}
      new_hash["name"] = `${hash["name"]["first"]} ${hash["name"]["last"]}`
      new_hash["email"] = hash["email"]
      new_hash["street"] = `${hash["location"]["street"]["number"]} ${hash["location"]["street"]["name"]}`
      new_hash["city"] = hash["location"]["city"]
      new_hash["state"] = hash["location"]["state"]
      new_hash["postcode"] = hash["location"]["postcode"]
      new_hash["country"] = hash["location"]["country"]
      new_hash["phone"] = hash["phone"]
      new_hash["cell"] = hash["cell"]
      new_hash["dob"] = hash["dob"]["date"]
      return new_hash
    }
    const print_data = (data) => {
      let my_data = sort_data(data)

      let name = document.querySelector("#fullname")
      name.textContent = my_data["name"]

      let email = document.querySelector("#email")
      email.textContent = my_data["email"]

      let street = document.querySelector("#street")
      street.textContent = my_data["street"]

      let city = document.querySelector("#city")
      city.textContent = my_data["city"]

      let state = document.querySelector("#state")
      state.textContent = my_data["state"]

      let postcode = document.querySelector("#postcode")
      postcode.textContent = my_data["postcode"]

      let phone = document.querySelector("#phone")
      phone.textContent = my_data["phone"]

      let cell = document.querySelector("#cell")
      cell.textContent = my_data["cell"]

      let dob = document.querySelector("#date_of_birth")
      dob.textContent = my_data["dob"]
    }

    const add_new_person = () => {
      let button = document.querySelector("#add-button")
      button.addEventListener("click", () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => print_data(data.results["0"]))
      })
    }
    add_new_person()
});

