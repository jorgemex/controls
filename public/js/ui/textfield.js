var ui;
(function (ui) {
    let textfield;
    (function (textfield) {
        let rect;
        let id;
        function textFValue() {
            let _gt = d3.select(".gctexto").node();
            console.log("gt", _gt.children
                .item(0)
                .children.item(0)
                .children.item(0)
            //fhifh
            //comentario
            //ok
            );
        }
        textfield.textFValue = textFValue;
        function func() {
            let gCajatexto = this;
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
                .html(text);
        }
        textfield.func = func;
    })(textfield = ui.textfield || (ui.textfield = {}));
})(ui || (ui = {}));
d3.selection.prototype.cajaTexto = ui.textfield.func;
d3.selection.prototype.textfieldvalue = ui.textfield.textFValue;
//# sourceMappingURL=textfield.js.map