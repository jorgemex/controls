var ui;
(function (ui) {
    let checkbox;
    (function (checkbox) {
        function d3CheckBox() {
            var size = 20, x, y, rx, ry, markStrokeWidth = 3, boxStrokeWidth = 3, checked = false, clickEvent;
            function checkBox(selection) {
                var g = selection.append("g"), box = g
                    .append("rect")
                    .attr("width", size)
                    .attr("height", size)
                    .attr("x", x)
                    .attr("y", y)
                    .attr("rx", rx)
                    .attr("ry", ry)
                    .style({
                    "fill-opacity": 0,
                    "stroke-width": boxStrokeWidth,
                    stroke: "black"
                });
                //Data to represent the check mark
                var coordinates = [
                    { x: x + size / 8, y: y + size / 3 },
                    { x: x + size / 2.2, y: y + size - size / 4 },
                    { x: x + size - size / 8, y: y + size / 10 }
                ];
                var line = d3
                    .line()
                    .x(d => {
                    return d.x;
                })
                    .y(d => {
                    return d.y;
                })
                    .curve(d3.curveBasis);
                var mark = g
                    .append("path")
                    .attr("d", line(coordinates))
                    .style({
                    "stroke-width": markStrokeWidth,
                    "stroke": "black",
                    "fill": "none",
                    "opacity": checked ? 1 : 0
                });
                g.on("click", function () {
                    checked = !checked;
                    mark.style("opacity", checked ? 1 : 0);
                    if (clickEvent)
                        clickEvent();
                    d3.event.stopPropagation();
                });
            }
            checkBox.size = val => {
                size = val;
                return checkBox;
            };
            checkBox.x = function (val) {
                x = val;
                return checkBox;
            };
            checkBox.y = function (val) {
                y = val;
                return checkBox;
            };
            checkBox.rx = function (val) {
                rx = val;
                return checkBox;
            };
            checkBox.ry = function (val) {
                ry = val;
                return checkBox;
            };
            checkBox.markStrokeWidth = function (val) {
                markStrokeWidth = val;
                return checkBox;
            };
            checkBox.boxStrokeWidth = function (val) {
                boxStrokeWidth = val;
                return checkBox;
            };
            checkBox.checked = function (val) {
                if (val === undefined) {
                    return checked;
                }
                else {
                    checked = val;
                    return checkBox;
                }
            };
            checkBox.clickEvent = function (val) {
                clickEvent = val;
                return checkBox;
            };
            return checkBox;
        }
        checkbox.d3CheckBox = d3CheckBox;
    })(checkbox = ui.checkbox || (ui.checkbox = {}));
})(ui || (ui = {}));
//# sourceMappingURL=checkbox.js.map