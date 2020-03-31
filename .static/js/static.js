function staticInit() {
    initAplayer()
}

function initAplayer() {
    addNode('body', 'div', {id: 'aplayer'})
    addLink('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css')
    addScript('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js', () => {
        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            audio: [
                {
                    name: '青春ブタ野郎はゆめみる少女の夢を見ない',
                    artist: '青春ブタ野郎はゆめみる少女の夢を見ない',
                    url: 'https://code.cellargalaxy.top/file/blog/code/aplayer/background-audio.mp3',
                    cover: 'https://i.loli.net/2020/02/01/puwRJrKQblDIPc1.jpg'
                }
            ]
        })
    })
}

let a_idx = 0

function clickBomb() {
    $("body").click(function (e) {
        // var a = new Array('苟', '利', '国', '家', '生', '死', '以', '岂', '因', '福', '祸', '避', '趋', '之');
        var a = new Array('🕯');
        var $i = $("<span/>").text(a[a_idx])
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        })
        $("body").append($i);
        $i.animate({"top": y - 180, "opacity": 0}, 1500, () => {
            $i.remove()
        })
    })
}

function addScript(url, callback) {
    addNode('head', 'script', {src: url}, callback)
}

function addLink(url, callback) {
    addNode('head', 'link', {rel: 'stylesheet', type: 'text/css', href: url}, callback)
}

function addNode(fatherNodeName, nodeName, attribute, callback) {
    if (callback == undefined || callback == null) {
        callback = () => {
        }
    }
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
    document.getElementsByTagName(fatherNodeName)[0].appendChild(node)
}