console.log('client.js is loaded!');

$(document).ready(function () {
    // console.log('JQ is loaded!');

    $('.mathButton').on('click', function () {
        $.ajax({
            method: "POST",
            url: '/calculate/equation',
            cache: false,
            data: { x: $('#digitOneInput').val(), y: $('#digitTwoInput').val(), type: $(this).val() },
            success: function (response) {
                console.log('equation post', response);
                getEquationResponse();
            }
        })
    })

    $('#clearCalculator').on('click', resetGame);
})


function getEquationResponse() {
    // console.log('OKAY in getEquationResponse');
    $.ajax({
        method: "GET",
        url: '/calculate/result',
        cache: false,
        success: function (response) {
            // console.log('equation result', response.type);
            if (response.type == 'add') {
                $('#equationResult').html( Number(response.x) + Number(response.y) );
            } else if (response.type == 'subtract') {
                $('#equationResult').html( Number(response.x) - Number(response.y) );                
            } else if (response.type == 'multipy') {
                $('#equationResult').html( Number(response.x) * Number(response.y) );
            } else if (response.type == 'divide') {
                $('#equationResult').html( Number(response.x) / Number(response.y) );
            }
        }    
    })
}

function resetGame() {
    console.log('in resetGame');
    
    $('#digitOneInput').val('');
    $('#digitTwoInput').val('');
    $('#equationResult').empty();
    // $.ajax({
    //     method: "DELETE",
    //     url: '/calculate/result',
    //     cache: false,
    //     success: function (response) {
    //         console.log('great');
    //     }
    // })
}