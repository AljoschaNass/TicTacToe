let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

function init() {
    render();
}

function render() {
    let tableHtml = "<table>";
    // 3 Zeilen
    for (let i = 0; i < 3; i++) {
        tableHtml += "<tr>";
      // 3 Spalten
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        let cellContent = "";
        // Je nachdem, ob "circle" oder "cross" im Array steht, wird ein "o" bzw. "x" gesetzt
        if (fields[index] === "circle") {
          cellContent = generateCircleSVG();
        } else if (fields[index] === "cross") {
          cellContent = generateCrossSVG();
        }
        tableHtml += `<td onclick="handleClick(this, ${index})">${cellContent}</td>`;
    }
      tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    // Rendern des HTML-Codes in das Div mit der id "content"
    document.getElementById("content").innerHTML = tableHtml;
  }

  function handleClick(cell, index) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'circle' ? generateCircleSVG() : generateCrossSVG();
        cell.onclick = null;
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    }
}
  
  function generateCircleSVG() {
    return `
      <svg width="70px" height="70px">
              <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.2s" fill="freeze" />
              </circle>
            </svg>`;
  }

  function generateCrossSVG() {
    return `
      <svg width="70px" height="70px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="30" x2="70" y2="70" stroke="#FFC000" stroke-width="8" stroke-linecap="round"
              stroke-dasharray="56.57" stroke-dashoffset="56.57">
          <animate attributeName="stroke-dashoffset" from="56.57" to="0" dur="250ms" fill="freeze" />
        </line>
        <line x1="70" y1="30" x2="30" y2="70" stroke="#FFC000" stroke-width="8" stroke-linecap="round"
              stroke-dasharray="56.57" stroke-dashoffset="56.57">
          <animate attributeName="stroke-dashoffset" from="56.57" to="0" dur="250ms" fill="freeze" />
        </line>
      </svg>
    `;
  }
  
  
  
  
  