var Sandwich = (function(sandwich){
	var totalPrice = 0.00;

	sandwich.getPrice = function(){
		return totalPrice;
	};

	sandwich.getItem = function(event){
		var selectedItem = event.target.value;
		var targetArrayName = event.currentTarget.id;
		var targetArray = null;

		switch (targetArrayName) {
			case "Meats": 
				targetArray = Sandwich.getMeats();
				break;
			case "Veggies":
				targetArray = Sandwich.getVeggies();
				break;
			case "Breads":
				targetArray = Sandwich.getBreads();
				break;
			case "Cheeses":
				targetArray = Sandwich.getCheeses();
				break;
			case "Condiments":
				targetArray = Sandwich.getCondiments();
				break;
		}

		Sandwich.displayItem(selectedItem, targetArray);

	};

	sandwich.displayItem = function (itemToAdd, array){
		var sandwichZone = document.getElementById("sandwichArea");

		//for (let i = 0; i < array.length; i ++){
			if (array.item = itemToAdd){
				totalPrice += array.price;

				let newItem = document.createElement("div")
				newItem.innerText = itemToAdd;
				sandwichZone.appendChild(newItem);
			}
		//}
	};

	return sandwich;
})(Sandwich || {});