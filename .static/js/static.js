$(function () {
    table()
})

function table() {
    $('table').each(function (i, n) {
        $(n).addClass('table b-table table-striped table-hover table-responsive')
    })
}

let a_idx = 0

function clickJump() {
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