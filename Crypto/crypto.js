const searchInput = document.getElementById("search");
  const filterSelect = document.getElementById("filter");
  const rows = document.querySelectorAll(".crypto-row");

  function filterCoins() {
    const search = searchInput.value.toLowerCase();
    const filter = filterSelect.value;
    
    rows.forEach(row => {
      const name = row.dataset.name;
      const matchesSearch = name.includes(search);
      const matchesFilter = filter === "all" || name === filter;
      row.style.display = (matchesSearch && matchesFilter) ? "grid" : "none";
    });
  }

  searchInput.addEventListener("input", filterCoins);
  filterSelect.addEventListener("change", filterCoins);


  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('You need to login first');
    });
  });