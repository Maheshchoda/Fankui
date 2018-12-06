const keys = require("../../config/keys");
module.exports = survey => {
  return `
    <html>
      <body>
        <div style='text-align: center'>
          <p>Share your feedback:</p>
          <p>${survey.body}</p>
          <div>
            <a href='${keys.redirectDomain.domain}/api/surveys/feedback'>Yes</a>
          </div>
          <div>
            <a href='${keys.redirectDomain.domain}/api/surveys/feedback'>No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};