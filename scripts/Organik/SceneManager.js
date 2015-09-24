define("organik/sceneManager",["three", "organik/cameraManager", "organik/renderManager"],
function(THREE, CameraManager, RenderManager){
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
            CameraManager.changeCameraPosition(new THREE.Vector3(5,5,10));
            RenderManager.setRendererScene(this.scene);
            
        },
        add: function(containerName, object){
            var hasContainer = false;
            for(var i=0; i< this.scene.children.length ; i++){  
                if(this.scene.children[i].name === containerName){
                    this.scene.children[i].add(object);
                    hasContainer = true;
                    break; 
                }
            }
            if(!hasContainer){
                // if container undefined then create it
                var newContainer = new THREE.Object3D();
                newContainer.name = containerName;
                newContainer.add(object);
                this.scene.add(newContainer);
            }
        },
        _createSceneContainer: function(){
            this.atomContainer = new THREE.Object3D();
            this.scene.add(this.atomContainer);
        },
       
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