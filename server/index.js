const app = require("./app");

const PORT = process.env.PORT || 3000;

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});