var Sandwich = (function(sandwich){
	var breads = [
	{item: "None", price: 0.00},
	{item: "Pumpernickel", price: 1.00 },
	{item: "Texas Toast", price: 0.50 },
	{item: "Toasted Baguette", price: 1.25 }
	];

	sandwich.getBreads = function () {
		return breads;
	};

	return sandwich;
})(Sandwich || {});