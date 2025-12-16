export function MovieRow(title) {
  const section = document.createElement("section");
  section.className = "mb-6 md:mb-10";

  section.innerHTML = `
    <h2 class="text-lg md:text-xl font-semibold mb-2 md:mb-4 px-1 md:px-0">${title}</h2>
    <div class="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide px-1 md:px-0"></div>
  `;

  return {
    container: section,
    row: section.querySelector("div")
  };
}
