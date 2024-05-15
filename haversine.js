// Function to calculate the distance between a single point and multiple other points using the Haversine formula
function calculateDistances(refLat, refLon, otherPoints) {
    const R = 6371; // Radius of the Earth in kilometers

    // Convert reference latitude and longitude from degrees to radians
    const refLatRad = toRadians(refLat);
    const refLonRad = toRadians(refLon);

    // Convert other points' latitude and longitude from degrees to radians
    const otherPointsRad = otherPoints.map(point => ({
        lat: toRadians(point.lat),
        lon: toRadians(point.lon)
    }));

    // Calculate distances
    const distances = otherPointsRad.map(point => {
        const dlat = point.lat - refLatRad;
        const dlon = point.lon - refLonRad;

        const a = Math.sin(dlat / 2) ** 2 + Math.cos(refLatRad) * Math.cos(point.lat) * Math.sin(dlon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance;
    });

    return distances;
}

// Function to convert degrees to radians
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Example usage:
const refLatitude = 37.7749; // Latitude of reference point
const refLongitude = -122.4194; // Longitude of reference point

const otherPoints = [
    { lat: 34.0522, lon: -118.2437 }, // Latitude and longitude of other point 1
    { lat: 40.7128, lon: -74.0060 }, // Latitude and longitude of other point 2
    { lat: 51.5074, lon: -0.1278 } // Latitude and longitude of other point 3
];

const distances = calculateDistances(refLatitude, refLongitude, otherPoints);
console.log("Distances from reference point to other points:", distances.map(distance => distance.toFixed(2) + " kilometers"));

const childPointDiv = document.querySelectorAll(".child-point-div");

childPointDiv.forEach((child, index) => {
    const distRef = child.querySelector(".distRef");
    const distance = distances[index].toFixed(2); // Get the corresponding distance from the distances array
    distRef.textContent = distance + " kilometers"; // Update the text content with the distance
});
