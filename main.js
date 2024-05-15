document.addEventListener("DOMContentLoaded", () => {

    callJsonDataFunc();

});

function callJsonDataFunc() {
    
    fetch("/main.json")
        .then(response => response.json())
        .then(data => {

            // const filteredData = data.filter(content => content.town === "Sandton");

            // const limitedData = filteredData.slice(0, 6);

            data.forEach(content => {
                createElements(content.username, content.latitude, content.longitude)
            })

        });
}

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