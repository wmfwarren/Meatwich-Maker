var Sandwich = (function(sandwich){
	var cheeses = [
	{item: "None", price: 0.00},
	{item: "Cheddar", price: 0.35 },
	{item: "Goat", price: 1.35 },
	{item: "Pepperjack", price: 0.55 },
	{item: "'Murican", price: 0.15 }
	]

	sandwich.getCheeses = function (){
		return cheeses;
	};

	return sandwich;
})(Sandwich || {});