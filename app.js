
(function(){
var app = angular.module('gemStore', [ ]);

app.controller('StoreContorller', function(){
	this.product = gem;
});

var gem = {
	name: '',
	price: 2.95,
	description: '. . .'
}

})();
