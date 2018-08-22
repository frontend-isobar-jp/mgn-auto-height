/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnAutoHeight = factory();
    }
}(this, function() {

    function mgnAutoHeight(selector, option) {

        this.selector = selector;
        this.target = document.querySelectorAll( this.selector );

        if(this.target[0]) {
            this.targetLength = this.target.length;
            this.Init();
        }

    }

    /**
    **
    ** Init
    **
    **/
    mgnAutoHeight.prototype.Init = function() {

        var this_ = this;

        this.SetTarget();

        window.addEventListener( "resize", function() {
            this_.SetTarget();
        });

    }

    /**
    **
    ** SetTarget
    **
    **/
    mgnAutoHeight.prototype.SetTarget = function() {

        for ( var i = 0; i < this.targetLength; i++ ) {

            const TARGET = this.target[i];
            const TARGET_CHILDREN = TARGET.children;

            const THIS_DATA = TARGET.getAttribute("data-target");
            const THIS_DATA2 = TARGET.getAttribute("data-target2");

            const TARGET_ITEM =  THIS_DATA ? TARGET.querySelectorAll( THIS_DATA ) : TARGET_CHILDREN;
            const TARGET_ITEM2 =  THIS_DATA2 ? TARGET.querySelectorAll( THIS_DATA2 ) : null;

            this.ResetHeight( TARGET_ITEM, TARGET_ITEM2 );
            this.GetHeight( TARGET_ITEM, TARGET_ITEM2 );

        }

    }

    /**
    **
    ** GetHeight
    **
    **/
    mgnAutoHeight.prototype.GetHeight = function( TARGET_ITEM, TARGET_ITEM2 ){

        this.counter = 0;
        this.setNumber = 0;
        this.setHeight = 0;
        this.setHeight2 = 0;

        const THIS_LENGTH = TARGET_ITEM.length;
        const THIS_COUNTER = this.GetCounter( TARGET_ITEM );

        for ( var j = 0; j < THIS_LENGTH; j++ ) {

            this.counter++;

            ////

            var thisHeight = TARGET_ITEM[j].offsetHeight;

            //一番高い要素を選定
            if( this.setHeight < thisHeight ) this.setHeight = thisHeight;

            ////

            if( TARGET_ITEM2 ) {//data-target2があるとき
                var thisHeight2 = TARGET_ITEM2[j].offsetHeight;
                if( this.setHeight2 < thisHeight2 ) this.setHeight2 = thisHeight2;
            }

            ////

            if( this.counter % THIS_COUNTER == 0 ) {

                this.setNumber = THIS_COUNTER;

            } else if ( j == THIS_LENGTH - 1 && this.counter % THIS_COUNTER != 0 ) {

                this.setNumber = this.counter % THIS_COUNTER;

            }

            this.SetHeight( TARGET_ITEM, TARGET_ITEM2, j );

        }

    }


    /**
    **
    ** SetHeight
    **
    **/
    mgnAutoHeight.prototype.SetHeight = function( TARGET_ITEM, TARGET_ITEM2, j ){

        if( this.setNumber != 0 ) {

            for ( var k = 0; k < this.setNumber; k++ ) {

                TARGET_ITEM[j-k].style.height = this.setHeight + "px";

                if( TARGET_ITEM2 ) TARGET_ITEM2[j-k].style.height = this.setHeight2 + "px";

            };

            this.setHeight = 0,
            this.setHeight2 = 0,
            this.setNumber = 0;

        }

    }

    /**
    **
    ** ResetHeight
    **
    **/
    mgnAutoHeight.prototype.ResetHeight = function( TARGET_ITEM, TARGET_ITEM2 ) {

        for (var i = 0; i < TARGET_ITEM.length; i++) {
            TARGET_ITEM[i].style.height = "auto";
        }

        if(TARGET_ITEM2) {
            for (var i = 0; i < TARGET_ITEM2.length; i++) {
                TARGET_ITEM2[i].style.height = "auto";
            }
        }

    }


    /**
    **
    ** GetCounter
    **
    **/
    mgnAutoHeight.prototype.GetCounter = function( target ) { //offset().topが同じ要素をカウントする

    	var counter = 0;
        var compTop = 0;

    	for (var i = 0; i < target.length; i++) {

    		var THIS_TOP = this.GetOffset( target[i] ).top;

    		if( i == 0 ) { compTop = THIS_TOP };

    		if( compTop == THIS_TOP ) {

    			counter++

    		} else {

    			break;

    		}

    	};

    	return counter;

    }


    /**
    **
    ** GetOffset
    **
    **/
    mgnAutoHeight.prototype.GetOffset = function(el) {

        const BOX = el.getBoundingClientRect();

        return {
            top: BOX.top + window.pageYOffset - document.documentElement.clientTop,
            left: BOX.left + window.pageXOffset - document.documentElement.clientLeft
        }

    }

    return mgnAutoHeight;

}));
