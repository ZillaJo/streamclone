import { searchMovies, getMovieDetails } from "./api/omdb.js";
import { MovieCard } from "./components/moviecard.js";
import { MovieModal } from "./components/moviemodal.js";
import { MovieRow } from "./components/movierow.js";

const main = document.querySelector("main");
const searchInput = document.getElementById("searchInput");

/* =========================
   UTILITAIRES UI
========================= */

function SkeletonCard() {
  const div = document.createElement("div");
  div.className = `
    min-w-[160px]
    h-[240px]
    bg-zinc-800
    rounded-lg
    animate-pulse
    flex-shrink-0
  `;
  return div;
}

/* =========================
   MODAL
========================= */

async function openModal(movie) {
  const details = await getMovieDetails(movie.imdbID);
  const modal = MovieModal(details);
  document.body.appendChild(modal);
}

/* =========================
   RENDER ROW
========================= */

async function renderRow(title, query) {
  const { container, row } = MovieRow(title);
  main.appendChild(container);

  // Skeleton loading
  for (let i = 0; i < 6; i++) {
    row.appendChild(SkeletonCard());
  }

  const movies = await searchMovies(query);

  row.innerHTML = "";

  if (movies.length === 0) {
    row.innerHTML =
      "<p class='text-zinc-400'>Aucun résultat</p>";
    return;
  }

  movies.forEach(movie => {
    row.appendChild(MovieCard(movie, openModal));
  });
}

/* =========================
   INITIAL LOAD
========================= */

function loadHome() {
  main.innerHTML = "";

  renderRow("Populaires", "avengers");
  renderRow("Action", "action");
  renderRow("Science-fiction", "space");
}

/* =========================
   SEARCH
========================= */

let searchTimeout = null;

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (query.length < 3) {
      loadHome();
      return;
    }

    main.innerHTML = "";
    renderRow(`Résultats pour "${query}"`, query);
  }, 500);
});

/* =========================
   START APP
========================= */

loadHome();
