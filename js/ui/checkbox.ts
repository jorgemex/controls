namespace ui {
  export namespace checkbox {
  
    export function d3CheckBox() {
      let size = 20,
        x: any,
        y: any,
        rx: any,
        ry: any,
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
            .style("fill-opacity", 0,)
            .style("stroke-width", boxStrokeWidth)
            .style("stroke", "black");

        //Data to represent the check mark
        var coordinates = [
          {x: x + (size / 8), y: y + (size / 2)},
          
          {x: x + (size / 2.2), y: (y + size) - (size / 4)},
          {x: (x + size) - (size / 8), y: (y + (size / 10))}
        ];
        
        type DataType = { x: any; y: any };
        var line = d3.line<DataType>()
          .x(d => {return d.x;})
          .y(d => {return d.y;});

        var mark = g.append("path")
          .attr("d", line(coordinates))
          .style("stroke-width", markStrokeWidth)
          .style("stroke", "black")
          .style("fill", "none")
          .style("opacity", (checked)? 1 : 0);

        g.on("click", () => {
          checked = !checked;
          mark.style("opacity", (checked) ? 1 : 0);
          if (clickEvent)
                clickEvent();
          d3.event.stopPropagation();
        });
      }

      checkBox.size = (val) => {
        size = val;
        return checkBox;
      };

      checkBox.x = (val) => {
        x = val;
        return checkBox;
      };

      checkBox.y = (val) => {
        y = val;
        return checkBox;
      };

      checkBox.rx = (val) => {
        rx = val;
        return checkBox;
      };

      checkBox.ry = (val) => {
        ry = val;
        return checkBox;
      };

      checkBox.markStrokeWidth = (val) => {
        markStrokeWidth = val;
        return checkBox;
      };

      checkBox.boxStrokeWidth = (val) => {
        boxStrokeWidth = val;
        return checkBox;
      };

      checkBox.checked = (val?) => {
        if (val === undefined) {
          return checked;
        } else {
          checked = val;
          return checkBox;
        }
      };

      checkBox.clickEvent = (val) => {
        clickEvent = val;
        return checkBox;
      };

      return checkBox;
    }
  }
}
