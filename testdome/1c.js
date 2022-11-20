



document.body.innerHTML = `
<table id = "table">
    <tbody>
        <tr>
            <td>Isla</td>
            <td>Leo</td>
            <td>Samuel</td>
        </tr>
        <tr>
            <td>Mia</td>
            <td>Evie</td>
            <td>Freya</td>
        </tr>
        <tr>
            <td>Olivia</td>
            <td>Ava</td>
            <td>George</td>
        </tr>
    </tbody>
</table>`;


function modifyTableCell(rowIndex, columnIndex, newText) {

    // var change = newText.replace("Leo", "Joe")
    // innerHTML.replace("cake","jump");

    var x = document.getElementById('table').rows[parseInt(rowIndex,3)].cells;
    x[parseInt(columnIndex,3)].innerHTML=newText;
    console.log(x)
    return x
}


console.log(modifyTableCell(0, 1, "Joe"));