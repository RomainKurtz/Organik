/* global requirejs */
requirejs(["three", "organik/atom","organik/atomManager" , "organik/sceneManager"], 
function(THREE, Atom, AtomManager, SceneManager ) {
			
    		//AtomManager.AtomsGenerator(500);
			for(var i = -2; i<3 ; i+=2){
				for(var j = -2; j<3 ; j+=2){
					var atom = new Atom();
					atom.changePosition(new THREE.Vector3(i,j,Math.random()*10));
				}
			}
});
