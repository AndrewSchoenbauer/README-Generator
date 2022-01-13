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

  renderLicenseBadge();
  return `# **${data.title}**
  ${licensebadge}
  
  ## **Description**
  ${data.description}

  ## **Table of Contents**
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## **Installtion**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **License**
This project is license under ${data.license}.

## **Contributing** 
${data.contribute}

## **Tests**
${data.test}

## **Questions**
If you have any questions about this project please email me at ${data.email}. 

If you would like to view any of my other projects please visit my [GitHub](https://github.com/${data.username}).


`;
}

module.exports = generateMarkdown;

