namespace ui {
  export namespace checkbox {
    export function crea() {
      let gChecked = this as d3.Selection<any, any, any, any>;

      var chckbox = d3CheckBox();
      let check = gChecked
          .append("g")
          .call(chckbox)
          .append("text")
          .attr("x", 0)
          .attr("y", 50)
          .text("checkbox false"),
        update = () => {
          var checked = chckbox.checked();
          check.text("checkbox " + checked);
        };
      chckbox.clickEvent(update).checked(false);
    }

    export function d3CheckBox() {
      let size = 30,
        x = 0,
        y = 0,
        rx = 5,
        ry = 5,
        markStrokeWidth = 3,
        boxStrokeWidth = 3,
        checked = false,
        clickEvent;

      function checkBox(selection) {
        var g = selection.append("g"),
          box = g
            .append("rect")
            .attr("width", size)
            .attr("height", size)
            .attr("x", x)
            .attr("y", y)
            .attr("rx", rx)
            .attr("ry", ry)
            .style("fill-opacity", 0)
            .style("stroke-width", boxStrokeWidth)
            .style("stroke", "black");

        //Data to represent the check mark
        var coordinates = [
          { x: x + size / 4, y: y + size / 2 },
          { x: x + size / 2.5, y: y + size - size / 4 },
          { x: x + size - size / 8, y: y + size / 8 }
        ];

        type DataType = { x: any; y: any };
        var line = d3
          .line<DataType>()
          .x(d => {
            return d.x;
          })
          .y(d => {
            return d.y;
          });

        var mark = g
          .append("path")
          .attr("d", line(coordinates))
          .style("stroke-width", markStrokeWidth)
          .style("stroke", "black")
          .attr("id", "che")
          .style("fill", "none")
          .style("opacity", checked ? 1 : 0);

        g.on("click", () => {
          checked = !checked;
          mark.style("opacity", checked ? 1 : 0);
          if (clickEvent) clickEvent();
          d3.event.stopPropagation();
        });
      }

      checkBox.checked = (val?) => {
        if (val === undefined) {
          return checked;
        } else {
          checked = val;
          return checkBox;
        }
      };

      checkBox.clickEvent = val => {
        clickEvent = val;
        return checkBox;
      };

      return checkBox;
    }
  }
}

d3.selection.prototype.checkbox = ui.checkbox.crea;
