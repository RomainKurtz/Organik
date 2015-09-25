/* global requirejs */
requirejs(["three", "organik/atom", "organik/cameraManager"], 
function(THREE, Atom , CameraManager) {
	CameraManager.changeCameraPosition(new THREE.Vector3(-125,5,2.5));
	for(var i = 0; i<100 ; i++){
		var atom = new Atom();
		atom.setRandomPosition();
		//var link = new Link();
		//atom.changeRotation(new THREE.Vector3(Math.random(),Math.random(),Math.random()));
	}
});
