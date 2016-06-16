var DOMHandler = (function(){
	var partTypes = ["Meats", "Veggies", "Breads", "Cheeses", "Condiments"];
	var allParts = [];
	allParts.push(Sandwich.getMeats());
	allParts.push(Sandwich.getVeggies());
	allParts.push(Sandwich.getBreads());
	allParts.push(Sandwich.getCheeses());
	allParts.push(Sandwich.getCondiments());

	for (let i = 0; i < allParts.length; i++){
		currentPart = allParts[i];
		let currentNewDiv = document.createElement("div");
		let newDivID = document.createAttribute("id");
		newDivID.value = `${partTypes[i]}`;
		currentNewDiv.setAttributeNode(newDivID);
		document.getElementById("pickers").appendChild(currentNewDiv);

		let currentNewSelect = document.createElement("select");
		let newSelectClass = document.createAttribute("class");
		newSelectClass.value = "col-xs-2";
		currentNewSelect.setAttributeNode(newSelectClass);
		currentNewDiv.appendChild(currentNewSelect);

		for(let j = 0; j < currentPart.length; j++){
			let currentItem = currentPart[j].item;
			let currentPrice = currentPart[j].price;
			let targetDiv = currentNewSelect;

			let newOption = document.createElement("option");
			let newOptionValue = document.createAttribute("value");
			newOptionValue.value = currentItem;
			newOption.innerText = `${currentItem}`;

			newOption.setAttributeNode(newOptionValue);
			currentNewSelect.appendChild(newOption);




		}
	}


})();