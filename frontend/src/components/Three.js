import React,{useEffect,useRef} from 'react'
import * as THREE  from 'three'
//import  OrbitControls  from "three-orbitcontrols"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {TextGeometry,FontLoader} from 'three'
function Three() {
    const ref=useRef()
    useEffect(()=>{
        const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			const renderer = new THREE.WebGLRenderer({antialias:true});
			renderer.setSize( window.innerWidth, window.innerHeight );
			ref.current.appendChild( renderer.domElement );
			 var controls =new OrbitControls(camera,renderer.domElement)
			 
			controls.rotateSpeed=0.3;
			controls.zoomSpeed=0.9;
			 controls.minDistance=50;
			 controls.maxDistance=100;
			let materialArray=[]
            let front= new THREE.TextureLoader().load("serenity_ft.jpg")
			let back= new THREE.TextureLoader().load("serenity_bk.jpg")
			let up= new THREE.TextureLoader().load("serenity_up.jpg")
			let down= new THREE.TextureLoader().load("serenity_dn.jpg")
			let left= new THREE.TextureLoader().load("serenity_lf.jpg")
			let right= new THREE.TextureLoader().load("serenity_rt.jpg")

            materialArray.push(new THREE.MeshBasicMaterial({map:front}))
			materialArray.push(new THREE.MeshBasicMaterial({map:back}))
			materialArray.push(new THREE.MeshBasicMaterial({map:up}))
			materialArray.push(new THREE.MeshBasicMaterial({map:down}))
			materialArray.push(new THREE.MeshBasicMaterial({map:right}))
			materialArray.push(new THREE.MeshBasicMaterial({map:left}))
			for(let i=0;i<6;i++){
				materialArray[i].side=  THREE.BackSide;
			}

			const geometry = new THREE.BoxGeometry(1000,1000,1000);
			const material = new THREE.MeshBasicMaterial( { color:"red" } );
			const cube = new THREE.Mesh( geometry, materialArray );
			//cube.scale.set(2,2,2)
           
			scene.add( cube );
           
			camera.position.z = 5;
			function animate() {
				renderer.render( scene, camera );
				requestAnimationFrame( animate );

				//cube.rotation.x += 0.01;
				//cube.rotation.y += 0.01;

				
			};

			animate();
    })
    return (
        <div ref={ref}>
        </div>
    )
}

export default Three
