
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card[data-keywords]");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(function (card) {
      const keywords = card.dataset.keywords.toLowerCase();
      const text = card.innerText.toLowerCase();

      const matches =
        searchTerm === "" ||
        keywords.includes(searchTerm) ||
        text.includes(searchTerm);

      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    // Toon een duidelijke melding
    if (searchTerm === "") {
      resultCount.textContent =
        "Kies een onderwerp of zoek hierboven.";
    } else if (visibleCount === 0) {
      resultCount.textContent =
        "Geen onderwerp gevonden.";
    } else {
      resultCount.textContent =
        visibleCount + " onderwerp(en) gevonden.";
    }

    // Toon of verberg de melding bij geen resultaten
    if (noResults) {
      noResults.hidden =
        searchTerm === "" || visibleCount > 0;

      if (searchTerm !== "" && visibleCount === 0) {
        noResults.textContent =
          "Geen onderwerp gevonden. Probeer bijvoorbeeld verhuizen, paspoort of bijzondere bijstand.";
      }
    }
  });
}
