const ui = require("ui-lib/library");

const speed = () => {
	return "Speed: " + Math.floor(Vars.player.unit().realSpeed());
};

ui.addTable("side", "speedometer", table => {
	table.label(speed);
});
