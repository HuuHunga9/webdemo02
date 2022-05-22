const rootElement = document.getElementById('metu')
if (!rootElement) {
    const params = new URLSearchParams(window.location.search)
    let root = document.createElement('div');
    root.id = 'metu';
    document.body.appendChild(root);
    const loadCss = file => {
        if (!file.startsWith('http')) { file = `https://menu.metu.vn/static/css/${file}` }
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        link.async = !0;
        document.head.appendChild(link)
    }
    const loadJs = file => {
            if (!file.startsWith('http')) { file = `https://menu.metu.vn/static/js/${file}` }
            let script = document.createElement('script');
            script.src = file;
            script.async = !0;
            document.head.appendChild(script)
        }
        (['2.5cf3cbfd.chunk.css', 'main.f37137d4.chunk.css']).forEach(f => loadCss(f));
    (['2.fd56d826.chunk.js', 'main.fd498541.chunk.js', 'runtime~main.a8a9905a.js']).forEach(f => loadJs(f))
};


// id='hoverIntent-js'
/*! This file is auto-generated */
! function(I) {
    I.fn.hoverIntent = function(e, t, n) {
        function r(e) { o = e.pageX, v = e.pageY }
        var o, v, i, u, s = { interval: 100, sensitivity: 6, timeout: 0 },
            s = "object" == typeof e ? I.extend(s, e) : I.isFunction(t) ? I.extend(s, { over: e, out: t, selector: n }) : I.extend(s, { over: e, out: e, selector: t }),
            h = function(e, t) {
                if (t.hoverIntent_t = clearTimeout(t.hoverIntent_t), Math.sqrt((i - o) * (i - o) + (u - v) * (u - v)) < s.sensitivity) return I(t).off("mousemove.hoverIntent", r), t.hoverIntent_s = !0, s.over.apply(t, [e]);
                i = o, u = v, t.hoverIntent_t = setTimeout(function() { h(e, t) }, s.interval)
            },
            t = function(e) {
                var n = I.extend({}, e),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === e.type ? (i = n.pageX, u = n.pageY, I(o).on("mousemove.hoverIntent", r), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function() { h(n, o) }, s.interval))) : (I(o).off("mousemove.hoverIntent", r), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    var e, t;
                    e = n, (t = o).hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, s.out.apply(t, [e])
                }, s.timeout)))
            };
        return this.on({ "mouseenter.hoverIntent": t, "mouseleave.hoverIntent": t }, s.selector)
    }
}(jQuery);