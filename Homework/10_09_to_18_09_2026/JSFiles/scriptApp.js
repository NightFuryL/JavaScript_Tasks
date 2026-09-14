const API_KEY = "8f2ffe78";
const BASE_URL = "https://www.omdbapi.com/";

const searchForm = document.getElementById("search-form");
const titleInput = document.getElementById("title-input");
const typeSelect = document.getElementById("type-select");

const filmsSection = document.getElementById("films-section");
const filmsContainer = document.getElementById("films-container");
const paginationContainer = document.getElementById("pagination-container");

const messageBox = document.getElementById("message-box");

const detailsSection = document.getElementById("details-section");
const detailsContainer = document.getElementById("details-container");

let currentSearchTitle = "";
let currentSearchType = "";
let currentPage = 1;

// Обробка події надсилання форми
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    currentSearchTitle = titleInput.value.trim();
    currentSearchType = typeSelect.value;
    currentPage = 1;

    if (!currentSearchTitle) return;

    hideDetails();
    fetchMovies(currentSearchTitle, currentSearchType, currentPage);
});

// Функція запиту списку фільмів
async function fetchMovies(title, type, page = 1) {
    try {
        const url = `${BASE_URL}?s=${encodeURIComponent(title)}&type=${type}&page=${page}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            hideMessage();
            renderMovies(data.Search);
            renderPagination(parseInt(data.totalResults, 10), page);
            filmsSection.classList.remove("hidden");
        } else {
            filmsSection.classList.add("hidden");
            showMessage("Movie not found!");
        }
    } catch (error) {
        console.error("Помилка під час виконання запиту:", error);
        filmsSection.classList.add("hidden");
        showMessage("Помилка при завантаженні даних. Спробуйте пізніше.");
    }
}

// Відображення списку фільмів
function renderMovies(movies) {
    filmsContainer.innerHTML = "";

    movies.forEach(movie => {
        const posterUrl = (movie.Poster && movie.Poster !== "N/A") 
            ? movie.Poster 
            : "https://via.placeholder.com/100x140?text=No+Image";

        const card = document.createElement("div");
        card.className = "film-card";
        card.innerHTML = `
            <img class="film-poster" src="${posterUrl}" alt="${movie.Title}">
            <div class="film-info">
                <div>
                    <div class="film-type">${movie.Type}</div>
                    <div class="film-title">${movie.Title}</div>
                    <div class="film-year">${movie.Year}</div>
                </div>
                <button class="btn-details" data-id="${movie.imdbID}">Details</button>
            </div>
        `;

        const detailsBtn = card.querySelector(".btn-details");
        detailsBtn.addEventListener("click", () => {
            fetchMovieDetails(movie.imdbID);
        });

        filmsContainer.appendChild(card);
    });
}

// Відображення пагінації
function renderPagination(totalResults, activePage) {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(totalResults / 10);

    if (totalPages <= 1) return;

    // Кнопка << це попередня сторінка
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.textContent = "<<";
    prevBtn.disabled = activePage === 1;
    prevBtn.addEventListener("click", () => changePage(activePage - 1));
    paginationContainer.appendChild(prevBtn);

    // Номери сторінок
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-btn ${i === activePage ? "active" : ""}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener("click", () => changePage(i));
        paginationContainer.appendChild(pageBtn);
    }

    // Кнопка >> цек наступна сторінка
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.textContent = ">>";
    nextBtn.disabled = activePage === totalPages;
    nextBtn.addEventListener("click", () => changePage(activePage + 1));
    paginationContainer.appendChild(nextBtn);
}

// Зміна сторінки пагінації
function changePage(newPage) {
    currentPage = newPage;
    fetchMovies(currentSearchTitle, currentSearchType, currentPage);
}

// Функція отримання детальної інформації про фільм
async function fetchMovieDetails(imdbID) {
    try {
        const url = `${BASE_URL}?i=${imdbID}&plot=full&apikey=${API_KEY}`;
        const response = await fetch(url);
        const movie = await response.json();

        if (movie.Response === "True") {
            renderMovieDetails(movie);
            detailsSection.classList.remove("hidden");
            detailsSection.scrollIntoView({ behavior: "smooth" });
        }
    } catch (error) {
        console.error("Помилка під час отримання деталей:", error);
    }
}

// Відображення детальної інформації про фільм
function renderMovieDetails(movie) {
    const posterUrl = (movie.Poster && movie.Poster !== "N/A") 
        ? movie.Poster 
        : "https://via.placeholder.com/220x330?text=No+Image";

    detailsContainer.innerHTML = `
        <img class="details-poster" src="${posterUrl}" alt="${movie.Title}">
        <table class="details-table">
            <tr>
                <td class="label">Title:</td>
                <td>${movie.Title}</td>
            </tr>
            <tr>
                <td class="label">Released:</td>
                <td>${movie.Released}</td>
            </tr>
            <tr>
                <td class="label">Genre:</td>
                <td>${movie.Genre}</td>
            </tr>
            <tr>
                <td class="label">Country:</td>
                <td>${movie.Country}</td>
            </tr>
            <tr>
                <td class="label">Director:</td>
                <td>${movie.Director}</td>
            </tr>
            <tr>
                <td class="label">Writer:</td>
                <td>${movie.Writer}</td>
            </tr>
            <tr>
                <td class="label">Actors:</td>
                <td>${movie.Actors}</td>
            </tr>
            <tr>
                <td class="label">Awards:</td>
                <td>${movie.Awards}</td>
            </tr>
        </table>
    `;
}
function showMessage(text) {
    messageBox.textContent = text;
    messageBox.classList.remove("hidden");
}

function hideMessage() {
    messageBox.classList.add("hidden");
}

function hideDetails() {
    detailsSection.classList.add("hidden");
    detailsContainer.innerHTML = "";
}