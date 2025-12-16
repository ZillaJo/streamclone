export function MovieModal(movie) {
  const overlay = document.createElement("div");

  overlay.className = `
    fixed inset-0 bg-black/80
    flex items-center justify-center
    z-50
  `;

  overlay.innerHTML = `
    <div class="bg-dark max-w-3xl w-full mx-4 rounded-lg overflow-hidden relative">
      
      <button
        class="absolute top-4 right-4 text-white text-2xl"
        id="closeModal"
      >
        &times;
      </button>

      <div class="flex flex-col md:flex-row">
        
        <img
          src="${
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }"
          class="w-full md:w-1/3 object-cover"
        />

        <div class="p-6 space-y-4">
          <h2 class="text-2xl font-bold">${movie.Title}</h2>

          <p class="text-zinc-400 text-sm">
            ${movie.Year} • ${movie.Type.toUpperCase()}
          </p>

          <p class="text-sm leading-relaxed">
            ${movie.Plot}
          </p>
        </div>
      </div>
    </div>
  `;

  // Fermeture
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "closeModal" || e.target === overlay) {
      overlay.remove();
    }
  });

  return overlay;
}
