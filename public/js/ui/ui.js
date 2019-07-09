var ui;
(function (ui) {
    function ini() {
        let height_windows = (window.innerHeight / window.innerWidth) * 1000;
        ui.svg_main = d3
            .select("body")
            .append("svg")
            .style("position", "absolute")
            .attr("viewBox", "0 0 1000 2000")
            .attr("preserveAspectRatio", "none slice");
        ui.svg_main
            .append("rect")
            .attr("height", height_windows)
            .attr("width", 1000)
            .attr("fill", "black")
            .classed("fondo - negro", true);
        let insBton = ui.svg_main
            .append("g")
            .attr("transform", "translate(400,250)")
            .classed("boton", true)
            .property("alto", 50)
            .property("ancho", 100)
            .property("texto", "Boton")
            .property("ry", 10)
            .property("borde", "blue")
            .property("tamanoborde", 1)
            .applyFont(ui.fonts.fntTitulo)
            .property("color", ui.colors.verde)
            .on("click", function () {
            let tmfecha = d3.select("#calendario").calendarValue();
            let now_utc_fehca = new Date(Date.UTC(tmfecha.getUTCFullYear(), tmfecha.getUTCMonth(), tmfecha.getUTCDate(), 0, 0, 0));
            let d = new Date("Mon Feb 07 2011 11:05:00 GMT");
            let s;
            console.log();
            alert(now_utc_fehca.toISOString());
        })
            .boton();
        let sboton = ui.svg_main
            .append("g")
            .attr("transform", "translate(280,250)")
            .property("alto", 50)
            .property("ancho", 100)
            .property("texto", "input")
            .property("borde", "white")
            .property("ry", 10)
            .property("color", ui.colors.naranja)
            .on("click", function () {
            let texto = d3.select("#test").textfieldvalue();
            console.log(texto);
            alert(texto);
            //console.log(now_utc_fehca.toISOString());
        })
            .boton();
        let rect = ui.svg_main
            .append("g")
            .attr("transform", "translate(320,200)")
            .property("id", "test")
            .cajaTexto();
        let textd = ui.svg_main
            .append("g")
            .attr("transform", "translate(320,150)")
            .cajaTexto();
        let calen = ui.svg_main.append("g");
        calen
            .attr("transform", "translate(500,100)")
            .style("pointer-events", "all")
            .attr("id", "calendario")
            .calendar();
    }
    ui.ini = ini;
})(ui || (ui = {}));
//# sourceMappingURL=ui.js.map