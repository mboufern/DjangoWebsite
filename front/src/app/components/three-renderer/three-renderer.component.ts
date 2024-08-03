// src/app/three-renderer/three-renderer.component.ts
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  standalone: true,
  selector: 'app-three-renderer',
  templateUrl: './three-renderer.component.html',
  styleUrls: ['./three-renderer.component.scss']
})
export class ThreeRendererComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  @Input() textureUrl: string = '';
  @Input() width: number = 1;
  @Input() height: number = 1;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private defaultTextureUrl: string = 'assets/new2.png';
  private plane!: THREE.Mesh;
  private controls!: OrbitControls;

  @Input() welcome: boolean = true;

  cursorX = 0;
  cursorY = 0;

  constructor() {}

  ngOnInit(): void {
    this.initThreeJS();
  }

  private initThreeJS(): void {
    // Create the scene
    this.scene = new THREE.Scene();

    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(18, this.canvasContainer.nativeElement.offsetWidth / this.canvasContainer.nativeElement.offsetHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Set up the renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.canvasContainer.nativeElement.offsetWidth, this.canvasContainer.nativeElement.offsetHeight);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);
    
    //controller
    if(this.welcome)
    {
      console.log(this.canvasContainer.nativeElement.offsetWidth/2000);
      this.camera.position.x = -(this.canvasContainer.nativeElement.offsetWidth / 2000);
    }
    else
    {
      this.camera.position.x = 0;
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // Restrict controls to only rotate around the Y-axis
      this.controls.enableRotate = false;
      this.controls.enablePan = false;
      this.controls.enableZoom = false;
      // this.controls.reset();
    }

    document.addEventListener('mousemove', (event) => {
      // Normalize cursor position to [-1, 1]
      this.cursorX = (event.clientX / window.innerWidth) * 2 - 1;
      this.cursorY = (event.clientY / window.innerHeight) * 2 - 1;
    });

    //shadows
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    //light
    const globalLight = new THREE.AmbientLight(0xffffff, 2.5)
    this.scene.add(globalLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2440;
    directionalLight.shadow.mapSize.height = 2440;
    this.scene.add(directionalLight);
    
    
    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const textureToLoad = this.textureUrl || this.defaultTextureUrl;

    textureLoader.load(textureToLoad, (texture) => {
      const geometry = new THREE.BoxGeometry(this.width, this.height, 0.04);
      const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4 });
      this.cube = new THREE.Mesh(geometry, material);
      this.cube.castShadow = true;
      this.scene.add(this.cube);

      this.renderer.render(this.scene, this.camera);
      this.animate();
    });

    const geometry = new THREE.BoxGeometry(100, 100, 0.02);
    const material = new THREE.MeshStandardMaterial({ color: 0xFFEBD5, roughness: 1 });
    this.plane = new THREE.Mesh(geometry, material);
    this.plane.position.z = -0.06;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);

  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    const rotationSpeed = 0.1; // Adjust for desired sensitivity
    this.cube.rotation.y = this.cursorX * Math.PI * rotationSpeed;
    this.plane.rotation.y = this.cursorX * Math.PI * rotationSpeed;

    this.cube.rotation.x = this.cursorY * Math.PI * rotationSpeed;
    this.plane.rotation.x = this.cursorY * Math.PI * rotationSpeed;
    // this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }
}
