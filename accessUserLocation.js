document.addEventListener("DOMContentLoaded", () => {

    const accessLocation = document.querySelector("#access-location");
    const latitudez = document.querySelector("#latitude");
    const longitudez = document.querySelector("#longitude");

    const spinner = document.createElement("div");
    spinner.setAttribute("class","spinner");
    spinner.style.display = "inline-block"

    accessLocation.addEventListener("click", () => {

        latitudez.appendChild(spinner);
        longitudez.appendChild(spinner.cloneNode(true));

        navigator.geolocation.getCurrentPosition((position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            latitudez.textContent = latitude;
            longitudez.textContent = longitude;

            console.log("Hunnid rounds: " + latitude)
            
        });

    });

});