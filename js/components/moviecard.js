export function MovieCard(movie, onClick) {
  const card = document.createElement("div");

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450";

  card.className = `
    min-w-[120px] sm:min-w-[140px] md:min-w-[160px]
    flex-shrink-0
    cursor-pointer
    transition
    duration-300
    hover:scale-105
  `;

  card.innerHTML = `
    <img src="${poster}" class="rounded-lg w-full h-auto" />
    <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-center truncate">
      ${movie.Title}
    </p>
  `;

  card.addEventListener("click", () => onClick(movie));

  return card;
}
