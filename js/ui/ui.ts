namespace ui {
  export var svg_main: d3.Selection<any, any, any, any>;
  export function ini() {
    let height_windows = (window.innerHeight / window.innerWidth) * 1000;
    svg_main = d3
      .select("body")
      .append("svg")
      .style("position", "absolute")
      .attr("viewBox", "0 0 1000 2000")
      .attr("preserveAspectRatio", "none slice");
    svg_main
      .append("rect")
      .attr("height", height_windows)
      .attr("width", 1000)
      .attr("fill", "black")
      .classed("fondo - negro", true);

    let insBton = svg_main
      .append("g")
      .attr("transform", "translate(400,450)")
      .classed("boton", true)
      .property("alto", 50)
      .property("ancho", 100)
      .property("texto", "Boton")
      .property("ry", 10)
      .property("borde", "blue")
      .property("tamanoborde", 1)
      .applyFont(fonts.fntTitulo)
      .property("color", colors.verde)
      .on("click", function() {
        let tmfecha = d3.select("#calendario").calendarValue();

        let now_utc_fehca = new Date(
          Date.UTC(
            tmfecha.getUTCFullYear(),
            tmfecha.getUTCMonth(),
            tmfecha.getUTCDate(),
            0,
            0,
            0
          )
        );
        let d = new Date("Mon Feb 07 2011 11:05:00 GMT");
        let s: string;
        console.log();
        alert(now_utc_fehca.toISOString());
      })
      .boton();

    let sboton = svg_main
      .append("g")
      .attr("transform", "translate(280,450)")
      .property("alto", 50)
      .property("ancho", 100)
      .property("texto", "input")
      .property("borde", "white")
      .property("ry", 10)
      .property("color", colors.naranja)
      .on("click", function() {
        let texto = d3.select("#test").textfieldvalue();
        console.log(texto);
        alert(texto);
        //console.log(now_utc_fehca.toISOString());
      })
      .boton();

    let rect = svg_main
      .append("g")
      .attr("transform", "translate(320,100)")
      .property("id", "test")
      .cajaTexto();

    let textd = svg_main
      .append("g")
      .property("id", "x")
      .attr("transform", "translate(320,150)")
      .textarea();

    let calen = svg_main.append("g");

    calen
      .attr("transform", "translate(500,100)")
      .style("pointer-events", "all")
      .attr("id", "calendario")
      .calendar();
  }
}
