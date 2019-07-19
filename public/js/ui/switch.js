var ui;
(function (ui) {
    let swiitch;
    (function (swiitch) {
        function d3Switch() {
            let size = 30, x = 0, y = 0, rx = 13, ry = 13, markStrokeWidth = 3, boxStrokeWidth = 1, checked = true, clickEvent;
            function fSwitch(selection) {
                var g = selection.append("g"), box = g
                    .append("rect")
                    .attr("width", 55)
                    .attr("height", 28)
                    .attr("x", x)
                    .attr("y", y)
                    .attr("rx", rx)
                    .attr("ry", ry)
                    .attr("fill", "#d3d3d3")
                    .style("fill-opacity", 1)
                    .style("stroke-width", boxStrokeWidth)
                    .style("stroke", "black");
                var mark = g.append("circle")
                    .attr("r", 12)
                    .style("stroke-width", markStrokeWidth)
                    .style("stroke", "white")
                    .attr("fill", "white")
                    .attr('cx', 15)
                    .attr('cy', 14);
                // var mark = g.append("path")
                // .attr("d", line(coordinates))
                // .style("stroke-width", markStrokeWidth)
                // .style("stroke", "black")
                // .style("fill", "none")
                // .attr("transform","translate(0,0)")
                //.style("opacity", (checked)? 1 : 0)
                mark.on("click", () => {
                    checked = !checked;
                    if (checked == true) {
                        mark.attr('cx', 41).attr('cy', 14);
                        box.attr("fill", "#64bd63");
                    }
                    else {
                        mark.attr('cx', 15).attr('cy', 14);
                        box.attr("fill", "#d3d3d3");
                    }
                    if (clickEvent)
                        clickEvent();
                    d3.event.stopPropagation();
                });
            }
            fSwitch.checked = (val) => {
                if (val === undefined) {
                    return checked;
                }
                else {
                    checked = val;
                    return fSwitch;
                }
            };
            fSwitch.clickEvent = (val) => {
                clickEvent = val;
                return fSwitch;
            };
            return fSwitch;
        }
        swiitch.d3Switch = d3Switch;
    })(swiitch = ui.swiitch || (ui.swiitch = {}));
})(ui || (ui = {}));
//# sourceMappingURL=switch.js.map