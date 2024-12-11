import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Line, Html } from '@react-three/drei';
import { 
  FaVideo, FaUsers, FaChartLine, FaCode, FaShoppingCart,
  FaPhotoVideo, FaCamera, FaPencilAlt, FaRobot,
  FaInstagram, FaTiktok, FaFacebook, FaYoutube,
  FaGlobe, FaMobile
} from 'react-icons/fa';

const Services = () => {
  const [rotation, setRotation] = useState(0);

  const services = [
    { 
      name: "Content Creation", 
      icon: <FaVideo />, 
      subServices: [
        { name: "Video", icon: <FaPhotoVideo /> },
        { name: "Photo", icon: <FaCamera /> },
        { name: "Graphics", icon: <FaPencilAlt /> },
        { name: "AI Content", icon: <FaRobot /> }
      ]
    },
    { 
      name: "Marketing", 
      icon: <FaUsers />, 
      subServices: [
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "TikTok", icon: <FaTiktok /> },
        { name: "Facebook", icon: <FaFacebook /> },
        { name: "YouTube", icon: <FaYoutube /> }
      ]
    },
    { 
      name: "Management & Strategy", 
      icon: <FaChartLine />, 
      subServices: [] 
    },
    { 
      name: "Development", 
      icon: <FaCode />, 
      subServices: [
        { name: "Websites", icon: <FaGlobe /> },
        { name: "Applications", icon: <FaMobile /> }
      ] 
    },
    { 
      name: "Sales Products", 
      icon: <FaShoppingCart />, 
      subServices: [] 
    }
  ];

  const handleServiceClick = () => {
    setRotation(rotation + Math.PI / 4);
  };

  return (
    <Canvas shadows style={{ height: '100vh' }}>
      <group rotation={[-Math.PI / 8, 0, 0]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />

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
          <Text
            position={[0, 3, -0.2]}
            fontSize={1}
            color="black"
            maxWidth={10}
            castShadow
            textAlign="center"
            strokeWidth={0.6}
            strokeColor="black"
          >
            ELgarage Agency
          </Text>
        </group>

        {services.map((service, index) => {
          const xPosition = (index - (services.length - 1) / 2) * 2.7;

          return (
            <React.Fragment key={index}>
              <group>

                <Html position={[xPosition - 0.2, -0.1, 0]}>
                  <div style={{ fontSize: '1.8em', color: 'lightblue' }}>
                    {service.icon}
                  </div>
                </Html>

                <Text
                  position={[xPosition, -0.7, 0]}
                  fontSize={0.3}
                  color="lightblue"
                  maxWidth={3}
                  castShadow
                  textAlign="center"
                  rotation={[rotation, 0, 0]}
                >
                  {service.name}
                </Text>

                <Text
                  position={[xPosition, -0.8, -0.1]}
                  fontSize={0.3}
                  color="black"
                  maxWidth={3}
                  castShadow
                  textAlign="center"
                  strokeWidth={0.5}
                  strokeColor="black"
                  rotation={[rotation, 0, 0]}
                >
                  {service.name}
                </Text>

                <Line
                  points={[[0, 2.3, 0], [xPosition, 0, 0]]}
                  color="lightblue"
                  lineWidth={1}
                />

                {service.subServices &&
                  service.subServices.map((subService, subIndex) => {
                    const yPosition = -1.5 - subIndex * 0.5;

                    return (
                      <React.Fragment key={subIndex}>
                        <Html position={[xPosition - 0.9, yPosition + 0.1, 0]}>
                          <div style={{ fontSize: '1.2em', color: 'white' }}>
                            {subService.icon}
                          </div>
                        </Html>

                        <Text
                          position={[xPosition, yPosition, 0]}
                          fontSize={0.2}
                          color="white"
                          maxWidth={3}
                          castShadow
                          textAlign="center"
                        >
                          {subService.name}
                        </Text>

                        <Text
                          position={[xPosition, yPosition, -0.1]}
                          fontSize={0.2}
                          color="black"
                          maxWidth={3}
                          castShadow
                          textAlign="center"
                          strokeWidth={0.3}
                          strokeColor="black"
                        >
                          {subService.name}
                        </Text>

                        <Line
                          points={[
                            [xPosition, -0.8, 0],
                            [xPosition, yPosition + 0.1, 0]
                          ]}
                          color="white"
                          lineWidth={0.3}
                        />
                      </React.Fragment>
                    );
                  })}
              </group>
            </React.Fragment>
          );
        })}
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Services;
