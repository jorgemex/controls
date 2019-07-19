var ui;
(function (ui) {
    let swiitch;
    (function (swiitch) {
        function d3Switch() {
            let size = 30, x = 0, y = 0, rx = 10, ry = 10, markStrokeWidth = 3, boxStrokeWidth = 3, checked = true, clickEvent;
            function fSwitch(selection) {
                var g = selection.append("g"), box = g
                    .append("rect")
                    .attr("width", 70)
                    .attr("height", 25)
                    .attr("x", x)
                    .attr("y", y)
                    .attr("rx", rx)
                    .attr("ry", ry)
                    .attr("fill", "#d3d3d3")
                    .style("fill-opacity", 1)
                    .style("stroke-width", boxStrokeWidth)
                    .style("stroke", "black");
                //Data to represent the check mark
                var coordinates = [
                    { x: x + (size / 8), y: y + (size / 2) },
                    { x: x + (size / 2.2), y: (y + size) - (size / 4) },
                    { x: (x + size) - (size / 8), y: (y + (size / 10)) }
                ];
                var line = d3.line()
                    .x(d => { return d.x; })
                    .y(d => { return d.y; });
                var mark = g.append("circle")
                    .attr("r", 11)
                    .style("stroke-width", markStrokeWidth)
                    .style("stroke", "white")
                    .attr("fill", "white")
                    .attr('cx', 12)
                    .attr('cy', 12);
                // var mark = g.append("path")
                // .attr("d", line(coordinates))
                // .style("stroke-width", markStrokeWidth)
                // .style("stroke", "black")
                // .style("fill", "none")
                // .attr("transform","translate(0,0)")
                //.style("opacity", (checked)? 1 : 0)
                g.on("click", () => {
                    checked = !checked;
                    //mark.style("opacity", (checked) ? 1 : 0);
                    if (checked == true) {
                        mark.attr('cx', 56).attr('cy', 12);
                        box.attr("fill", "#64bd63");
                    }
                    else {
                        mark.attr('cx', 12).attr('cy', 12);
                        box.attr("fill", "#d3d3d3");
                    }
                    if (clickEvent)
                        clickEvent();
                    d3.event.stopPropagation();
                });
            }
            fSwitch.size = (val) => {
                size = val;
                return fSwitch;
            };
            fSwitch.x = (val) => {
                x = val;
                return fSwitch;
            };
            fSwitch.y = (val) => {
                y = val;
                return fSwitch;
            };
            fSwitch.rx = (val) => {
                rx = val;
                return fSwitch;
            };
            fSwitch.ry = (val) => {
                ry = val;
                return fSwitch;
            };
            fSwitch.markStrokeWidth = (val) => {
                markStrokeWidth = val;
                return fSwitch;
            };
            fSwitch.boxStrokeWidth = (val) => {
                boxStrokeWidth = val;
                return fSwitch;
            };
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