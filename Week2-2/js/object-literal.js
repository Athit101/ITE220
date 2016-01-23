var hotel = {
name: 'Sunrise Hotel',
rooms: 100,
booked: 85,
checkAvailability: function()
{return this.rooms - this.booked;}
};



//var elName= document.getElementById('hotelName');
//elName.textContent = hotel.name;

$(':hotelName').write("Testing");

//$('div#hotelname').text('esting');

var elRooms= document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();