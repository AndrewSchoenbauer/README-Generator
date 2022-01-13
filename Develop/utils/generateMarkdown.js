// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licensebadge = "";
  function renderLicenseBadge(license) {
    let licenseEl = data.license;
    if (licenseEl === "MIT") {
   licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (licenseEl === "BSD") {
       {
        licensebadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      }
    } else {
      licensebadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
  
  }

  let licenseLink = ''
  function renderLicenseLink(license) {
    let licenseEl = data.license;
    if (licenseEl === 'MIT') {
      licenseLink = "[MIT](https://choosealicense.com/licenses/mit/)"
    } else if (licenseEl === 'BSD') {
      licenseLink = "[BSD](https://choosealicense.com/licenses/bsd-2-clause/)"
    } else {
     licenseLink = "[GPL](https://choosealicense.com/licenses/gpl-3.0/)"
    }
  }
  renderLicenseLink();
  renderLicenseBadge();
  return `# ${data.title}
  ${licensebadge}
  
  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installtion
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
This project is license under ${licenseLink}.

## Contributing 
${data.contribute}

## Tests
${data.test}

## Questions
If you have anyquestions about this project please email me at ${data.email}. If you would like to view any of my other projects please visit my [GitHub](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;

