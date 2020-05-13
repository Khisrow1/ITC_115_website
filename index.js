// Event handlers
$('.section').hover(function (event) {
    
    $('.section').css({
        'transform': 'scale(0.8)'
    })
    $(this).css({
        'transform': 'scale(1.5)'
    })
    
    }, function (event) {

        $('.section').css({
            'transform': 'scale(1)'
        })
    }
);


// Start scipts
$(document).ready(() => {

    setPositions();

    gameCounter = 0;
    btnHidden = true
    $('.aboutus-hover').hover(function () {

        $('.aboutus-btn').css({
            'top': '2rem'
        });
        btnHidden = false; 
        setTimeout(()=> {

            $('.aboutus-btn').css({
                'top': '-3rem'
            });
            btnHidden = true;
        },3000)
            
        }, function () {

        });

        $('.game-on').click(()=> {
            gameCounter++;

            if (gameCounter==3) {
                gameCounter=0;
                window.location.replace('hidden_game.html');
            }
        })
});

$(window).resize(() => {

    setPositions();
});



// helper functions
function setPositions() {

    $('#bac-resistance').css({
        'top': '0',
        "left": '1rem'
    })

    $('#deforestation').css({
        'top': '14rem',
        "left": (($('.sections').width()-250) / 4 - $('#deforestation').width() / 2).toString() + "px"
    })

    $('#global-warming').css({
        'bottom': '2rem',
        "left": (($('.sections').outerWidth() / 2) - ($('#global-warming').outerWidth(true)) / 2).toString() + "px"
    })

    $('#over-hunting').css({
        'top': '14rem',
        "right": (($('.sections').width()-250) / 4 - $('#deforestation').width() / 2).toString() + "px"
    })

    $('#mass-extinction').css({
        'top': '0',
        "right": "1rem"
    })
}


