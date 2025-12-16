export function MovieModal(movie) {
  const overlay = document.createElement("div");

  overlay.className = `
    fixed inset-0 bg-black/80
    flex items-center justify-center
    z-50
    p-4
  `;

  const trailerQuery = encodeURIComponent(
    `${movie.Title} ${movie.Year} official trailer`
  );

  overlay.innerHTML = `
    <div class="bg-dark w-full max-w-4xl rounded-lg relative flex flex-col md:flex-row max-h-[90vh] overflow-hidden">

      <!-- CLOSE BUTTON -->
      <button
        class="absolute top-4 right-4 text-white text-2xl z-10"
        id="closeModal"
      >
        &times;
      </button>

      <!-- POSTER -->
      <img
        src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}"
        class="w-full md:w-1/4 object-cover md:object-contain max-h-[50vh] md:max-h-full"
      />

      <!-- INFO & TRAILER -->
      <div class="flex-1 p-4 md:p-6 flex flex-col overflow-y-auto max-h-[90vh]">
        <h2 class="text-2xl font-bold">${movie.Title}</h2>

        <p class="text-zinc-400 text-sm mt-1">
          ${movie.Year} • ${movie.Type.toUpperCase()}
        </p>

        <p class="text-sm leading-relaxed mt-2">
          ${movie.Plot}
        </p>

        <button
          id="watchTrailer"
          class="bg-netflix text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition mt-4"
        >
          ▶ Watch the trailer
        </button>

        <div id="trailerContainer" class="hidden mt-4 aspect-video w-full">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://yewtu.be/embed?listType=search&list=${trailerQuery}"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  `;

  // Fermeture modal
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "closeModal" || e.target === overlay) {
      overlay.remove();
    }
  });

  // Affichage trailer
  overlay.querySelector("#watchTrailer").addEventListener("click", () => {
    overlay.querySelector("#trailerContainer").classList.remove("hidden");
  });

  return overlay;
}
