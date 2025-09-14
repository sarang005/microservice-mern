const express = require("express");
const app = express();

require("./db/config");
require("./routes/index")(app);

app.listen(PORT || 8000, () => {
  console.log(`Server is listening on port ${PORT || 8000}`);
});
