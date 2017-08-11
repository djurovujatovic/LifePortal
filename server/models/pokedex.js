var mongoose = require('mongoose');

var pokedex = mongoose.model('pokedex', {
	id: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = {pokedex};