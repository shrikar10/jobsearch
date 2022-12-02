const countryList = require("react-select-country-list");
// THIS IS FILTERING BASED ON THE COUNTRY CODES
let cy = [];
const CC = countryList().getValues();
const lis = {
  Software: ["java", "python", "c++"],
  Machine: ["python"],
  Research : ["python","statistcs"],
  Full: ["nodejs", "reactjs"],
  Developer: ["javascript","mysql"],
  Cloud: ["unix","python","aws"],
  Support: ["communications"],
  Architect: ["aws","gcp","cloud"],
  Network: ["os","networking"],
  Backend: ["mongodb","nodejs","mysql"],
  Electrical: ["c++","cad","pscad"],
  Signal: ["matlab","vlsi","c","c++"],
  Design: ["cad"]
};

const filterJSON = (json) => {
  {
    json.forEach((country) => {
      country["country"] = country["Company"]
        .split(" ")
        .filter((value) => CC.includes(value))[0];
      country.country ? null : (country.country = "CA");
      country["tags"] =
        lis[
          `${country["Title"]
            .split(" ")
            .filter((value) => Object.keys(lis).includes(value))}`
        ] ;
    });
    console.log(json); 
  }
};
module.exports =  filterJSON;
