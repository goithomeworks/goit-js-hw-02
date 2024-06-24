function getShippingCost(country) {
  switch (country) {
    case "China":
      return generateText(country, 100)
    case "Chile":
      return generateText(country, 250)
    case "Australia":
      return generateText(country, 170)
    case "Jamaica":
      return generateText(country, 120)
    default:
      return "Sorry, there is no delivery to your country"
  }
}

function generateText(country, price) {
  return `Shipping to ${country} will cost ${price} credits.`
}


console.log("########## TASK-1 ##########");
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
