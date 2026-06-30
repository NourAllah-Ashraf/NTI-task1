var arr = ["English", "CSCI205", "CSI212", "CSCI207"];
var value = prompt("Enter a name:");

if (arr.includes(value)) {
    alert("Found");
} else {
    alert("Not Found");
    arr.push(value);
}
console.log(arr);