import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/lib", express.static(path.dirname(require.resolve("phaser/dist/phaser.js"))));

app.listen(8080, () => console.log("Listening on port 8080."));
