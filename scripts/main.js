const ui = require("ui-lib/library");

var last = 0, lastPos = new Vec2();

const speed = () => {
	const pos = Tmp.v1.set(Vars.player);

	const speed = pos.sub(lastPos).len();
	const avg = Mathf.lerp(speed, last, Time.delta);
	lastPos.set(Vars.player);
	last = speed;
	return "Speed: " + Math.floor(avg);
};

ui.addTable("side", "speedometer", table => {
	table.label(speed);
});
