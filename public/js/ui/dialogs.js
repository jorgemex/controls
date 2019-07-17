var ui;
(function (ui) {
    let dialogs;
    (function (dialogs) {
        function crea() {
            var gDialog = this;
            gDialog.classed("gdialog", true);
            let width = 250;
            let height = 100;
            let text;
            let rect = gDialog.append("g");
            if (gDialog.property("text") !== undefined) {
                text = gDialog.property("text");
            }
            rect
                .append("rect")
                .attr("width", width)
                .attr("height", height)
                .attr("ry", 10)
                .attr("fill", "#262626")
                .style("stroke-width", 0.1)
                .style("stroke", 2);
            rect
                .append("text")
                .text(text)
                .attr("fill", ui.colors.blanco)
                .attr("x", width / 2.5)
                .attr("y", height / 2);
            let boton1 = rect.append("g").on("click", function () {
                rect.remove();
            });
            boton1
                .append("rect")
                .attr("width", width / 2 + 1)
                .attr("height", height / 3)
                .attr("fill", "#262626")
                .attr("rx", 10)
                .attr("ry", 10)
                .attr("x", 0)
                .attr("y", 85)
                .style("stroke-width", 0.1)
                .style("stroke", "white");
            boton1
                .append("text")
                .text("Aceptar")
                .attr("fill", "white")
                .attr("x", 30)
                .attr("y", 105);
            let boton2 = rect.append("g").on("click", function () {
                rect.remove();
            });
            boton2
                .append("rect")
                .attr("width", width / 2 + 1)
                .attr("height", height / 3)
                .attr("fill", "#262626")
                .attr("rx", 10)
                .attr("ry", 8)
                .attr("x", 125)
                .attr("y", 85)
                .style("stroke-width", 0.1)
                .style("stroke", "white");
            boton2
                .append("text")
                .text("cancelar")
                .attr("fill", "white")
                .attr("x", 160)
                .attr("y", 105);
        }
        dialogs.crea = crea;
    })(dialogs = ui.dialogs || (ui.dialogs = {}));
})(ui || (ui = {}));
d3.selection.prototype.dialogs = ui.dialogs.crea;
//# sourceMappingURL=dialogs.js.map