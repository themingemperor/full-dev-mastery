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

function hoursLeft(hoursToday) {
    if (hoursToday > 6.5) {
        return 0;
    }
    return 6.5 - hoursToday;
}

console.log(`You have ${hoursLeft(5)} hours left today.`);

function formatPrice(amount) {
    return `$${amount} USD`;
}

console.log(`${getPackage(2000)} costs ${formatPrice(2000)}`);