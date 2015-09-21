define("organik/sceneManager",["three" , "organik/atomManager"],function(THREE, AtomManager){
    var instance = null;

    function SceneManager(){
        if(instance !== null){
            throw new Error("Cannot instantiate more than one SceneManager, use SceneManager.getInstance()");
        } 
        
        this._initialize();
    }
    SceneManager.prototype = {
        _initialize: function(){
            // summary:
            // Initializes the singleton.
            this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( this.renderer.domElement );

			this.camera.position.z = 10;
            //this._createSceneContainer();
            this._render();
        },
        _render: function(){
                requestAnimationFrame(function(){
                   SceneManager.getInstance()._render();
                });
			    AtomManager.renderAtoms();
                this.renderer.render(this.scene, this.camera);
        },
        add: function(containerName, object){
            //console.log(eval(containerName))
            
            if(!this.scene.hasOwnProperty(containerName.toString())){
                // container undefined create it
                this.scene.add(this[containerName.toString()] = new THREE.Object3D());
            }
            this[containerName.toString()].add(object);
        },
        _createSceneContainer: function(){
            this.atomContainer = new THREE.Object3D();
            this.scene.add(this.atomContainer);
        }
       
    };
    SceneManager.getInstance = function(){
        // summary:
        // Gets an instance of the singleton. It is better to use 
        if(instance === null){
            instance = new SceneManager();
        }
        return instance;
    };


    return SceneManager.getInstance();
});