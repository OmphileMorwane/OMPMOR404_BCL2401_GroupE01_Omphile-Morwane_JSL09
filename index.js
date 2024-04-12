// Background & Author
try {
    // Fetch a random flower image from Unsplash API
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=holiday destinations")
    const data = await res.json()
    // Set background image and author name based on fetched data
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
} catch (err) {
    // Handle errors by setting a default background image and author name
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1490772888775-55fceea286b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4NDE0MDR8&ixlib=rb-4.0.3&q=85)`
    document.getElementById("author").textContent = `By: Marivi Pazos`
}

// Crypocurrency
try {
    // Fetch data about Dogecoin from CoinGecko API
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    if (!res.ok) {
        throw Error("Something went wrong") // Throw an error if response is not OK
    }
    const data = await res.json()       
    // Display cryptocurrency data on the webpage
    document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `
    document.getElementById("crypto").innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>📈: R${data.market_data.high_24h.zar}</p>
        <p>📉: R${data.market_data.low_24h.zar}</p>
    `
} catch (err) {
    console.error(err) // Log errors to the console
}

// Function to get and display current time
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

// Update current time every second
setInterval(getCurrentTime, 1000 )

// Get user's geolocation and fetch weather data from OpenWeatherMap API
navigator.geolocation.getCurrentPosition(async position => {
    try {
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        if (!res.ok) {
            throw Error("Weather data not available") // Throw an error if response is not OK
        }
        const data = await res.json()
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // Display weather information on the webpage
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    } catch (err) {
        console.error(err)
    }
});