var products= ["Stamford T-Shirt","Stamford Notebook","Stamford Wristband"]
var price=[10,5,1];
var total=0;
var name = 'Athit';



//display list

var productList = document.getElementById("productList");
productList.innerHTML +="<li>" +products[0] + ": $" + price[0] +"<li>"
productList.innerHTML +="<li>" +products[1] + ": $" + price[1] +"<li>"
productList.innerHTML +="<li>" +products[2] + ": $" + price[2] +"<li>";

//calculate price
total = price[0]+price[1]+price[2];
total = total*0.8;

//document.write("Total is "+total);
var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;

// time variable greeting
var time = new Date().getHours();
var greetings=""; 
if (time < 11) {
     greetings = "Good morning";
} else if (time < 18) {
    greetings = "Good day";
} else {
    greetings = "Good evening";
}
var Message = document.getElementById("greeting");
Message.textContent = greetings +", "+ name +  " ,thank you for your order!";
