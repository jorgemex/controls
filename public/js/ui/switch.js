var ui;
(function (ui) {
    let switchios;
    (function (switchios) {
        function crea() {
            let width = 70;
            let height = 30;
            let gSwitch = this;
            gSwitch.classed("cSwitch", true).style("pointer-events");
            let rect = gSwitch.append("g");
            rect
                .append("rect")
                .attr("width", width)
                .classed("recta", true)
                .attr("height", height)
                .attr("rx", 11)
                .attr("ry", 15)
                .style("stroke", "black")
                .attr("fill", ui.colors.gris);
            let rectinterno = rect.append("g");
            rectinterno
                .append("circle")
                .attr("r", 15)
                .attr("fill", "white")
                .attr("transform", "translate(16," + height / 2 + ")")
                .on("click", function () {
                rectinterno.attr("transform", "translate(38," + height / 60 + ")");
                d3.select(".recta").attr("fill", ui.colors.verde);
                rect.attr("fill");
            });
            //   rect.append("text").text("click me");
        }
        switchios.crea = crea;
    })(switchios = ui.switchios || (ui.switchios = {}));
})(ui || (ui = {}));
d3.selection.prototype.switchs = ui.switchios.crea;
//# sourceMappingURL=switch.js.map