function magic() {
var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
};

var elementsToShow = document.querySelectorAll('.show-on-scroll')

function loop() {
    elementsToShow.forEach((element) => {
        if(isElementInViewPort(element)){
            element.classList.add('is-visible');
        }

        else {
            element.classList.remove('is-visible');
        }
    })

    scroll(loop)
}

loop();

function isElementInViewPort(el) {
    if(typeof jQuery === 'function' && el instanceof jQuery){
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
        ( rect.top <= 0
        && rect.bottom >= 0
    )

    ||

    (
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
        &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)

    )

    ||

    (
    rect.top >= 0 
    &&
    rect.bottom <= (
        window.innerHeight || document.documentElement.clientHeight))
    )
    
}

}

magic()




function comeRight() {
    var scroll = window.requestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000/60)
    };
    
    var elementsToShow = document.querySelectorAll('.show-on-scroll_2')
    
    function loop() {
        elementsToShow.forEach((element) => {
            if(isElementInViewPort(element)){
                element.classList.add('is-visible_2');
            }
    
            else {
                element.classList.remove('is-visible_2');
            }
        })
    
        scroll(loop)
    }
    
    loop();
    
    function isElementInViewPort(el) {
        if(typeof jQuery === 'function' && el instanceof jQuery){
            el = el[0];
        }
    
        var rect = el.getBoundingClientRect();
        return (
            ( rect.top <= 0
            && rect.bottom >= 0
        )
    
        ||
    
        (
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
            &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    
        )
    
        ||
    
        (
        rect.top >= 0 
        &&
        rect.bottom <= (
            window.innerHeight || document.documentElement.clientHeight))
        )
        
    }
    
    }
    
    comeRight()





    function comeDown() {
        var scroll = window.requestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000/60)
        };
        
        var elementsToShow = document.querySelectorAll('.show-on-scroll_3')
        
        function loop() {
            elementsToShow.forEach((element) => {
                if(isElementInViewPort(element)){
                    element.classList.add('is-visible_3');
                }
        
                else {
                    element.classList.remove('is-visible_3');
                }
            })
        
            scroll(loop)
        }
        
        loop();
        
        function isElementInViewPort(el) {
            if(typeof jQuery === 'function' && el instanceof jQuery){
                el = el[0];
            }
        
            var rect = el.getBoundingClientRect();
            return (
                ( rect.top <= 0
                && rect.bottom >= 0
            )
        
            ||
        
            (
                rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
                &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        
            )
        
            ||
        
            (
            rect.top >= 0 
            &&
            rect.bottom <= (
                window.innerHeight || document.documentElement.clientHeight))
            )
            
        }
        
        }
        
        comeDown()






        function rotate() {
            var scroll = window.requestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000/60)
            };
            
            var elementsToShow = document.querySelectorAll('.show-on-scroll_4')
            
            function loop() {
                elementsToShow.forEach((element) => {
                    if(isElementInViewPort(element)){
                        element.classList.add('is-visible_4');
                    }
            
                    else {
                        element.classList.remove('is-visible_4');
                    }
                })
            
                scroll(loop)
            }
            
            loop();
            
            function isElementInViewPort(el) {
                if(typeof jQuery === 'function' && el instanceof jQuery){
                    el = el[0];
                }
            
                var rect = el.getBoundingClientRect();
                return (
                    ( rect.top <= 0
                    && rect.bottom >= 0
                )
            
                ||
            
                (
                    rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
                    &&
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            
                )
            
                ||
            
                (
                rect.top >= 0 
                &&
                rect.bottom <= (
                    window.innerHeight || document.documentElement.clientHeight))
                )
                
            }
            
            }
            
            rotate()