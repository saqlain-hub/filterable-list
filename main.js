// get input element
let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterNames);

function filterNames(e) {
  // get value of input
  //   let filterValue = document.getElementById("filterInput").value.toUpperCase();
  //   console.log(filterValue);

  let filterValue = e.target.value.toUpperCase();

  // get names ul
  let ul = document.getElementById("names");
  // get lis from ul
  let li = ul.querySelectorAll("li.collection-item");

  // loop through collection-item lis
  //   for (let i = 0; i < li.length; i++) {
  //     let a = li[i].getElementsByTagName("a")[0];
  //     // if match
  //     if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }

  li.forEach((item) => {
    let a = item.getElementsByTagName("a")[0];
    if (a.textContent.toUpperCase().indexOf(filterValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
