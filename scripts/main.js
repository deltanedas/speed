var last = 0;

const speed = () => {
	const speed = Vars.player.velocity().len2();
	const avg = Mathf.lerp(speed, last, 1/60);
	last = speed;
	return "Speed: " + Math.floor(avg);
};

// Prevent adding multiple speedometers
if (!this.global.speedometer) {
	this.global.speedometer = true;

	Events.on(EventType.ClientLoadEvent, run(e => {
		const speedometer = new Table();
		speedometer.setFillParent(true);
		speedometer.label(prov(speed));
		speedometer.visible(boolp(() => Vars.state.state == GameState.State.playing));
		speedometer.defaults().width(80).height(50);
		speedometer.margin(4).top().left();
		speedometer.marginTop(200).marginLeft(20);

		Core.scene.add(speedometer);
	}));
}
