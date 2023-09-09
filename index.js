const express = require("express");
const app = express();
const port = 8000;
const date = new Date();
const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
app.get("/api", (req, res) => {
	const { slack_name, track } = req.query;
	res.json({
		slack_name: slack_name,
		current_day: dayNames[date.getDay()],
		utc_time: date,
		track: track,
		github_file_url:
			"https://github.com/Arndy345/Stage-one/blob/main/index.js",
		github_repo_url:
			"https://github.com/Arndy345/Stage-one",
		status_code: 200,
	});
});
app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
