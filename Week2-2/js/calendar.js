// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
var date=31;
var count=0;
// stringHTML = "<tr><td>1</td><td>2</td></tr>";



var table = document.getElementById("hotelCalendarTable");
for (var i = 1; i <= date; i++) {
if (count === 0){
	stringHTML += "<tr>";
	count++
	}   


if (count === 7 || i === date) {
	stringHTML += "<td>" + i + "</td></tr>";
	count=0;
}
else {
	stringHTML += "<td>" + i + "</td>";
	count++;
}


}

hotelTable.innerHTML += stringHTML;