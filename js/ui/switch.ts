namespace ui {
  export namespace swiitch {
    export function crea() {
      let gSwitch = this as d3.Selection<any, any, any, any>;
      gSwitch.property("value", false);
      let size = 30,
        x = 0,
        y = 0,
        rx = 13,
        ry = 13,
        markStrokeWidth = 3,
        boxStrokeWidth = 1,
        checked = false,
        clickEvent;

      var g = gSwitch.append("g"),
        box = g
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
          box.attr("fill", "#64bd63");
        } else {
          mark.attr("cx", 15).attr("cy", 14);
          box.attr("fill", "#d3d3d3");
        }
        gSwitch.property("value", checked);
        if (clickEvent) clickEvent();
        d3.event.stopPropagation();
      });
    }
    export function valSwitch() {
      let val = this as d3.Selection<any, any, any, any>;
      return val.property("value");
    }
  }
}
d3.selection.prototype.dswitch = ui.swiitch.crea;
d3.selection.prototype.valswitch = ui.swiitch.valSwitch;
