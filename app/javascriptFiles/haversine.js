document.addEventListener("DOMContentLoaded", () => {

    const findNearest = document.querySelector("#find-nearest-neighbhor");

    findNearest.addEventListener("click", () => {

        // access the users coordinates
        const currentLat = document.querySelector("#latitude").textContent;
        const currentLong = document.querySelector("#longitude").textContent;

        // Conditional statement chacks if the users location has been accessed before calculating the nearest neighbor
        if (currentLat === "" || currentLong === "") {

            // Shows an alert if the the users location hasn't been accessed.
            alert("First access your location by clicking the 'Find Me' button");
        } else {

        // access the output elements
        const userOutput = document.querySelector("#nearestUser");
        const userLocationOutput = document.querySelector("#nearestDistance");

        let nearestUsername = null;
        let nearestLocation = Infinity;

        const childBlock = document.querySelectorAll(".child-point-div");

        childBlock.forEach(child => {
            const distanceEle = child.querySelector(".distance");
            const username = child.querySelector("#username").textContent;
            const otherLat = child.querySelector("#other-lat").textContent;
            const otherLong = child.querySelector("#other-long").textContent;

            /* 
                The code below uses the Haversine function we created to check the distance between the
                live position of the user and the live position of the other user.

                - This function takes the latitude and longitude of both the users.

                - Calculates the distance between each other.

                - That distance is compared to a variable(nearestLocation) containing a distance, if its 
                less, then the smaller value will be the new value of the variable.
            */
           
            const distancez = calculateDistance(currentLat, currentLong, otherLat, otherLong);
            distanceEle.textContent = "Distance: " + distancez.toFixed(2) + " Km";
            if(distancez < nearestLocation) {
                nearestLocation = distancez;
                nearestUsername = username;
            }
        });

        userOutput.textContent = nearestUsername;
        userLocationOutput.textContent = nearestLocation.toFixed(2) + " Km";
            
        }
    });
})

// Haversine Formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}