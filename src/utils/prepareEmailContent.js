const prepareEmailContent = function (reqBody) {
    let emailContent = '';

    for (const key in reqBody) {
      if (reqBody.hasOwnProperty(key)) {
        emailContent += `<div style="border-bottom: 2px solid #000; font-size: 20px;">${key}: ${reqBody[key]}</div><br>`;
      }
    }

    return emailContent;
}

module.exports = { prepareEmailContent };