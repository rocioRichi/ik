  document.addEventListener("DOMContentLoaded", ready);
function agregarFila() {
    // Obtener los valores del formulario
    const serie = document.getElementById('serie').value;
    const material = document.getElementById('material').value;
    const ancho = document.getElementById('ancho').value;
    const fondo = document.getElementById('fondo').value;
    const alto = document.getElementById('alto').value;
    const color = document.getElementById('color').value;

    // Crear una nueva fila
    const tabla = document.getElementById('miTabla');
    const nuevaFila = tabla.tBodies[0].insertRow();
    nuevaFila.insertCell(0).textContent = serie;
    nuevaFila.insertCell(1).textContent = material;
    nuevaFila.insertCell(2).textContent = ancho;
    nuevaFila.insertCell(3).textContent = fondo;
    nuevaFila.insertCell(4).textContent = alto;
    nuevaFila.insertCell(5).textContent = color;

    // Limpiar los campos del formulario
    document.getElementById('miFormulario').reset();
}

function sortTable(columnIndex) {
    const table = document.getElementById("miTabla");
    const rows = Array.from(table.rows).slice(1); // Exclude the header row

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        return isNaN(aValue) ? aValue.localeCompare(bValue) : aValue - bValue;
    });

    // Remove existing rows
    rows.forEach(row => table.tBodies[0].appendChild(row));

    // Toggle sorting direction
    const th = table.tHead.rows[0].cells[columnIndex];
    th.isAscending = !th.isAscending;
    th.style.backgroundColor = th.isAscending ? "#066fb7" : "#067fb7";
}

function searchTable(columnIndex) {
    const input = document.getElementsByClassName("search-input")[columnIndex];
    const filter = input.value.toUpperCase();
    const table = document.getElementById("miTabla");
    const rows = table.tBodies[0].rows;

    for (let i = 1; i < rows.length; i++) {
        const cellValue = rows[i].cells[columnIndex].textContent || rows[i].cells[columnIndex].innerText;
        if (cellValue.toUpperCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
