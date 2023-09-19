function scuberGreetingForFeet(rideDistance) {
  let response;
  if (rideDistance <= 400) {
    response = "This one is on me!";
  }
  if (rideDistance > 2000) {
    response = "I will gladly take your thirty bucks.";
  }
  if (rideDistance > 2500) {
    response = "No can do.";
  }
  return response;
}

function ternaryCheckCity(cityName){
  let feedback;
  if (cityName === "NYC") {
    feedback = "Ok, sounds good.";
  }else {
    feedback = "No go.";
  }
  return feedback;
}

function switchOnCharmFromTip(tipAmount){
  let reply;
  switch (tipAmount) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
      reply = "Thank you.";
      break;
    default:
      reply = "Bye.";
  }
  return reply;
}