import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies


app.get("/", (req, res) => {
  res.send("Weather API Backend is running!");
});

// POST route for /weather
app.post("/weather", async (req, res) => {
  const { city } = req.body;

  // Handle no user input
  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const apiKey = process.env.WEATHER_API_KEY;
  const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    city
  )}`;

  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    if (response.ok) {
      // Sendind client a response with the fetched data
      res.status(200).json(data);
    } else {
      // Handle errors from WeatherAPI (e.g., wrong input, city not found)
      res
        .status(response.status)
        .json({
          error: data.error
            ? data.error.message
            : "Error fetching weather data",
        });
    }
  } catch (error) {
 
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
