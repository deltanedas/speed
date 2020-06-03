var ui = require("ui-lib/library");

var last = 0;

const speed = () => {
	const speed = Vars.player.velocity().len2();
	const avg = Mathf.lerp(speed, last, 1/60);
	last = speed;
	return "Speed: " + Math.floor(avg);
};

ui.addTable("side", "speedometer", table => {
	table.label(prov(speed));
});
