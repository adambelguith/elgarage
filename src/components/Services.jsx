import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Line, Html } from '@react-three/drei';
import { FaVideo, FaUsers, FaChartLine, FaCode, FaShoppingCart } from 'react-icons/fa'; // Importing icons

const Services = () => {
  const [rotation, setRotation] = useState(0);
  const services = [
    { name: "Content Creation", icon: <FaVideo /> },
    { name: "Marketing", icon: <FaUsers /> },
    { name: "Management & Strategy", icon: <FaChartLine /> },
    { name: "Development", icon: <FaCode /> },
    { name: "Sales Products", icon: <FaShoppingCart /> }
  ];

  const handleServiceClick = () => {
    setRotation(rotation + Math.PI / 4); // Rotate 45 degrees on click
  };

  return (
    <Canvas shadows style={{ height: '100vh' }}>
      <group rotation={[-Math.PI / 8, 0, 0]}> {/* Rotate entire group by -20 degrees on X-axis */}
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />

      {/* Title: ELgarage Agency */}
      <group>
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="white"
          maxWidth={10}
          castShadow
          textAlign="center"       
        >
          ELgarage Agency
        </Text>

        {/* Add background shadow effect by creating a duplicate text */}
        <Text
          position={[0, 3, -0.2]} // Slightly behind to create shadow effect
          fontSize={1}
          color="black" // Shadow color
          maxWidth={10}
          castShadow
          textAlign="center"
          strokeWidth={0.6} // Adding stroke for 3D depth effect
          strokeColor="black"
        >
          ELgarage Agency
        </Text>
      </group>

      {/* Category Services */}
      {services.map((service, index) => {
        const xPosition = (index - (services.length - 1) / 2) * 3; // Minimize spacing
        return (
          <React.Fragment key={index}>
            <group>
              {/* 3D Service Text */}
              <Html position={[xPosition- 0.2, -0.1, 0]}>
                <div 
                  style={{ fontSize: '1.8em', color: 'lightblue' }}
                  onClick={handleServiceClick} // Rotate on click
                >
                  {service.icon}
                </div>
              </Html>
              <Text
                position={[xPosition, -0.7, 0]}
                fontSize={0.3}
                color="lightblue"
                maxWidth={4}
                castShadow
                textAlign="center"
                rotation={[rotation, 0, 0]} // Apply rotation
                onClick={handleServiceClick} // Rotate on click
              >
                {service.name}
              </Text>

              

              {/* Add background shadow effect by creating a duplicate text */}
              <Text
                position={[xPosition, -0.8, -0.1]} // Slightly behind to create shadow effect
                fontSize={0.3}
                color="black" // Shadow color
                maxWidth={4}
                castShadow
                textAlign="center"
                strokeWidth={0.5} // Adding stroke for 3D effect
                strokeColor="black" // Stroke shadow for enhanced depth
                rotation={[rotation, 0, 0]} // Apply rotation
                onClick={handleServiceClick} // Rotate on click
              >
                {service.name}
              </Text>

              <Line
                points={[[0, 2.3, 0], [xPosition, 0, 0]]}
                color="lightblue"
                lineWidth={1}
              />
            </group>
          </React.Fragment>
        );
      })}
      </group>
      {/* Add OrbitControls for interactivity */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Services;
