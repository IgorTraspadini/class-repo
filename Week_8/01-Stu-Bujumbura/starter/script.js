// Add your own API key between the ""
const APIKey = "2f52d4fdc5a729796a58922bcf59f241";

// Here we are building the URL we need to query the database
const queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=Bujumbura,Burundi&appid=${APIKey}`;

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(queryURL);

    const newQueryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}`

    fetch(newQueryUrl)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        $(".city").text("Bujumbura,Burundi");
        $(".wind").text(`${data.wind.speed}km/h`);
        $(".humidity").text(`${data.main.humidity}%`);
        $(".temp").text(`${parseInt(data.main.temp - 273.15)}°C`);
      })

    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // Create CODE HERE to dump the temperature content into HTML

  });