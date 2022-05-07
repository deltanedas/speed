const ui = require("ui-lib/library");

const speed = () => {
	return "Speed: " + Math.floor(Vars.player.unit().speed());
};

ui.addTable("side", "speedometer", table => {
	table.label(speed);
});
