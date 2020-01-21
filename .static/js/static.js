window.onload = () => {
  staticWindowOnload()
  try {
    if (bashWindowOnload && typeof (bashWindowOnload) == "function") {
      bashWindowOnload()
    }
  } catch (e) {
    console.log('bashWindowOnload function does not exist')
  }
}

function staticWindowOnload() {
  addJq(() => {
    addBackstretch()
    addZoom()
    addMermaid()
  })
  addMathjax()
}


function addMermaid() {
  addScript('https://cdn.bootcss.com/mermaid/8.3.1/mermaid.min.js', () => {
    $(".language-chart").each((i, node) => {
      mermaid.mermaidAPI.render('language-chart-' + i, $(node).text(), (html, bindFunctions) => {
        $(node).removeClass('hljs')
        $(node).html(html)
      })
    })
  })
}

function addZoom() {
  //https://github.com/fat/zoom.js
  addLink('/css/zoom.css')
  addScript('/js/zoom.js', () => {
    $('#__nuxt').find('img').attr("data-action", 'zoom')
  })
}

function addBackstretch() {
  //https://github.com/jquery-backstretch/jquery-backstretch
  addScript('https://cdn.bootcss.com/jquery-backstretch/2.0.4/jquery.backstretch.min.js', () => {
    $.backstretch('https://i.loli.net/2020/01/20/VXvo2ShyBaPNkdJ.jpg')
  })
}

function addJq(callback) {
  addScript('https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js', callback)
}

function addMathjax() {
  //https://mathjax.github.io/MathJax-demos-web/tex-chtml.html
  addScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js')
  //不知道为什么，经过markdown的反斜杠会被转义，需要在那些用括号或者方括号的，以及换行的地方用\\
  MathJax = {
    tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
  }
}

function addScript(url, callback) {
  let node = document.createElement('script')
  node.src = url
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

function addLink(url, callback) {
  let node = document.createElement('link')
  node.rel = 'stylesheet'
  node.type = 'text/css'
  node.href = url
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
