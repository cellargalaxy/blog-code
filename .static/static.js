window.onload = () => {
    try {
        staticWindowOnload()
        baseWindowOnload()
    } catch (e) {
        console.log('exec window onload error:', e)
    }
}

function staticWindowOnload() {
}

let a_idx = 0

function clickBomb() {
    $("body").click(function (e) {
        // var a = new Array('苟', '利', '国', '家', '生', '死', '以', '岂', '因', '福', '祸', '避', '趋', '之');
        var a = new Array('🕯');
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({"top": y - 180, "opacity": 0}, 1500, () => {
            $i.remove();
        });
    });
}

function addScript(url, callback) {
    addNode('script', {src: url}, callback)
}

function addLink(url, callback) {
    addNode('link', {rel: 'stylesheet', type: 'text/css', href: url}, callback)
}

function addNode(nodeName, attribute, callback) {
    let node = document.createElement(nodeName)
    for (const key in attribute) {
        node[key] = attribute[key]
    }
    if (node.readyState) { //IE
        node.onreadystatechange = () => {
            if (node.readyState === 'loaded' || node.readyState === 'complete') {
                node.onreadystatechange = null
                callback()
            }
        }
    } else { //其他浏览器
        node.onload = callback
    }
    document.getElementsByTagName('head')[0].appendChild(node)
}