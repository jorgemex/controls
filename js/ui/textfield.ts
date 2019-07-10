namespace ui {
  export namespace textfield {
    let rect;
    let id: string;
    export function textFValue() {
      let _gt = d3.select(".gctexto").node() as SVGElement;

      console.log(
        "gt",
        _gt.children
          .item(0)
          .children.item(0)
          .children.item(0)
        //fhifh
        //comentario
        //ok
      );
    }

    export function func() {
      let gCajatexto = this as d3.Selection<any, any, any, any>;
      gCajatexto.classed("gctexto", true);

      if (gCajatexto.property("id") !== undefined) {
        id = gCajatexto.property("id");
      }
      let text = ' <input type="text" name="FirstName" value="Mickey">';
      let textarea = '<textarea rows="4" cols="50">s</textarea>';
      rect = gCajatexto.append("g");
      rect
        .append("foreignObject")
        .attr("x", "0")
        .attr("y", "0")
        .attr("id", id)
        .attr("width", 150)
        .attr("height", 30)
        //
        .html(text);
    }
  }
}
d3.selection.prototype.cajaTexto = ui.textfield.func;
d3.selection.prototype.textfieldvalue = ui.textfield.textFValue;
