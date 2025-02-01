

let btn = document.getElementById("btn");
let div = document.querySelector("div");




btn.addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
       .then((res) => res.json())
       .then((data) => {
          let user = data.results[0];
          console.log(data);

          div.innerHTML = `
            <div class="randomBox">
                <img src="${user.picture.large}" alt="User">
                <p>👦🏻 First Name: ${user.name.first}</p>
                <p>👦🏻 Last Name: ${user.name.last}</p>
                <p>📩 : ${user.email}</p>
                <p>🌍 Location: ${user.location.city}</p>
                <p>☎️ Phone: ${user.phone}</p>
            </div>`;
       });
})
