namespace ui {
  export var svg_main: d3.Selection<any, any, any, any>;
  export function ini() {
    let height_windows = (window.innerHeight / window.innerWidth) * 1000;

    svg_main = d3
      .select("body")
      .append("svg")
      .style("position", "absolute")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("viewBox", "0 0 400 100")
      .attr("preserveAspectRatio", "xMinYMin meet");
    svg_main
      .append("rect")
      .attr("height", height_windows)
      .attr("width", 1000)
      .attr("fill", "white");
    let diaog = svg_main.append("g");
    let insBton = svg_main
      .append("g")
      .attr("transform", "translate(70,320)")
      .classed("boton", true)
      .on("click", function() {
        let val = (<HTMLInputElement>document.getElementById("msg")).value;

        diaog
          .attr("transform", "translate(45,450)")
          .property("text", val)
          .dialogs();
      })
      //texto del boton, color borde, color del boton
      .boton("Boton", "green", colors.verde);

    let sboton = svg_main
      .append("g")
      .attr("transform", "translate(230,320)")
      .on("click", function() {
        let texto = d3.select("#test").textfieldvalue();
        console.log(texto);
        alert(texto);
      })
      .boton("input", "green", colors.naranja);

    let rect = svg_main
      .append("g")
      .attr("transform", "translate(5,10)")
      .cajaTexto("msg");

    // let textd = svg_main
    //   .append("g")
    //   .property("id", "x")
    //   .attr("transform", "translate(320,150)")
    //   .textarea();

    let calen = svg_main.append("g");

    calen
      .attr("transform", "translate(200,10)")
      .style("pointer-events", "all")
      .attr("id", "calendario")
      .calendar();

    let url = "js/data/actual.json";
    let parametro = "nombre";

    let drop = svg_main.append("g");
    drop.attr("transform", "translate(20,50)").dropdown(url, parametro);

    let switc = svg_main.append("g");

    switc.attr("transform", "translate(50, 410)").switchs();
    //
    var checkBox1 = ui.checkbox.d3CheckBox();
    var txt = svg_main
        .append("g")
        .attr("transform", "translate(50,500)")
        .append("text")
        .attr("x", 10)
        .attr("y", 80),
      update = function() {
        var checked1 = checkBox1.checked();
        txt.text(checked1 + ", ");
      };

    checkBox1
      .size(30)
      .x(70)
      .y(500)
      .rx(5)
      .ry(5)
      .markStrokeWidth(3)
      .boxStrokeWidth(4)
      .clickEvent(update)
      .checked(true)
    svg_main.call(checkBox1);
    // diaog;
  }
}
