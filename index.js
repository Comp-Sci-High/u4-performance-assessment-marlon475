const express = require('express')
const app = express()

const data = [
    {
      name: "Japan",
      capital: "Tokyo",
      continent: "Asia",
      currency: "Japanese Yen (JPY)",
      language: "Japanese",
      popular_attractions: ["Mount Fuji", "Tokyo Tower", "Kyoto Temples"],
      best_time_to_visit: "March to May, September to November"
    },
    {
      name: "France",
      capital: "Paris",
      continent: "Europe",
      currency: "Euro (EUR)",
      language: "French",
      popular_attractions: ["Eiffel Tower", "Louvre Museum", "Palace of Versailles"],
      best_time_to_visit: "April to June, September to November"
    },
    {
      name: "Australia",
      capital: "Canberra",
      continent: "Oceania",
      currency: "Australian Dollar (AUD)",
      language: "English",
      popular_attractions: ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
      best_time_to_visit: "September to November, March to May"
    },
    {
      name: "Brazil",
      capital: "Brasília",
      continent: "South America",
      currency: "Brazilian Real (BRL)",
      language: "Portuguese",
      popular_attractions: ["Christ the Redeemer", "Iguazu Falls", "Amazon Rainforest"],
      best_time_to_visit: "April to June, September to November"
    },
    {
      name: "South Africa",
      capital: "Pretoria (Administrative), Cape Town (Legislative), Bloemfontein (Judicial)",
      continent: "Africa",
      currency: "South African Rand (ZAR)",
      language: "Multiple (11 official languages, including English and Afrikaans)",
      popular_attractions: ["Table Mountain", "Kruger National Park", "Robben Island"],
      best_time_to_visit: "May to September for safaris, November to March for beaches"
    },
    {
      name: "Canada",
      capital: "Ottawa",
      continent: "North America",
      currency: "Canadian Dollar (CAD)",
      language: "English, French",
      popular_attractions: ["Niagara Falls", "Banff National Park", "CN Tower"],
      best_time_to_visit: "June to October for sightseeing, December to March for winter sports"
    }
  ]
  

app.set("view engine","ejs")

app.use((req, res, next) => {
    console.log(req.method + "" + req.path)
    next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3000, () => {
    console.log("Server running")
})