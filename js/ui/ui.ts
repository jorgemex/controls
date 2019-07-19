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

    var swiitch = ui.swiitch.d3Switch();

    let switc = svg_main
      .append("g")
      .attr("transform", "translate(50,450)")
      .append("text")
      .attr("y", 40)
      .attr("x", 10)
      .text("switch False");
      update = () => {
        var //checked1 = checkBox1.checked(),
          check = swiitch.checked();
        //checked3 = checkBox3.checked();
        switc.text("switch "+ check);
        //txt.text(checked1 + ", " + checked2 + " , "+checked3);
        //console.log("checked1",checked1);
        console.log("check principal", check);
        //console.log("checked3",checked3);
      };

    swiitch
      .size(30)
      .x(0)
      .y(0)

      .markStrokeWidth(3)
      .boxStrokeWidth(1)
      .clickEvent(update)
      .checked(false);
    svg_main.call(swiitch);

    var //checkBox1 =  ui.checkbox.d3CheckBox(),
      checkBox2 = ui.checkbox.d3CheckBox();
    //checkBox3 = ui.checkbox.d3CheckBox();

    var txt = svg_main
        .append("g")
        .append("text")
        .attr("x", 10)
        .attr("y", 80)
        .text("clickea"),
      update = () => {
        var //checked1 = checkBox1.checked(),
          checked2 = checkBox2.checked();
        //checked3 = checkBox3.checked();
        txt.text(checked2 + "");
        //txt.text(checked1 + ", " + checked2 + " , "+checked3);
        //console.log("checked1",checked1);
        //console.log("checked2", checked2);
        //console.log("checked3",checked3);
      };

    // checkBox1
    //   .size(30)
    //   .x(70)
    //   .y(500)
    //   .markStrokeWidth(10)
    //   .boxStrokeWidth(4)
    //   .clickEvent(update)
    //   .checked(true);

    checkBox2
      .size(30)
      .x(70)
      .y(530)
      .rx(5)
      .ry(5)
      .markStrokeWidth(3)
      .boxStrokeWidth(2)
      .clickEvent(update)
      .checked(true);

    // checkBox3
    // .x(150)
    // .y(500)
    // .clickEvent(update)
    // .checked(true);

    //svg_main.call(checkBox1);
    svg_main.call(checkBox2);
    //svg_main.call(checkBox3);
    // diaog;
  }
}
