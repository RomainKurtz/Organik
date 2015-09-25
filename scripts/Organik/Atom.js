define("organik/atom", ["three","organik/atomManager", "organik/sceneManager"],
    function(THREE, AtomManager, SceneManager) {
        // start method
        function Atom() {
            this._initialize();
        }
        // public method
        Atom.prototype = {
            _initialize : function(){
                // define variable
                this.objectAvatar = null;
                this.createAvatar();
                this.direction = Math.floor(Math.random()*(1-0+1)); //Random True or False
                this.velocity = Math.random()/5;
                
                AtomManager.addAtom(this);
            },
            renderTick : function(){
               this.behaviourUpdate();
            },
            changePosition : function(newPos){
                this.objectAvatar.position.set(newPos.x,newPos.y,newPos.z);
            },
            changeRotation : function(newOri){
                this.objectAvatar.rotation.set(newOri.x,newOri.y,newOri.z);
            },
            changeVelocity : function(newVelocity){
                this.velocity = newVelocity;
            },
            behaviourUpdate : function(){
                
                // this.objectAvatar.rotation.x += this.velocity;
                // this.objectAvatar.rotation.y += this.velocity/2;
                
                // goings and comings
                if(this.direction){
                    this.objectAvatar.position.z +=this.velocity;
                }
                else{
                    this.objectAvatar.position.z -=this.velocity;
                }
                if ( this.objectAvatar.position.z < AtomManager.worldLimites.min.z){
                    this.direction = true;
                }
                if ( this.objectAvatar.position.z > AtomManager.worldLimites.max.z){
                    this.direction = false;
                }
            },
            createAvatar : function(){
                var color = '#'+Math.floor(Math.random()*16777215).toString(16);
                // color = 0x00ff00;
                var geometry = new THREE.SphereGeometry( 0.5, 0.5, 0.5 );
                var material = new THREE.MeshBasicMaterial( {/*wireframe:true,*/ color: color } );
                this.objectAvatar = new THREE.Mesh( geometry, material );
                SceneManager.add( AtomManager.containerAtomsName , this.objectAvatar );
            },
            setRandomPosition :function(){
                var axis = ['x','y','z'];
                var newPos = new THREE.Vector3();
                for(var i = 0 ; i< axis.length ; i++){
                    newPos[axis[i]] = Math.random()*(AtomManager.worldLimites.max[axis[i]]-AtomManager.worldLimites.min[axis[i]]+1)+AtomManager.worldLimites.min[axis[i]];
                }
                this.objectAvatar.position.copy(newPos) ;
            }
        }
        return Atom;
   })
