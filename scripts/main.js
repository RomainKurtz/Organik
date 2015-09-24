/* global requirejs */
requirejs(["three", "organik/atom", "organik/renderManager"], 
function(THREE, Atom , RenderManager) {
	for(var i = 0; i<50 ; i++){
		var atom = new Atom();
		atom.changePosition(new THREE.Vector3(Math.random()*10,Math.random()*10,Math.random()*1));
		atom.changeRotation(new THREE.Vector3(Math.random(),Math.random(),Math.random()));
	}
});
