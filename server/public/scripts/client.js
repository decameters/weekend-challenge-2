console.log('client.js is loaded!');

$(document).ready(function () {
    // console.log('JQ is loaded!');

    $('.mathButton').on('click', function () {
        var x = $('#digitOneInput').val();
        var y = $('#digitTwoInput').val();
        var type = $(this).val();

        calculation(x, y, type);

        // $.ajax({
        //     method: "POST",
        //     url: '/',
        //     cache: false,
        //     data: { x: $('#digitOneInput').val(), y: $('#digitTwoInput').val(), type: $(this).val() },
        //     success: function (response) {
        //         console.log('equation post', response);
        //         getEquationResponse();
        //     }
        // })
    })

    $('#clearCalculator').on('click', function () {
        $('#digitOneInput').val('');
        $('#digitTwoInput').val('');
        $('#equationResult').empty();
    });
})

function calculation(x, y, type) {
    var mathQuery = {
        firstNumber: x,
        secondNumber: y,
        operator: type
    }

    $.ajax({
        method: "POST",
        url: '/calculate',
        data: mathQuery,
        success: function (response) {
            // console.log('equation post', response);
            getEquationResponse();
        }
    })
}

/* ALLY LIVE SOLVE
get the values off of inputs and the button
    var operater = $(this).data('oper');
    "this" refers to the BUTTON CLICK here*/

/* function calculation (x, y, oper){
    var mathQuery = {
        firstNum: x,
        secondNumb: y,
        operator: oper
    }
    // ajax POST REQUEST
} */

/* set up a var for the object, and then in data, just referenced that var! */


function getEquationResponse() {
    // console.log('OKAY in getEquationResponse');
    $.ajax({
        method: "GET",
        url: '/calculate',
        success: function (response) {
            console.log('in getEquationResponse', response);
            $('#equationResult').html(response.result);
            $('#history').html('');
            for (var i = 0; i < response.history.length; i++) {
                $('#history').append('<p>' + response.history[i].first + 
                ' ' + response.history[i].oper + ' ' +
                response.history[i].second + ' = ' +
                response.history[i].result + '</p>')
                
            }
        }    

        /* switch statement rather than if / else statement
        if you have the break, it stops it. kind of like a LOOP oh wow
        
        also this should probably be in your route for your router.post, not your get ajax
        
        also this is probably why there needed to be a SECOND post */

    })
}