document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const propertySelection = document.getElementById('property-selection');
  const searchButton = document.getElementById('search-button');
  
  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    const selectedProperty = propertySelection.value;
    
    // Perform search based on the search term and selected property
    performSearch(searchTerm, selectedProperty);
  });
});

function performSearch(term, property) {
  // Perform your search logic here
  console.log('Search Term:', term);
  console.log('Selected Property:', property);
  // You can update the UI or perform other actions based on the search results
}

