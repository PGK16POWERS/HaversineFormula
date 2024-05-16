document.addEventListener("DOMContentLoaded", () => {
    callJsonDataFunc();
});

function callJsonDataFunc() {
    
    fetch("./main.json")
        .then(response => response.json())
        .then(data => {

            // Used to filter what we get from the data received
            //const filteredData = data.filter(content => content.town === "Fourways Mall");

            // Used to filter how many documents are shown on the screen
            const limitedData = data.slice(0, 6);

            // Used to filter through the data received
            limitedData.forEach(content => {
                // The function creates a card for each document found and allocates the specified parameters
                createElements(content.username, content.latitude, content.longitude);
            })

        });
}

// This function creates the cards for each document called
function createElements(username, latitude, longitude) {

    const parentDiv = document.querySelector(".other-point-div");

    // CREATE ELEMENTS
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class","child-point-div");

    const usernameSpan = document.createElement("span");
    usernameSpan.setAttribute("class","ref-point");

    const usernameTitle = document.createElement("span");
    usernameTitle.textContent = "Username: "
    usernameSpan.appendChild(usernameTitle);

    const userName = document.createElement("span");
    userName.setAttribute("id","username");
    userName.textContent = username;
    usernameSpan.appendChild(userName);

    childDiv.appendChild(usernameSpan);

    // START OF PARENT ONE 
    const positionPointLatParent = document.createElement("span");
    positionPointLatParent.setAttribute("class","ref-point");

    const latTitle = document.createElement("span");
    latTitle.textContent = "Latitude: "
    positionPointLatParent.appendChild(latTitle);

    const latInt = document.createElement("span");
    latInt.setAttribute("id","other-lat");
    latInt.textContent = latitude;
    positionPointLatParent.appendChild(latInt);

    childDiv.appendChild(positionPointLatParent);


    // START OF PARENT TWO
    const positionPointLongParent = document.createElement("span");
    positionPointLongParent.setAttribute("class","ref-point");

    const longTitle = document.createElement("span");
    longTitle.textContent = "Longitude: "
    positionPointLongParent.appendChild(longTitle);

    const longInt = document.createElement("span");
    longInt.setAttribute("id","other-long");
    longInt.textContent = longitude;
    positionPointLongParent.appendChild(longInt);

    childDiv.appendChild(positionPointLongParent);


    // START OF PARENT THREE
    const distRef = document.createElement("span");
    distRef.setAttribute("class", "distance");
    distRef.textContent = "Distance: ";
    childDiv.appendChild(distRef);


    parentDiv.appendChild(childDiv);

    return parentDiv;
}