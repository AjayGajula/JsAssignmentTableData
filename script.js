const url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

let itemList = (data) => {
  $("#tbody").append(
    $("<tr>")
      .attr({
        id: data.id,
        class: "data-row",
      })
      .append(
        $("<td>").attr("class", "column1").text(data.id),
        $("<td>").attr("class", "column2").text(data.firstName),
        $("<td>").attr("class", "column3").text(data.lastName),
        $("<td>").attr("class", "column4").text(data.email),
        $("<td>").attr("class", "column5").text(data.phone)
      )
  );

  $(`#${data.id}`).click(function () {
    $(".data-row").removeClass("active");
    $(`#${data.id}`).addClass("active");
    $(".info-content").show();
    details(data);
  });
  $(".data-row").removeClass("active");
};

let details = (data) => {
  $("#fstLast").text(`${data.firstName} ${data.lastName}`);
  $("#desc").text(" " + data.description);
  $("#address").text(" " + data.address.streetAddress);
  $("#city").text(" " + data.address.city);
  $("#State").text(" " + data.address.state);
  $("#zip").text(" " + data.address.zip);
};
$("#search-box").keyup(function () {
  var value = $(this).val().toLowerCase();
  $("#tbody tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) >= 0);
  });
});

let list = [];

$.get(url, (data) => {
  list = data;
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    itemList(list[i]);
  }
});
