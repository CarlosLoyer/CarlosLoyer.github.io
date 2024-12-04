import React from 'react';

interface ReadInputsProps {
  value: number | string; // Puedes ajustar el tipo según tus necesidades
}

const ReadInputs: React.FC<ReadInputsProps> = ({ value }) => {
  return (
    <section id="personal" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Lectura</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <p><b>Lectura Actual: </b></p>
          <p>{value}</p>
        </div>
      </div>
    </section>
  );
};

export default ReadInputs;
