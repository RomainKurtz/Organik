/* global requirejs */
requirejs(["three", "Organik/Atom", "Organik/CameraManager"], 
function(THREE, Atom , CameraManager) {
	CameraManager.changeCameraPosition(new THREE.Vector3(-125,5,2.5));
	for(var i = 0; i<1000 ; i++){
		var atom = new Atom();
		atom.setRandomPosition();
		//var link = new Link();
		//atom.changeRotation(new THREE.Vector3(Math.random(),Math.random(),Math.random()));
	}
});
