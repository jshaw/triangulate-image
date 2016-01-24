"use strict";

function clamp(value, min, max) {
	return value < min ? min : value > max ? max : value;
}

module.exports = clamp;