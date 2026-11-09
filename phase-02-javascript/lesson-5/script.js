const screenWidth = 400; 

if (screenWidth < 600) {
  console.log("mobile");
} else if (screenWidth < 1024) {
  console.log("tablet");
} else {
  console.log("desktop");
}