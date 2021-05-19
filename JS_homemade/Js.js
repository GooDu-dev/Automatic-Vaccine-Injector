
$(window).scroll(function() {
    if ($(window).scrollTop() < 75) {
        $('#navBar').css("opacity", 0.3);
    }
    else {
        $('#navBar').css("opacity", 1);
    }
});

$(document).ready(function(){
    $('#navBar').live("mouseover", function () {
            $(this).css("opacity", 1);
            });

    $('#navBar').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { // this here
            $(this).css("opacity", 0.3);
        }
    });

})

//BLENDER
let scene, camera, renderer;
    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd);
        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
        camera.rotation.y = 45/180*Math.PI;
        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;
        controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);
        hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);
        directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        light = new THREE.PointLight(0xc4c4c4,10);
        light.position.set(0,300,500);
        scene.add(light);
        light2 = new THREE.PointLight(0xc4c4c4,10);
        light2.position.set(500,100,0);
        scene.add(light2);
        light3 = new THREE.PointLight(0xc4c4c4,10);
        light3.position.set(0,100,-500);
        scene.add(light3);
        light4 = new THREE.PointLight(0xc4c4c4,10);
        light4.position.set(-500,300,500);
        scene.add(light4);
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
        let loader = new THREE.GLTFLoader();
        loader.load('scene.gltf', function(gltf){
            car = gltf.scene.children[0];
            car.scale.set(0.5,0.5,0.5);
            scene.add(gltf.scene);
            animate();
        });
    }
        function animate() {
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
        }
    init();
    
    $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.hideme').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'opacity':'1'},1500);
                          
                  }
                  
              }); 
          
          });
          
      });

      