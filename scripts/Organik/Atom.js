define("organik/atom", ["three"],
    function(THREE) {
        // public method
        function atom() {

            this.init = function(){
                var tmp = new THREE.Vector3(0, 1, 2);
                console.log(tmp)
            };
            
            this.init();
        }
        return atom;
 
   })
