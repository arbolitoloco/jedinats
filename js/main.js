/**
 * Reads students information from JSON file in data folder
 */
function getStudents() {
  let students = fetch("./data/students.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Creates Leaflet specimens map
 * Dependencies: Papaparser and jQuery in head
 * @param {String} filename full name of csv inside data folder
 */
function addMap(filename) {
  // Set up initial map center and zoom level
  var map = L.map("map", {
    // center: [41.57, -72.69], // EDIT latitude, longitude to re-center map
    // zoom: 18, // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: false,
    tap: false,
  });

  /* Control panel to display map layers */
  var controlLayers = L.control
    .layers(null, null, {
      position: "topright",
      collapsed: false,
    })
    .addTo(map);

  // display Carto basemap tiles with light features and labels
  var imagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  ).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(imagery, "Satellite basemap");

  var light = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
    }
  ); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(light, "Light basemap");

  /* Stamen colored terrain basemap tiles with labels */
  var terrain = L.tileLayer(
    "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    }
  ); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(terrain, "Terrain basemap");

  // see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/

  boundsArr = [];

  // Read markers data from data.csv
  $.get(`../data/${filename}`, function (csvString) {
    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
    }).data;

    // For each row in data, create a marker and add it to the map
    // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    for (var i in data) {
      var row = data[i];
      var popup = L.popup()
        .setContent(
          `<p class="font-semibold"><em>${row.scientificName}</em></p><p><a class="underline text-green-400" href="#">View occurrence</a>`
        )
        .openOn(map);
      // console.log(row.decimalLatitude, row.decimalLongitude, row.id);
      boundsArr.push([row.decimalLatitude, row.decimalLongitude]);
      var marker = L.marker([row.decimalLatitude, row.decimalLongitude], {
        opacity: 1,
      }).bindPopup(popup);
      marker.addTo(map);
    }
    var bounds = new L.LatLngBounds(boundsArr);
    map.fitBounds(bounds, { padding: [100, 100] });
  });

  map.attributionControl.setPrefix(
    'Based on <a href="https://github.com/HandsOnDataViz/leaflet-map-csv" target="_blank">Leaflet Map Csv</a>'
  );
}

/**
 * Gets list of taxa in csv
 * Dependencies: Papaparser and jQuery in head
 * @param {String} filename full name of csv inside data folder
 */
function getTaxa(filename) {
  let taxaContainer = document.getElementById("taxa");
  $.get(`../data/${filename}`, function (csvString) {
    // Use PapaParse to convert string to array of objects
    let data = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
    }).data;

    let kingdomsTemp = [];
    // // For each row in data, get kingdom
    // // Output unique names in a list
    data.forEach((row) => {
      kingdomsTemp.push(row.kingdom);
    });
    let kingdoms = onlyUnique(kingdomsTemp).sort();
    // For each unique taxon, add it in "Taxa List" section
    kingdoms.forEach((k) => {
      let ul = document.createElement("ul");
      let gName = document.createElement("h3");
      gName.innerText = k;
      taxaContainer.appendChild(gName);
      taxaContainer.appendChild(ul);
      // for each scientific name, add it to a sciname array inside kingdom
      let scinamesArr = [];
      data.forEach((item) => {
        // console.log(k, item.kingdom);
        if (k == item.kingdom) {
          // push item to scinamesArr
          scinamesArr.push(
            `<em>${item.scientificName}</em> ${item.scientificNameAuthorship}`
          );
        }
      });
      let scinames = onlyUnique(scinamesArr).sort();
      scinames.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
      });
    });
  });
}

/**
 * Helper method to filter array keeping only unique values
 * @param {Array} list of items to be filtered
 * @returns {Array} unique list of items
 */
function onlyUnique(list) {
  let unique = [...new Set(list)];
  return unique;
}

function getSpecimens(filename) {
  let specimensContainer = document.getElementById("specimens");
  $.get(`../data/${filename}`, function (csvString) {
    // Use PapaParse to convert string to array of objects
    let results = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
    });
    let data = results.data;
    let table = document.createElement("table");
    table.className = "w-full text-left rounded-lg border border-b-0 text-xs";
    let headers = results.meta["fields"];

    let useCols = [
      "kingdom",
      "phylum",
      "class",
      "order",
      "family",
      "scientificName",
      "scientificNameAuthorship",
      "recordedBy",
      "eventDate",
      "country",
      "stateProvince",
      "county",
      "municipality",
      "locality",
      "references",
    ];

    headers.forEach((col) => {
      let newRow = table.insertRow();
      newRow.className = "font-semibold";
      if (useCols.indexOf(col) > -1) {
        let newCol = table.rows[0].insertCell();
        newCol.textContent = col;
      }
    });

    data.forEach((row) => {
      let newRow = table.insertRow();
      newRow.className = "whitespace-no-wrap border";
      newRow.style =
        "height: 30px !important; padding: 0 !important; overflow: hidden";
      Object.keys(row).forEach((key, i) => {
        // limit to content in useCols
        if (useCols.indexOf(key) > -1) {
          let newCell = table.rows[table.rows.length - 1].insertCell();
          if (row[key] == null) {
            newCell.textContent = "NULL";
          } else {
            switch (key) {
              case "references":
                newCell.innerHTML = `<a class="text-green-400 underline" href="${row[key]}">Full Details</a>`;
                break;
              case "scientificName":
                newCell.innerHTML = `<em>${row[key]}</em>`;
                break;
              default:
                newCell.textContent = row[key];
            }
          }
        }
      });
    });

    specimensContainer.append(table);
  });
}

function arrayToTable(tableData) {
  var table = $("<table></table>");
  $(tableData).each(function (i, rowData) {
    var row = $("<tr></tr>");
    $(rowData).each(function (j, cellData) {
      row.append($("<td>" + cellData + "</td>"));
    });
    table.append(row);
  });
  console.log(table);
  return table;
}
