import fs from "fs";
import express from "express";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(cors());

// Define route handler for GET requests to "/"
app.get("/", (req, res) => {
	// Read JSON data from the file each time a request is made
	fs.readFile("./data.json", "utf-8", (err, data) => {
		if (err) {
			// If an error occurs while reading the file, send an error response
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}

		// Send the JSON data in the response
		res.json(data);
	});
});

// starts a simple http server locally on port 3300
app.listen(3300, () => {
	console.log("Listening on http://127.0.0.1:3300");
});
