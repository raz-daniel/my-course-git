'use strict';

(() => {
    // Wait for the DOM to be ready
    $(document).ready(function () {

        // Attach an event listener to the "Fill List" button
        $('#fillList').on('click', function (event) {
            // Prevent the form from submitting and refreshing the page
            event.preventDefault();

            // Get the values from the input fields
            const firstNumber = parseInt($('#firstNumber').val(), 10);
            const secondNumber = parseInt($('#secondNumber').val(), 10);

            // Validate the input values
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                alert('Please enter valid numbers!');
                return;
            }

            if (firstNumber > secondNumber) {
                alert('First number must be less than or equal to second number.');
                return;
            }

            // Generate the <select> dropdown dynamically
            let selectHTML = '<select>';

            for (let i = firstNumber; i <= secondNumber; i++) {
                selectHTML += `<option>${i}</option>`;
            }

            selectHTML += '</select>';

            // Append the generated dropdown to the #selectList div
            $('#selectList').html(selectHTML);
        });

    });
})();
