import './styles.css';

export default class TurboSlider {
    constructor(props) {
        this.customSelector = props?.customSelector ? props.customSelector : '#turbo-slider';
        this.itemWidth = props?.itemWidth ? props.itemWidth : 'auto';
        this.scrollbarMargin = props?.scrollbarMargin ? props.scrollbarMargin : '2rem';
        this.disableScrollbar = props?.disableScrollbar ? true : false;
    }

    init() {
        const slider = document.querySelector(`${this.customSelector}`);
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
                sliderTrack.scrollBy({ left: 200, behavior: 'smooth' });
            });
        }

        this.setProps(sliderTrack);
    }

    setProps(sliderTrack) {
        const sliderItems = sliderTrack.querySelectorAll("li");

        sliderItems.forEach(sliderItem => {
            sliderItem.style.width = this.itemWidth;
        });

        if (this.disableScrollbar) {
            sliderTrack.classList.add("unscroll");
        }
        else {
            sliderTrack.style.paddingBottom = this.scrollbarMargin;
        }
    }
}