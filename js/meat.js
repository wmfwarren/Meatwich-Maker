var Sandwich = (function(sandwich){
	var meats = [
	{item: "Beef", price: 5.50},
	{item: "Pork", price: 5.00},
	{item: "Chicken", price: 5.00 },
	{item: "Buffalo", price: 6.00 },
	{item: "Human", price: 666.00 }
	];

	sandwhich.getMeat = function(){
		return meats;
	};



	return sandwich;
})(Sandwich || {});