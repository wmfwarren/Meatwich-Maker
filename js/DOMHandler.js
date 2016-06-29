var DOMHandler = (function(){
	var partTypes = ["Meats", "Veggies", "Breads", "Cheeses", "Condiments"];
	var allParts = [];
	allParts.push(Sandwich.getMeats());
	allParts.push(Sandwich.getVeggies());
	allParts.push(Sandwich.getBreads());
	allParts.push(Sandwich.getCheeses());
	allParts.push(Sandwich.getCondiments());

	for (let i = 0; i < allParts.length; i++){ //this loops through the array of part lists 
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

		if( i === 0 ){
			let firstSelectOffset = document.createAttribute("class");
			firstSelectOffset.value = "col-xs-offset-1 col-xs-2";
			currentNewSelect.setAttributeNode(firstSelectOffset);
		}
		
		currentNewDiv.appendChild(currentNewSelect);

		for(let j = 0; j < currentPart.length; j++){
			let currentItem = currentPart[j].item;
			let currentPrice = currentPart[j].price;
			let targetDiv = currentNewSelect;

			let newOption = document.createElement("option");
			let newOptionValue = document.createAttribute("value");
			newOptionValue.value = currentItem; //add the current item to the current dropdown list
			newOption.innerText = `${currentItem}`;

			newOption.setAttributeNode(newOptionValue);
			currentNewSelect.appendChild(newOption);
		}
	}

	for (let i = 0; i < partTypes.length; i++){
		let currentDropdown = document.getElementById(`${partTypes[i]}`);

		currentDropdown.addEventListener("change", Sandwich.getItem);
	}

})();