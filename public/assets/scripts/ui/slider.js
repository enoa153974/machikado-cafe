export function initSlider() {
    $(document).ready(function () {
        const $target = $('.autoplay');

        $target.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            autoplay:true,
            autoplaySpeed: 3000, 
            speed:1300,
            pauseOnDotsHover: true,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false
                    }
                }
            ]
        });

        setTimeout(() => {
            console.log('追加後のクラス：', $target.attr('class'));
        }, 100);
    });
}
