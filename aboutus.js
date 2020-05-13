$(document).ready(() => {

    let hasBeenFocused = false;
    $('.feedback-card').hover(function () {
        $(this).find('.card-title').attr('contenteditable', 'true');
        $(this).find('.card-body').css('overflow-y', 'auto');
        $(this).find('.card-body').css('font-size', '.6rem');
        $(this).find('.card-item-paragraph').attr('contenteditable', 'true');
        $(this).find('.card-item-paragraph').css({
            "border-bottom": "solid",
            'border-width': '1px',
            'border-color': 'grey'
        })

        $(this).css('z-index', '30');
        // $(this).css('position', 'fixed')
        $(this).css('transform', 'scale(1.8)');

        //un-hover
    }, function () {

        $(this).css('transform', 'scale(1)');
        $(this).find('.card-body').scrollTop(0);
        $(this).find('.card-body').css('overflow-y', 'hidden');
        $(this).find('.card-title').attr('contenteditable', 'false');
        $(this).find('.card-body').css('font-size', '.8rem');
        $(this).find('.card-item-paragraph').attr('contenteditable', 'false');
        $(this).find('.card-item-paragraph').css({
            "border-bottom": "none"
        });

        if (hasBeenFocused) {
            $('.feedback-section').html('');
            $('.feedback-section').append(`
            <h1>All Done!</h1>
            <h4 style="padding-top: 5rem; color: antiquewhite; font-family:  'Ubuntu', sans-serif;">Thank you for you feedback! we really appreciate it</h4>`);
        }
    });

    $('.card-item-paragraph').focus(function () {
        hasBeenFocused = true;
        $(this).css({
            'border-color': '#ff2e63'
        })
        $(this).scrollTop();

    });
    $('.card-item-paragraph').focusout(function () {

        $(this).css({
            'border-color': 'grey'
        })
    });

    $('.card-title').focus(function () {
        hasBeenFocused = true;
        $(this).css({
            'border-color': '#ff2e63'
        })
        $(this).scrollTop();

    });
    $('.card-title').focusout(function () {

        $(this).css({
            'border-color': 'grey'
        })
    });
})