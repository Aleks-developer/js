var $accordionCnt = $('.__event-accordion'),
    $accordionHeader = $('.cnt-accordion_header');

    $accordionCnt.each(function() {

        var $accordionChildCnt = $(this).find('.cnt-accordion_cnt');

        if($(this).find('.cnt-accordion_header').hasClass('active')) {
            $accordionChildCnt.slideDown(300);
        }

    });

    $accordionHeader.on('click', function() {

        var $accordionChildCnt = $(this).parent().find('.cnt-accordion_cnt');

        if($(this).hasClass('active')) {

            $accordionChildCnt.slideUp(300);
            $(this).removeClass('active');

        } else {

            $accordionHeader.removeClass('active').parent().find('.cnt-accordion_cnt').slideUp(300);

            $accordionChildCnt.slideDown(300);
            $(this).addClass('active');

            setTimeout(function() {

                var $thisOffset = $('.cnt-accordion_header.active').offset();

                $('body').animate({

                    scrollTop: $thisOffset.top - 60

                }, 500);

            }, 500);

        }

    });
