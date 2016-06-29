var Sandwich = (function(sandwich){
	var condiments = [
	{item: "None", price: 0.00 },
	{item: "Ketchup", price: 0.07 },
	{item: "Fancy Ketchup", price: 0.11 },
	{item: "Mustard", price: 0.07},
	{item: "Chocolate Pudding", price: 0.55},
	{item: "Chili", price: 0.75},
	{item: "Egg", price: 1.00 },
	];

	sandwich.getCondiments = function(){
		return condiments;
	};

	return sandwich;
})(Sandwich || {});