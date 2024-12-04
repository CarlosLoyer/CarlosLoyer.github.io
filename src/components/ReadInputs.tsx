import React from 'react';
import { Card, Typography } from 'antd';
import CherryTomato from './infoSections/CherryTomato';

const { Title, Text } = Typography;

interface ReadInputsProps {
  value: number | string; // Puedes ajustar el tipo según tus necesidades
}

const ReadInputs: React.FC<ReadInputsProps> = ({ value }) => {
  return (
    <section id="personal" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Lectura</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <section style={{ padding: '20px' }}>
          <Card style={{ marginBottom: '20px' }}>
            <Title level={4}>Lectura Actual: </Title>
            <ul>
              <li><Text strong>{value}</Text></li>
            </ul>
          </Card>
        </section>
        <div className="flex items-center mb-4">
          <h3 className="text-3xl font-bold mb-4 text-blue-400">Tomate Cherry</h3>
        </div>
        <CherryTomato />
      </div>
    </section>
  );
};

export default ReadInputs;
