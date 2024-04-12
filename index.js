fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=money")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {

        document.getElementById("crypto-top").innerHTML =`
        <img src=${data.image.small}/>
        <span>${data.name}</span>
        `
      document.getElementById("crypto").innerHTML +=`
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>⬆️:$${data.market_data.high_24h.usd}</p>
            <p>⬇️:$${data.market_data.low_24h.usd}</p>
      `  
    })
    .catch(err => console.error(err))
function getCurrentTime() {
const date = new Date()
document.getElementById("time").textContent= date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(function() {}, 1000)