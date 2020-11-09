const ui = require("ui-lib/library");

const speed = () => {
	const speed = Vars.player.unit().vel.len();
	return "Speed: " + Math.floor(speed);
};

ui.addTable("side", "speedometer", table => {
	table.label(speed);
});
