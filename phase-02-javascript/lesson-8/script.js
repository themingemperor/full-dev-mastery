const client = { 
    name: "Acme Co", 
    budget: 2500, 
    package: "Fix Sprint", 
    isPaid: false 
}

console.log(client); 
console.log(client.name); 
console.log(client.budget); 

client.isPaid = true;
client.email = "hi@acme.co";

console.log(client);

console.log(`${client.name} booked a ${client.package}.`);

if (client.isPaid) {
  console.log("Ready to start work");
}

const clients = [
  { name: "Acme Co", budget: 2500 },
  { name: "Bloom Studio", budget: 3500 },
  { name: "Pixel Cafe", budget: 1200 }
]; 

for (const clt of clients) {
  console.log(`${clt.name}: $${clt.budget}`); 
}

function getPackage(budget) {
  if (budget >= 3000) {
    return "Launch Sprint";
  } else if (budget >= 2000) {
    return "Fix Sprint";
  } else if (budget >= 1000) {
    return "App Review";
  }
  return "Smaller scope";
}


for (const clt of clients) { 
  console.log(`${clt.name}: ${getPackage(clt.budget)}`);
}

let total = 0; 

for (const clt of clients) {
  total = total + clt.budget;
}
console.log(`Total budget: $${total}`);


function clientSummary(client) {
  return `The client is ${client.name} and their budget is $${client.budget}. Their package is ${getPackage(client.budget)}.`
}

for (const clt of clients) {
  console.log(clientSummary(clt));
}