class Grid {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let grid =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = grid;
  }
}

const grid = new Grid({
  columns: ["Name", "Email"],
  data: [
    ["Kwon Yuli", "kwonyuli@gmail.com"],
    ["Yulianto", "yulianto@gmail.com"]
  ]
});
const app = document.getElementById("app");
grid.render(app);



