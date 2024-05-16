document.addEventListener("DOMContentLoaded", () => {

    // Access the 'Find Me' button
    const accessLocationButton = document.querySelector("#access-location");

    // Output elements for the Latitude and Longitude values respectively
    const latitudez = document.querySelector("#latitude");
    const longitudez = document.querySelector("#longitude");

    // Spinner creation and style
    const spinner = document.createElement("div");
    spinner.setAttribute("class","spinner");
    spinner.style.display = "inline-block"

    // Event listener for the button
    accessLocationButton.addEventListener("click", () => {

        // When button is clicked we want the spinner to spin till locations are found
        latitudez.appendChild(spinner);
        longitudez.appendChild(spinner.cloneNode(true));

        // We use navigator to access the users location
        navigator.geolocation.getCurrentPosition((position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            // we append the Latitude and Longitude to the respective fields
            latitudez.textContent = latitude;
            longitudez.textContent = longitude;
            
        });

    });

});