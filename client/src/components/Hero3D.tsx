import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const emotionEmojis = [
      { emoji: "😊", color: 0xffd700, label: "Happy" },
      { emoji: "😢", color: 0x4169e1, label: "Sad" },
      { emoji: "😠", color: 0xff4444, label: "Angry" },
      { emoji: "😮", color: 0xda70d6, label: "Surprised" },
      { emoji: "😐", color: 0x808080, label: "Neutral" },
    ];

    const spheres: THREE.Mesh[] = [];
    emotionEmojis.forEach((item, index) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.3,
        shininess: 100,
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      const angle = (index / emotionEmojis.length) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * 5;
      sphere.position.y = Math.sin(angle) * 2;
      sphere.position.z = -8 + Math.sin(angle) * 3;
      
      sphere.userData = { 
        originalY: sphere.position.y,
        offset: index * 0.5,
      };
      
      scene.add(sphere);
      spheres.push(sphere);
    });

    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const edges = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({ 
      color: 0x10b981,
      linewidth: 2,
    });
    const cube = new THREE.LineSegments(edges, cubeMaterial);
    cube.position.z = -10;
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 1, 100);
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      cube.rotation.x += 0.003;
      cube.rotation.y += 0.005;

      spheres.forEach((sphere) => {
        const time = Date.now() * 0.001;
        sphere.position.y = 
          sphere.userData.originalY + 
          Math.sin(time + sphere.userData.offset) * 0.5;
        sphere.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
