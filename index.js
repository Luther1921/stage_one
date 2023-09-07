const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const Port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  try {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // to get the current time
    const currentTime = new Date().toISOString().split(".")[0] + "Z";

    // to get the current day

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = daysOfWeek[new Date().getUTCDay()];

    // Process the parameters and generate the response
    const responseData = {
      slack_name: slack_name,
      current_day: currentDay,
      utc_time: currentTime,
      track: track,
      github_file_url:
        "https://github.com/Luther1921/stage_one/blob/main/index.js",
      github_repo_url: "https://github.com/Luther1921/stage_one",
      status_code: 200,
    };

    // Send the response as JSON
    res.json(responseData);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
