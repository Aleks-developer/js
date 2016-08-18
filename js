var $accordionCnt = $('.mod-accordion'),
    $accordionHeader = $('.mod-accordion_header');

    $accordionCnt.each(function() {

        var $accordionChildCnt = $(this).find('.nod-accordion_cnt');

        if($(this).find('.cnt-accordion_header').hasClass('active')) {
            $accordionChildCnt.slideDown(300);
        }

    });

    $accordionHeader.on('click', function() {

        var $accordionChildCnt = $(this).parent().find('.mod-accordion_cnt');

        if($(this).hasClass('__active')) {

            $accordionChildCnt.slideUp(300);
            $(this).removeClass('__active');

        } else {

            $accordionHeader.removeClass('__active').parent().find('.mod-accordion_cnt').slideUp(300);

            $accordionChildCnt.slideDown(300);
            $(this).addClass('__active');

            setTimeout(function() {

                var $thisOffset = $('.mod-accordion_header.__active').offset();

                $('body').animate({

                    scrollTop: $thisOffset.top - 50

                }, 500);

            }, 500);

        }

    });
