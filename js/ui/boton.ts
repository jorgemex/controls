
namespace ui {
    export namespace boton {

        export function func() {
            let gboton = this as d3.Selection<any, any, any, any>;
            let alto: number;
            let ancho: number;
            let color: string;
            let ry: number;
            let texto: string;
            let opacidad: number;
            let transladada: string;
            let borde: string;
            let tamanoborde: number;

            if (gboton.property("alto") !== undefined) {
                alto = gboton.property("alto");
            }
            if (gboton.property("ancho") !== undefined) {
                ancho = gboton.property("ancho");
            }
            if (gboton.property("texto") !== undefined) {
                texto = gboton.property("texto")
            }
            if (gboton.property("color") !== undefined) {
                color = gboton.property("color");
            }
            if (gboton.property("ry") !== undefined) {
                ry = gboton.property("ry");
            }
            if (gboton.property("opacidad") !== undefined) {
                opacidad = gboton.property("opacidad");
            }
            if (gboton.property("transladada") !== undefined) {
                transladada = gboton.property("transladada");
            }
            if (gboton.property("borde") !== undefined) {
                borde = gboton.property("borde");
            }
            if (gboton.property("tamanoborde") !== undefined) {
                tamanoborde = gboton.property("tamanoborde");
            }
            gboton.classed("boton", true)
                .style("pointer-events", "all");

            let rect = gboton.append("rect")
                .attr("height", alto)
                .attr("width", ancho)
                .attr("fill", color)
                .attr("ry", ry)
                .style("stroke-width", tamanoborde)
                .style("stroke", borde)
                .style("opacity", opacidad);

            gboton.append("text")
                .attr("x", ancho / 3)
                .attr("y", alto / 1.8)
                .text(texto);
            //gboton.alignment();
            return gboton;
        }
    }
}

d3.selection.prototype.boton = ui.boton.func;






            // .on("mouseover", function () {
            //     rect.attr("fill", colors.naranja);
            // })
            // .on("mouseout", function () {
            //     rect.attr("fill", colors.verde);
            // });