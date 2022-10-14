const fs = require("fs");

function calculateFuelRequirement(mass) {
	return Math.max(Math.floor(mass / 3) - 2, 0);
}

function calculateModuleFuelRequirement(moduleMass) {
	let total = 0;

	while (moduleMass > 0) {
		const fuelMass = calculateFuelRequirement(moduleMass);

		moduleMass = fuelMass;
		total += fuelMass;
	}

	return total;
}

function calculateTotalFuelRequirement(modules) {
	let total = 0;

	modules.forEach(module => {
		total += calculateModuleFuelRequirement(module);
	});

	return total;
}

const input = fs.readFileSync("input.txt");
const modules = input.toString().split("\n");

console.log(calculateTotalFuelRequirement(modules));
