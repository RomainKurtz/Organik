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
                this.direction = true;
                this.objectAvatar.rotation.x = Math.random();
                this.objectAvatar.rotation.y = Math.random();
                
                AtomManager.addAtom(this);
            },
            renderTick : function(){
               this.behaviourUpdate();
            },
            changePosition : function(newPos){
                this.objectAvatar.position.set(newPos.x,newPos.y,newPos.z);
            },
            behaviourUpdate : function(){
                
                this.objectAvatar.rotation.x += 0.1;
                this.objectAvatar.rotation.y += 0.05;
                
                // goings and comings
                if(this.direction){
                    this.objectAvatar.position.z +=0.1;
                }
                else{
                    this.objectAvatar.position.z -=0.1;
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
                //var color = 0x00ff00;
                var geometry = new THREE.BoxGeometry( 1, 1, 1 );
                var material = new THREE.MeshBasicMaterial( { color: color } );
                this.objectAvatar = new THREE.Mesh( geometry, material );
                SceneManager.add( 'atomContainer', this.objectAvatar );
            }
            
        }
        return Atom;
   })
