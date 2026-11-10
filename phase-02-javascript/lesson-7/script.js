const packages = ["App Review", "Fix Print", "Launch Sprint"];

console.log(packages); 
console.log(packages[0]); 
console.log(packages[2]);
console.log(packages.length); 

packages.push("Custom Package");

const tools = ["Git", "VS Code"]; 
tools.push("JavasScript"); 
console.log(tools);

tools.pop();
console.log(tools);

tools[1] = "Cursor"; 
console.log(tools);

if(tools.includes("Git")) {
  console.log("You know Git!");
}

for (const pkg of packages) { 
    console.log(`We offer: ${pkg}`);
}

const skills = ["Git", "GitHub", "HTML", "CSS", "JavaScript"];

skills .push("functions", "arrays"); 
console.log(skills[0]);
console.log(skills[skills.length - 1]);

console.log(skills.length);

for (const skill of skills) {
    console.log(`I can use ${skill}`);
}

function countSkills(skills) {
    return `You know ${skills.length} skills.`;
}

console.log(countSkills(skills));