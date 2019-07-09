var ui;
(function (ui) {
    function ini() {
        ui.svg_main = d3.select("body").append("svg").style("position", "absolute").attr("viewBox", "0 0 1000 2000").attr("preserveAspectRatio", "none slice");
        ui.svg_main.append("g").attr("transform", "translate(0,0)").append("rect").attr("height", 30).attr("width", 30).attr("fill", "black").classed("bottom", true).style("cursor", "pointer").on("click", ui.winControl.createWindow);
        ui.resize();
        window.onresize = ui.resize;
    }
    ui.ini = ini;
})(ui || (ui = {}));
//# sourceMappingURL=mainpage.js.map