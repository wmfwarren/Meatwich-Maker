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

		displayItem(selectedItem, targetArray);

	};

	sandwich.displayItem = function (item, array){
		for (let i = 0; i < array.length; i ++){
			if (array[i].item = item){
				totalPrice += array[i].price;

				

			}
		}
	};

	return sandwich;
})(Sandwich || {});