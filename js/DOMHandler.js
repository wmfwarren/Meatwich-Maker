var DOMHandler = (function(){

	var allParts = [];
	allParts.push(Sandwich.getMeats());
	allParts.push(Sandwich.getVeggies());
	allParts.push(Sandwich.getBreads());
	allParts.push(Sandwich.getCheeses());
	allParts.push(Sandwich.getCondiments());

	for (let i = 0; i < allParts.length; i++){
		currentPart = allParts[i];
		for(let j = 0; j < currentPart.length; j++){
			currentItem = currentPart[i].item;
			currentPrice = currentPrice[i].price;
			
			
		}
	}


})();