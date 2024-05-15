document.addEventListener("DOMContentLoaded", () => {

    const findNearest = document.querySelector("#find-nearest-neighbhor");

    findNearest.addEventListener("click", () => {

        // access the users coordinates
        const currentLat = document.querySelector("#latitude").innerHTML;
        const currentLong = document.querySelector("#longitude").innerHTML;

        // access the output elements
        const userOutput = document.querySelector("#nearestUser");
        const userLocationOutput = document.querySelector("#nearestDistance");

        fetch("main.json")
            .then(response => response.json())
            .then((data) => {

                let nearestUsername = null;
                let nearestLocation = Infinity;
                
                data.forEach(child => {

                    const childBlock = document.querySelectorAll(".child-point-div");

                    childBlock.forEach(child => {
                        const distanceEle = child.querySelector(".distance");
                        const username = child.querySelector("#username").textContent;
                        const otherLat = child.querySelector("#other-lat").textContent;
                        const otherLong = child.querySelector("#other-long").textContent;

                        const distancez = calculateDistance(currentLat, currentLong, otherLat, otherLong);

                        distanceEle.textContent = "Distance: " + distancez.toFixed(2) + " Km";

                        if(distancez < nearestLocation) {
                            nearestLocation = distancez;
                            nearestUsername = username;
                        }

                    });
        
                })

                console.log(`Nearest Location = ` + nearestLocation.toFixed(2) );
                console.log(`Nearest user = ` + nearestUsername );

                userOutput.textContent = nearestUsername;
                userLocationOutput.textContent = nearestLocation.toFixed(2);
            })
    })
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