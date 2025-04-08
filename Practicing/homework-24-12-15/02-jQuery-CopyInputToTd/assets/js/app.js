'use strict';
(()=>{

   // Wait for the DOM to be ready
   $(document).ready(function () {

    // Event listener for all Copy buttons
    $('button').on('click', function () {
        // Get the current row where the button is clicked
        const currentRow = $(this).closest('tr');

        // Get the value from the input field
        const name = currentRow.find('input').val();

        // Move the value to the last cell in the same row
        currentRow.find('td:last').text(name);

        // Remove the input field and button
        currentRow.find('input').remove();
    });

});




})()