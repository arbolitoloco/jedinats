/**
 * Reads students information from JSON file in data folder
 */
function getStudents() {
  let students = fetch("./data/students.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
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
  let map = L.map("map", {
    // center: [33.757356, -107.382888], // EDIT latitude, longitude to re-center map
    zoom: 5, // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    zoomSnap: 1,
    maxZoom: 12,
    scrollWheelZoom: false,
    tap: false
  });

  /* Control panel to display map layers */
  let controlLayers = L.control
    .layers(null, null, {
      position: "topright",
      collapsed: false
    })
    .addTo(map);

  // Gets native land territories
  $.getJSON("https://native-land.ca/api/index.php?maps=territories", function (
    data
  ) {
    nativeLand.addData(data);
  });

  function style(feature) {
    // console.log(feature.properties.color);
    return {
      fillColor: feature.properties.color,
      // weight: 2,
      // opacity: 1,
      color: "none",
      // dashArray: "3",
      fillOpacity: 0.2
    };
  }

  function addLabel(feature, layer) {
    let name = String(feature.properties.Name); // sets the tooltip text
    layer.bindPopup(name, {
      permanent: true,
      opacity: 0.5,
      direction: "center"
    });
  }

  // Add native land territories
  let nativeLand = L.geoJson(null, {
    onEachFeature: addLabel,
    style: style,
    attribution:
      'Polygons: <a href="https://native-land.ca/">Native Land Digital</a>, 2021'
  });

  // Styles native land polygons
  // Set style function that sets fill color property
  // nativeLand.addTo(map);
  controlLayers.addOverlay(nativeLand, "Native Land");
  // L.control.layers(overlays).addTo(map);

  // display Carto basemap tiles with light features and labels
  let imagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  ).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(imagery, "Satellite basemap");

  let light = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
    }
  ); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(light, "Light basemap");

  /* Stamen colored terrain basemap tiles with labels */
  let terrain = L.tileLayer(
    "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }
  ); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(terrain, "Terrain basemap");

  // see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/

  let boundsArr = [];

  // Read markers data from data.csv
  $.get(`../data/${filename}`, function (csvString) {
    // Use PapaParse to convert string to array of objects
    let data = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true
    }).data;
    // Creates a cluster for markers in the same location and adds it to map
    let markersCluster = L.markerClusterGroup({
      spiderfyOnMaxZoom: true,
      removeOutsideVisibleBounds: true,
      zoomToBoundsOnClick: false
    }).addTo(map);
    // For each row in data, create a marker and add it to the map or cluster
    // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    for (let i in data) {
      let row = data[i];
      // console.log(row);
      let popup = L.popup()
        .setContent(
          `<p class="font-semibold"><em>${row.scientificName}</em></p><p>${row.occurrenceRemarks}</p><p><a class="underline text-green-400" href="${row.references}" target="_blank">View occurrence</a>`
        )
        .openOn(map);
      // console.log(
      //   parseFloat(row.decimalLatitude),
      //   parseFloat(row.decimalLongitude),
      //   row.id
      // );
      boundsArr.push(
        L.latLng(
          parseFloat(row.decimalLatitude),
          parseFloat(row.decimalLongitude)
        )
      );
      let marker = L.marker(
        L.latLng(
          parseFloat(row.decimalLatitude),
          parseFloat(row.decimalLongitude)
        ),
        {
          opacity: 1,
          zIndexOffset: 1000
        }
      ).bindPopup(popup);
      // .addTo(markersCluster);
      markersCluster.addLayer(marker);
    }
    // map.addLayer(markersCluster);
    let bounds = new L.LatLngBounds(boundsArr);
    map.fitBounds(bounds, { padding: [200, 200] });
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
      dynamicTyping: true
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
          // console.log(item.scientificNameAuthorship);
          if (item.scientificNameAuthorship == null) {
            scinamesArr.push(
              `<em>${item.scientificName}</em> <a style="color: blue; text-decoration: underline;" href="https://serv.biokic.asu.edu/ecdysis/taxa/index.php?tid=${item.taxonID}">See taxon profile</a>`
            );
          } else {
            scinamesArr.push(
              `<em>${item.scientificName}</em> ${item.scientificNameAuthorship} <a style="color: blue; text-decoration: underline;" href="https://serv.biokic.asu.edu/ecdysis/taxa/index.php?tid=${item.taxonID}">See taxon profile</a>`
            );
          }
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
      dynamicTyping: true
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
      "references"
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
            newCell.textContent = " ";
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
  // console.log(table);
  return table;
}
