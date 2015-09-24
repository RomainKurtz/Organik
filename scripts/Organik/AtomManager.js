define("organik/atomManager",
["three", "organik/atom","organik/renderManager"],
function(THREE, Atom, RenderManager){
    var instance = null;

    function AtomManager(){
        if(instance !== null){
            throw new Error("Cannot instantiate more than one AtomManager, use AtomManager.getInstance()");
        } 
        
        this._initialize();
    }
    AtomManager.prototype = {
        _initialize: function(){
            // summary:
            // Initializes the singleton.
            this.atomList = [];
            this.worldLimites = {
                max : new THREE.Vector3(1,1,1),
                min : new THREE.Vector3(-1,-1,-1)
            }
            RenderManager.addOneCallbackToRenderer(this.renderAtoms,this);
        },
        addAtom : function(atom){
            this.atomList.push(atom);
        },
        renderAtoms : function(iMe){
            for(var i=0;i<iMe.atomList.length;i++){
                //call the render methode of the atom particle
                 iMe.atomList[i].renderTick();
            }
        },
        changeWorldLimits : function(min, max){
            this.worldLimites.min = min;
            this.worldLimites.max = max;
        },
    };
    AtomManager.getInstance = function(){
        // summary:
        // Gets an instance of the singleton. It is better to use 
        if(instance === null){
            instance = new AtomManager();
        }
        return instance;
    };


    return AtomManager.getInstance();
});