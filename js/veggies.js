var Sandwich = (function(sandwich){
	var veggies = [
	{item: "None", price: 0.00},
	{item: "Fried Broccoli", price: 2.00}
	];

	sandwich.getVeggies = function(){
		return veggies;
	};

	return sandwich;
})(Sandwich || {});