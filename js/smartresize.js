+(function($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;

            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }

                timeout = null;
            };

            if (timeout) {
                clearTimeout(timeout);
            }
            else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

    //
    $(document).ready(function() {
        var links = document.getElementsByTagName('a');
        if (links.length > 0) {
            for (var i = 0, len = links.length; i < len; i++) {
                var a = links[i];
                if (/target=blank/.test(a.getAttribute('href'))) {
                    a.setAttribute('target', '_blank');
                }
            }
        }
    });
})(jQuery, 'smartresize');
