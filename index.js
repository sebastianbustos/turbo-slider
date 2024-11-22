import './styles.css';

let settings = {}

const turboSlider = {
    _init: function (props) {
        settings.customSelector = props?.customSelector ? props.customSelector : 'div[data-js-turboslider]';
        settings.itemWidth = props?.itemWidth ? props.itemWidth : 'auto';
        settings.scrollbarMargin = props?.scrollbarMargin ? props.scrollbarMargin : '2rem';
        settings.disableScrollbar = props?.disableScrollbar ? true : false;

        turboSlider._getAllSliders();
    },
    _getAllSliders: function () {
        const sliders = document.querySelectorAll(settings.customSelector);

        if (sliders.length > 0) {
            sliders.forEach((slider) => {
                turboSlider._addEvents(slider);
            });
        }
    },
    _addEvents: function (slider) {
        const sliderTrack = slider.querySelector("ol");
        const navigateLeft = slider.querySelector('button[data-ts-prev]');
        const navigateRight = slider.querySelector('button[data-ts-next]');

        if (navigateLeft) {
            navigateLeft.addEventListener('click', (e) => {
                sliderTrack.scrollBy({ left: -200, behavior: 'smooth' });
            });
        }
        if (navigateRight) {
            navigateRight.addEventListener('click', (e) => {
                sliderTrack.scrollBy({ left: 250, behavior: 'smooth' });
            });
        }

        turboSlider._setProps(sliderTrack);
    },
    _setProps: function (sliderTrack) {
        const sliderItems = sliderTrack.querySelectorAll("li");

        sliderItems.forEach(sliderItem => {
            sliderItem.style.width = settings.itemWidth;
        });


        if (settings.disableScrollbar) {
            sliderTrack.classList.add("unscroll");
        }
        else {
            sliderTrack.style.paddingBottom = settings.scrollbarMargin;
        }
    }
};

export default turboSlider._init;