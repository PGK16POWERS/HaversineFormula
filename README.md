# Haversine Usage

## Description
Briefly describe your project here. Mention that the project utilizes the Haversine formula to find the nearest user based on the live user's location and all users' locations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
Provide instructions on how to install and set up the project. Include any dependencies or requirements.

```bash
$ git clone https://github.com/your_username/project_name.git
$ cd project_name
$ npm install # or yarn install


## Usage
const haversine = require('haversine');

// Example usage
const start = {
  latitude: 40.7128,
  longitude: -74.0060
};

const end = {
  latitude: 34.0522,
  longitude: -118.2437
};

const distance = haversine(start, end);
console.log(distance); // Output: 3939.5