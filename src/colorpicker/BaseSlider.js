
import Event from '../util/Event'
import UIElement from './UIElement';

const source = 'base-slider';

export default class BaseSlider extends UIElement {

    constructor (opt) {
        super(opt)

        this.minValue = 0   // min domain value 
        this.maxValue = 1   // max domain value 
        this.source = 'base-slider'
    }

    /* called when mouse is ended move  */
    onDragEnd (e) {}

    /* slider container's min and max position */
    getMinMaxPosition () {
        var min = this.getMinPosition();
        var width = this.getMaxDist()
        var max = min + width;

        return { min, max, width }
    }

    /** get current position on page  */
    getCurrent (value) {
        return min + this.getMaxDist() * value; 
    }

    /** get min position on slider container  */
    getMinPosition () {
        return this.refs.$container.offset().left;
    }    

    getMaxDist () {
        return this.state.get('$container.width');
    }

    /** get dist for position value */
    getDist (current) {
        var {min, max} = this.getMinMaxPosition()

        var dist; 
        if (current < min) {
            dist = 0;
        } else if (current > max) {
            dist = 100;
        } else {
            dist = (current - min) / (max - min) * 100;
        }

        return dist; 
    }

    /** get caculated dist for domain value   */
    getCaculatedDist (e) {
        var current = e ? this.getMousePosition(e) : this.getCurrent(this.getDefaultValue() / this.maxValue);
        var dist = this.getDist(current);
        
        return dist; 
    }

    /** get default value used in slider container */
    getDefaultValue () {
        return 0
    }

    /** set mosue position */
    setMousePosition (x) {
        this.refs.$bar.css({ left : (x) + 'px' });
    }

    /** set mouse position in page */
    getMousePosition (e) {
        return Event.pos(e).pageX;
    }    
 
    refresh () {
        this.setColorUI()
    }

    /** set drag bar position  */
    setColorUI(v) {
    
        v = v || this.getDefaultValue(); 

        if (v <= this.minValue) {
            this.refs.$bar.addClass('first').removeClass('last')
        } else if (v >= this.maxValue) {
            this.refs.$bar.addClass('last').removeClass('first')
        } else {
            this.refs.$bar.removeClass('last').removeClass('first')
        }

        this.setMousePosition(this.getMaxDist() * ( (v || 0) / this.maxValue));
    }    

    /** push change event  */
    changeColor (opt) {
        this.$store.dispatch('/changeColor',Object.assign({
            source: this.source
        }, opt || {}))
    }

    // Event Bindings 
    'mouseup document' (e) {
        this.isDown = false ;
    }

    'mousemove document' (e) {
        if (this.isDown) {
            this.onDragMove(e);
        }
    }

    'mousedown $bar' (e) {
        e.preventDefault();
        this.isDown = true; 
    }
    
    'mousedown $container' (e) {
        this.isDown = true; 
        this.onDragStart(e);
    }


    onDragStart (e) {
        this.refreshColorUI(e);
    }

    onDragMove (e) {
        this.refreshColorUI(e);
    }

    refreshColorUI (e) {
        
    }

    '@changeColor' (sourceType) {
        if (this.source != sourceType) {
            this.refresh()
        }
    }

    '@initColor' () { this.refresh() }    
    
}
