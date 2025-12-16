export function MovieRow(title) {
  const section = document.createElement("section");
  section.className = "mb-10";

  section.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">${title}</h2>
    <div class="flex gap-4 overflow-x-auto scrollbar-hide"></div>
  `;

  return {
    container: section,
    row: section.querySelector("div")
  };
}
