function bookPlaneTickets() {
  console.log('Plane tickets booked');
  requestVacationDays();
}

const bookHotel = function() {
  console.log('Hotel booked');
  planItinerary();
}

function requestVacationDays() {
  console.log('Vacation days requested',);
}

function planItinerary() {
  console.log('Itinerary done');
}

function planTrip() {
  bookPlaneTickets();
  bookHotel();
  console.log('Trip planned');
}

planTrip();
