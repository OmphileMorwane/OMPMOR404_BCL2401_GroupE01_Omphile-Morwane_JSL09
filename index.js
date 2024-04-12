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
        <span>${data.name}</span>`
        
    })
    .catch(err => console.error(err))