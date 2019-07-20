var ui;
(function (ui) {
    let swiitch;
    (function (swiitch_1) {
        function crea() {
            let gSwitch = this;
            var swiitch = d3Switch();
            gSwitch.classed("switch", true);
            let switc = gSwitch
                .append("g")
                .call(swiitch)
                .append("text")
                .attr("x", 6)
                .attr("y", 50)
                .text("swicth");
            function update() {
                var check = swiitch.checked();
                switc.text(check + "");
                return check;
            }
            swiitch.clickEvent(update).checked(false);
        }
        swiitch_1.crea = crea;
        function vlswi() {
            return "no se";
        }
        swiitch_1.vlswi = vlswi;
        function d3Switch() {
            let size = 30, x = 0, y = 0, rx = 13, ry = 13, markStrokeWidth = 3, boxStrokeWidth = 1, checked = false, clickEvent;
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
                var mark = g
                    .append("circle")
                    .attr("r", 12)
                    .style("stroke-width", markStrokeWidth)
                    .style("stroke", "white")
                    .attr("fill", "white")
                    .attr("cx", 15)
                    .attr("cy", 14);
                mark.on("click", () => {
                    checked = !checked;
                    if (checked == true) {
                        mark.attr("cx", 41).attr("cy", 14);
                        mark.attr("val");
                        box.attr("fill", "#64bd63");
                        console.log(checked);
                    }
                    else {
                        mark.attr("cx", 15).attr("cy", 14);
                        box.attr("fill", "#d3d3d3");
                        console.log(checked);
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
            fSwitch.clickEvent = val => {
                clickEvent = val;
                return fSwitch;
            };
            return fSwitch;
        }
        swiitch_1.d3Switch = d3Switch;
    })(swiitch = ui.swiitch || (ui.swiitch = {}));
})(ui || (ui = {}));
d3.selection.prototype.dswitch = ui.swiitch.crea;
d3.selection.prototype.valswitch = ui.swiitch.vlswi;
//# sourceMappingURL=switch.js.map