async function fillFrontPageNotLoggedIn() {
    let raw = await fetch("https://api.jikan.moe/v4/top/anime")
    let parsed = await raw.json()
    parsed.data.forEach(anime => {
        let container = document.querySelector(".container")
        if(!container) container = document.appendChild(document.createElement("div"))
        // console.log(anime)
        let image = anime.images.jpg.image_url
        let title = anime.title
        let episodeNumber = anime.episodes
        let date = anime.year
        let div = document.createElement("div")
        div.setAttribute("onclick", `openAnimeFromId('${anime.mal_id}')`)
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

async function openAnimeFromId(id) {
    if(!id) return;
    let raw = await fetch("https://api.jikan.moe/v4/anime/" + id)
    let parsed = await raw.json()
    let image = parsed.images.jpg.large_image_url
    let genres = parsed.genres
    let title = parsed.title
    let title_jap = parsed.title_japanese
    let type = parsed.type
    let synopsis = parsed.synopsis
    let episodes = parsed.episodes
    let rating = parsed.rating
    let score = parsed.score
    let popularityRank = parsed.popularity
    let isAiring = parsed.airing
    let date = parsed.year
    let div = document.createElement("div")
}

async function searchAnime(query) {
    if(!query) alert("no query provided")
}

function frontPageInit() {}
//check to see if user has a token in general, no checking specifically
if(!localStorage.atToken) fillFrontPageNotLoggedIn()
else frontPageInit()