async function fillFrontPageNotLoggedIn() {
    let raw = await fetch("https://api.jikan.moe/v4/top/anime")
    let parsed = await raw.json()
    parsed.data.forEach(anime => {
        let container = document.querySelector(".container")
        if(!container) container = document.appendChild(document.createElement("div"))
        console.log(anime)
        let image = anime.images.jpg.image_url
        let title = anime.title
        let episodeNumber = anime.episodes
        let date = anime.year
        let div = document.createElement("div")
        div.classList.add("anime-front-page-item")
        container.classList.add("anime-container-grid")
        if(date == null) date = "N/A"
        if(episodeNumber == null) episodeNumber = "N/A"
        div.innerHTML = `
            <img src="${image}" style="width:131px;height:176px;">
            <div class="anime-item-text">
            <h3>${title}</h3>
            <p class="text-muted">Episodes: ${episodeNumber}</p>
            <p class="text-muted">Release date: ${date}</p>
            </div>
        `
        container.appendChild(div)
    });
}

function frontPageInit() {}
//check to see if user has a token in general, no checking specifically
if(!localStorage.atToken) fillFrontPageNotLoggedIn()
else frontPageInit()