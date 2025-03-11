console.log(document);
console.log(typeof document);
// {prop: "val",prop:"val"}
function changeHeaderContent() {
  // doming some dom manipulation
  console.log(document.querySelectorAll("h1"));

  // document.querySelectorAll("h1")
  for (let index = 0; index < document.querySelectorAll("h1").length; index++) {
    document.querySelectorAll("h1")[index].textContent = "Heading" + index++;
  }
}
setTimeout(changeHeaderContent, 3000);

/// access specific elements
// Every element has access to some methods cthat can be used to accessss other elements
// These methods/functions include querySelector, querySelectorAll, getElementById,
// getElementsByClassName, getElementsByTagName
