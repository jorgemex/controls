var ui;
(function (ui) {
    let dropdown;
    (function (dropdown) {
        function crea(url, parametro) {
            let dropdw = this;
            dropdw.classed("gdropdown", true);
            let rect = dropdw.append("g");
            dropdw.on("click", function () {
                alert("xdxdxdx");
            });
            rect
                .append("rect")
                .attr("width", 360)
                .attr("height", 250)
                .attr("ry", 10)
                .attr("fill", "#262626")
                .attr("stroke-width", 1)
                .attr("stroke", "white");
            d3.json(url).then(function (data) {
                var dats;
                for (var i = 0; i < data.length; i++) {
                    dats = data[i][parametro];
                    dropdw
                        .append("rect")
                        .attr("width", 340)
                        .attr("height", 30)
                        .attr("fill", "none")
                        .attr("transform", "translate(10," + (10 + i * 30) + ")");
                    dropdw
                        .append("text")
                        .text(dats)
                        .attr("x", 30)
                        .attr("y", 30 + i * 30)
                        .style("fill", "white")
                        .style("font-size", "18")
                        .style("fotn-weight", "bold");
                }
            });
        }
        dropdown.crea = crea;
    })(dropdown = ui.dropdown || (ui.dropdown = {}));
})(ui || (ui = {}));
d3.selection.prototype.dropdown = ui.dropdown.crea;
//# sourceMappingURL=dropdown.js.map