import React, { useState, useEffect } from 'react';
import ReadInputs from '../components/ReadInputs';

const Home: React.FC = () => {
  const [lecturaActual, setLecturaActual] = useState<number | string>(0);

  useEffect(() => {
    const fetchLectura = async () => {
      try {
        const response = await fetch('https://hfqmb43b-3001.brs.devtunnels.ms/lectura'); // Backend
        const data = await response.json();
        setLecturaActual(data.valor);
      } catch (error) {
        console.error('Error al obtener la lectura:', error);
      }
    };

    fetchLectura();
    const interval = setInterval(fetchLectura, 5000); // Actualiza cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return <ReadInputs value={lecturaActual} />;
};

export default Home;
