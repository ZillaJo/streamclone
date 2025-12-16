export function MovieCard(movie, onClick) {
  const card = document.createElement("div");

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450";

  card.className = `
    min-w-[160px]
    flex-shrink-0
    cursor-pointer
    transition
    duration-300
    hover:scale-110
  `;

  card.innerHTML = `
    <img src="${poster}" class="rounded-lg" />
    <p class="mt-2 text-sm text-center truncate">
      ${movie.Title}
    </p>
  `;

  card.addEventListener("click", () => onClick(movie));

  return card;
}
