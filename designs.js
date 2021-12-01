var pixelCanvas = $('#pixelCanvas');
/**
* Picks size and clears grid.
*/
$('#sizePicker').submit(function (event) {
    event.preventDefault();

    let width = document.getElementById('inputWidth').value;
    let height = document.getElementById('inputHeight').value;
    pixelCanvas.html('');
    makeGrid(height, width);
    /** 
    * Picks color with click listener.
    */
    function pickColor() {
    $('td').click( event => {
        $(event.currentTarget).css("background-color", document.getElementById('colorPicker').value)
    });
  }
    pickColor();
});
/**
 * Make grid with for loop and append.
 * @param {number} height 
 * @param {number} width 
 */
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        pixelCanvas.append('<tr></tr>');
    };
    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};