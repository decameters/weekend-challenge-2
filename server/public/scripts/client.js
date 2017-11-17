console.log('client.js is loaded!');
var operator = [ 'add', 'subtract', 'multiply', 'divide' ]

$(document).ready(function () {
    console.log('JQ is loaded!');

    $('.mathButton').on('click', function () {
        // console.log('new quote');
        $.ajax({
            method: "POST",
            url: 'calculate/equation',
            //equation_to_add: 
            // data: { x: $('#digitOneInput').val(), y: $('#digitTwoInput').val() type: 00000000000 },
            //  + $(operator).val()
            success: function (response) {
                console.log('new quote post response', response);
                getEquationResponse();
            }
        })
    })
})

function getEquationResponse() {
    console.log('OKAY in getEquationResponse');
}