document.addEventListener('DOMContentLoaded', function() {
  const menuIconOpen = document.querySelector('.menu-open-icon');
  const menuIconClose = document.querySelector('.menu-close-icon');
  const menu = document.querySelector('.menu');

  menuIconOpen.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
  });

  menuIconClose.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIconClose.style.display = 'none';
    menuIconOpen.style.display = 'block';
  });

  // Fetch data and create tables
  fetch('statsZone.json')
    .then(response => response.json())
    .then(data => {
      createTables(data);

      // Create and append the filter select element
      const filterContainer = document.querySelector('.filter-container');
      const filterSelect = createFilterSelect(data);
      filterContainer.appendChild(filterSelect);

      // Set the default value and filter the table
      filterSelect.value = '2023';
      filterTableByYear('2023');
    })
    .catch(error => console.error('Error fetching data:', error));

  // Set the date we're counting down to
  var countDownDate = new Date("Sep 13, 2025 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Gunning for gold";
    }
  }, 1000);

  function createFilterSelect(data) {
    const filterSelect = document.createElement('select');
    filterSelect.classList.add('filter-select');
    filterSelect.innerHTML = `
      <option value="All">All</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    `;

    // Add event listener to handle filtering
    filterSelect.addEventListener('change', function() {
      const selectedYear = this.value;
      filterTableByYear(selectedYear);
    });

    return filterSelect;
  }

  function filterTableByYear(year) {
    const tables = document.querySelectorAll('.stats-zone-table');
    tables.forEach(table => {
      const rows = table.querySelectorAll('tbody tr');
      let hasData = false;

      rows.forEach(row => {
        const dateCell = row.querySelector('td:first-child');
        const rowYear = new Date(dateCell.textContent).getFullYear().toString();

        if (year === 'All' || rowYear === year) {
          row.style.display = 'table-row';
          hasData = true;
        } else {
          row.style.display = 'none';
        }
      });

      table.style.display = hasData ? 'block' : 'none';
    });
  }

  function createTables(data) {
    const eventOrder = ['60 Metres', '100 Metres', '150 Metres', '200 Metres', '300 Metres', '400 Metres', '4x100 Metres Relay'];
    const existingEvents = eventOrder.filter(eventType => data.some(item => item.EventType === eventType));
    const container = document.getElementById('results');

    existingEvents.forEach(eventType => {
      const eventTypeData = data.filter(item => item.EventType === eventType);
      replaceCountryWithFlag(eventTypeData);
      createTable(container, eventType, eventTypeData);
    });
  }

  function replaceCountryWithFlag(data) {
    const flagsFolder = 'flags/';

    data.forEach(item => {
      const countryName = item.Country.toLowerCase().replace(/\s/g, '-');
      const flagImageSrc = `${flagsFolder}${countryName}.png`;
      item.Country = `<img src="${flagImageSrc}" alt="${item.Country}" title="${item.Country}" class="country-flag" />`;
    });
  }

  function createTable(container, eventType, data) {
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('stats-zone-table');

    const table = document.createElement('table');
    table.innerHTML = `
      <caption>${eventType}</caption>
      <colgroup>
        <col style="width: 10%;">
        <col style="width: 25%;">
        <col style="width: 7%;">
        <col style="width: 10%;">
        <col style="width: 7%;">
        <col style="width: 7%;">
        <col style="width: 7%;">
        <col style="width: 7%;">
        <col style="width: 10%;">
        <col style="width: 10%;">
      </colgroup>
      <thead>
        <tr>
          <th>Date</th>
          <th>Competition</th>
          <th>Cnt.</th>
          <th>Result</th>
          <th>Wind</th>
          <th>Cat</th>
          <th>Race</th>
          <th>Pl.</th>
          <th>Score</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => createTableRow(item)).join('')}
      </tbody>
    `;

    tableContainer.appendChild(table);
    container.appendChild(tableContainer);
  }

  function createTableRow(item) {
    const dateObject = new Date(item.raceDate);
    const monthAbbreviation = dateObject.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
    const formattedDate = `${dateObject.getDate()} ${monthAbbreviation} ${dateObject.getFullYear()}`;

    return `
      <tr>
        <td>${formattedDate}</td>
        <td>${item.Competition}</td>
        <td>${item.Country}</td>
        <td>${item.raceResult}</td>
        <td>${item.Wind}</td>
        <td>${item.Category}</td>
        <td>${item.raceRound}</td>
        <td>${item.racePlace}</td>
        <td>${item.Score}</td>
        <td>${item.Remarks}</td>
      </tr>
    `;
  }
});
