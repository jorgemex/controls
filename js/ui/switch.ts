namespace ui {
  export namespace swiitch {
    export function crea(size: any) {
      let gSwitch = this as d3.Selection<any, any, any, any>;
      gSwitch.property("value", false);
      let x = 0,
        y = 0,
        rx = size / 4,
        ry = size / 4,
        markStrokeWidth = 0.2,
        boxStrokeWidth = 1,
        checked = false,
        clickEvent;

      var g = gSwitch.append("g"),
        box = g
          .append("rect")
          .attr("width", size)
          .attr("height", size / 2)
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
        .attr("r", size / 4.2)
        .style("stroke-width", markStrokeWidth)
        .style("stroke", "black")
        .attr("fill", "white")
        .attr("cx", size / 4)
        .attr("cy", size / 4);

      mark.on("click", () => {
        checked = !checked;
        if (checked == true) {
          mark.attr("cx", size / 1.33).attr("cy", size / 4);
          box.attr("fill", "#64bd63");
        } else {
          mark.attr("cx", size / 4).attr("cy", size / 4);
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
