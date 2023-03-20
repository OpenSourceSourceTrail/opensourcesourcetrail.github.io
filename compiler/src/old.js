const drawChart = function(data) {
};

const fillTable = function(data) {
  var final_output = "";
  var index = 0;
  data.forEach((item) => {
    console.log(item["commit"]);
    const row = `<tr>
      <td>${index}</td>
      <td>${item["commit"]}</td>
      <td>${item["GNU"]}</td>
      <td>${item["CLang"]}</td>
      <td>${item["MVC"]}</td>
      <td>${item["Tidy"]}</td>
      <td>${item["Cppcheck"]}</td>
      <td>${item["PVS"]}</td>
    </tr>`;
    final_output += row;
    index += 1;
  });
  $('#table_id tr:last').after(final_output);
};

$(document).ready(function() {
  // mocked data
  const json_data = [
    {"commit": "abc0", "GNU": "1", "CLang": "", "MVC": "", "Tidy": "", "Cppcheck": "", "PVS": ""},
    {"commit": "abc1", "GNU": "2", "CLang": "", "MVC": "", "Tidy": "", "Cppcheck": "", "PVS": ""},
    {"commit": "abc2", "GNU": "3", "CLang": "", "MVC": "", "Tidy": "", "Cppcheck": "", "PVS": ""},
    {"commit": "abc3", "GNU": "4", "CLang": "", "MVC": "", "Tidy": "", "Cppcheck": "", "PVS": ""},
    {"commit": "abc4", "GNU": "5", "CLang": "", "MVC": "", "Tidy": "", "Cppcheck": "", "PVS": ""},
  ];

  // Load json data
  const promise_json = new Promise((resolve, reject) => {
      resolve(json_data);
  }).then((value) => {
      fillTable(value);
  }).then((value) => {
      drawChart(value);
  }).catch(error => {
    // ...
  });
  // $.getJSON("ajax/test.json", function( data ) {});
});
