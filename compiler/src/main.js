$(document).ready(function() {
  const JSON_URL = "https://raw.githubusercontent.com/OpenSourceSourceTrail/opensourcesourcetrail.github.io/main/compiler/sourcetrail_warnings.json";
  $.getJSON(JSON_URL, function(data) {
    const warnings = data.warnings;
    const tbody = document.getElementById("table_id").getElementsByTagName('tbody')[0];
    var commits = [];
    var warnings_GNU = [];
    var warnings_CLang = [];
    for (let i = 0; i < warnings.length; i++) {
      insertNewRow(tbody, i, warnings);
      const item = warnings.at(i);
      commits.push(item.commit);
      warnings_GNU.push(item.GNU);
      warnings_CLang.push(item.CLang);
    }
    insertGraph(commits, warnings_GNU, warnings_CLang);
  });
});

function insertNewRow(tbody, i, warnings) {
  const item = warnings.at(i);
  var row = tbody.insertRow(-1);
  row.insertCell(0).innerHTML = i;
  row.insertCell(1).innerHTML = item.commit;

  var gnu_div = document.createElement('div');
  gnu_div.innerHTML = item.GNU;
  gnu_div.onclick = function(event) { alert("GNU"); };
  row.insertCell(2).appendChild(gnu_div);

  var clang_div = document.createElement('div');
  clang_div.innerHTML = item.CLang;
  clang_div.onclick = function(event) { alert("Clang"); };
  row.insertCell(3).appendChild(clang_div);
}

function insertGraph(commits, warnings_GNU, warnings_CLang){
  const xValues = commits;
  const yValues1 = warnings_GNU;
  const yValues2 = warnings_CLang;

  new Chart("chart_id", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: "GNU",
        data: yValues1,
        borderColor: "blue",
        fill: false
      },{
        label: "CLang",
        data: yValues2,
        borderColor: "red",
        fill: false
      },
    ]},
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Commits ID'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: '# of Warnings'
          }
        }]
      }     
    }
  });
}
