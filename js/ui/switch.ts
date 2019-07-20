namespace ui {
  export namespace swiitch {
    export let valor123 = false;
    export function crea() {
      let gSwitch = this as d3.Selection<any, any, any, any>;
      var swiitch = d3Switch();
      gSwitch.classed("switch", true);
      let switc = gSwitch.append("g").call(swiitch);
      //   .append("text")
      //   .attr("x", 6)
      //   .attr("y", 50)
      //   .text("swicth");
      // function update() {
      //   var check = swiitch.checked();
      //   switc.text(check + "");
      // }
      // swiitch.clickEvent(update).checked(false);
    }
    export function vlswi() {
      return valor123;
    }

    export function d3Switch() {
      let size = 30,
        x = 0,
        y = 0,
        rx = 13,
        ry = 13,
        markStrokeWidth = 3,
        boxStrokeWidth = 1,
        checked = false,
        clickEvent;

      function fSwitch(selection: d3.Selection<any, any, any, any>) {
        var g = selection.append("g"),
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
          valor123 = checked;
          if (clickEvent) clickEvent();
          d3.event.stopPropagation();
        });
      }
      return fSwitch;
    }
  }
}
d3.selection.prototype.dswitch = ui.swiitch.crea;
d3.selection.prototype.valswitch = ui.swiitch.vlswi;
