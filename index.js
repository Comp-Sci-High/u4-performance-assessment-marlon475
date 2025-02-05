const express = require('express')
const app = express()

const data = {
  data: [
    {
      name: "Japan",
      capital: "Tokyo",
      continent: "Asia",
      currency: "Japanese Yen (JPY)",
      language: "Japanese",
      popular_attractions: ["Mount Fuji", "Tokyo Tower", "Kyoto Temples"],
      best_time_to_visit: "March to May, September to November",
      imageUrl: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      population: 124500000,
      description: "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south."
    },
    {
      name: "France",
      capital: "Paris",
      continent: "Europe",
      currency: "Euro (EUR)",
      language: "French",
      popular_attractions: ["Eiffel Tower", "Louvre Museum", "Palace of Versailles"],
      best_time_to_visit: "April to June, September to November",
      imageUrl: "https://ceaweb.blob.core.windows.net/images/images/default-source/destination-images/france/france-cea-capa1.jpg",
      population: 68170000,
      description: "France is the largest country in the European Union and the third-largest country in Europe after Russia and Ukraine. It has a population of around 67 million people. France is known for its diverse landscapes, rich cultural heritage, and world-renowned cuisine."
    },
    {
      name: "Australia",
      capital: "Canberra",
      continent: "Oceania",
      currency: "Australian Dollar (AUD)",
      language: "English",
      popular_attractions: ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
      best_time_to_visit: "September to November, March to May",
      imageUrl: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/dupkeyphu41gaskx13ff?_a=BACADKGT",
      population: 26640000,
      description: "With spectacular landscapes and a rich ancient culture, Australia is a land like no other. It is the earth's sixth-largest country in land area and is the only nation to govern an entire continent. Australia in Brief provides an authoritative overview of Australia's history, the land, its people and their way of life."
    },
    {
      name: "Brazil",
      capital: "Brasília",
      continent: "South America",
      currency: "Brazilian Real (BRL)",
      language: "Portuguese",
      popular_attractions: ["Christ the Redeemer", "Iguazu Falls", "Amazon Rainforest"],
      best_time_to_visit: "April to June, September to November",
      imageUrl: "https://i.natgeofe.com/k/33e48abd-f2e7-4430-b7bf-cc9a18c14cc6/brazil-christ-the-redeemer_4x3.jpg",
      population: 216400000,
      description: "Brazil is the largest country in South America and the fifth largest nation in the world. It forms an enormous triangle on the eastern side of the continent with a 4,500-mile (7,400-kilometer) coastline along the Atlantic Ocean. It has borders with every South American country except Chile and Ecuador."
    },
    {
      name: "South Africa",
      capital: "Pretoria (Administrative), Cape Town (Legislative), Bloemfontein (Judicial)",
      continent: "Africa",
      currency: "South African Rand (ZAR)",
      language: "Multiple (11 official languages, including English and Afrikaans)",
      popular_attractions: ["Table Mountain", "Kruger National Park", "Robben Island"],
      best_time_to_visit: "May to September for safaris, November to March for beaches",
      imageUrl: "https://www.travelandleisure.com/thmb/5RLk2O6IAlGSY4Szm8h7PM7F2TQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-cape-town-landscape-WHENSOUTHAFRICA1223-8f5e8c8e74aa4a65b95101a2e79639ec.jpg",
      population: 60410000,
      description: "South Africa has been a democratic republic since holding its first truly open election on April 27, 1994. Natural resources, agriculture, tourism, and manufacturing have made South Africa the largest economy on the continent. But problems with unemployment, poverty, and AIDS present huge challenges for the government."
    },
    {
      name: "Canada",
      capital: "Ottawa",
      continent: "North America",
      currency: "Canadian Dollar (CAD)",
      language: "English, French",
      popular_attractions: ["Niagara Falls", "Banff National Park", "CN Tower"],
      best_time_to_visit: "June to October for sightseeing, December to March for winter sports",
      imageUrl: "https://lp-cms-production.imgix.net/2024-08/GettyRF1124659884.jpg?fit=crop&w=3840&auto=format&q=75",
      population: 40100000,
      description: "Canada features black-blue lakes, numerous rivers, majestic western mountains, rolling central plains, and forested eastern valleys. The Canadian Shield, a hilly region of lakes and swamps, stretches across northern Canada and has some of the oldest rocks on Earth."
    }
  ]
}

app.set("view engine","ejs")

app.use((req, res, next) => {
    console.log(req.method + "" + req.path)
    next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/countries", (req, res) =>{
  res.render("countries.ejs", data)
})

app.get("/country/1", (req, res) =>{
  res.render("country.ejs", data.data[0])
})

app.get("/country/2", (req, res) =>{
  res.render("country.ejs", data.data[1])
})

app.get("/country/3", (req, res) =>{
  res.render("country.ejs", data.data[2])
})

app.get("/country/4", (req, res) =>{
  res.render("country.ejs", data.data[3])
})

app.get("/country/5", (req, res) =>{
  res.render("country.ejs", data.data[4])
})

app.get("/country/6", (req, res) =>{
  res.render("country.ejs", data.data[5])
})

app.listen(3000, () => {
    console.log("Server running")
})