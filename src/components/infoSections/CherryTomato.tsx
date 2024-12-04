import React from 'react';
import { Card, Divider, Typography } from 'antd';

const { Title, Text } = Typography;

const TomatoCherryCare = () => (
  <section style={{ padding: '20px' }}>
    <Card style={{ marginBottom: '20px' }}>
      <Title level={4}>Agua</Title>
      <ul>
        <li><Text strong>Crecimiento:</Text> 60 - 80%</li>
        <li><Text strong>Fruta:</Text> 40 - 60%</li>
      </ul>
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <Title level={4}>pH del Suelo</Title>
      <Text>6.0 - 6.8</Text>
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <Title level={4}>Exposición al Sol</Title>
      <Text>6 - 8 horas al día</Text>
    </Card>

    <Divider />

    <Card style={{ marginBottom: '20px' }}>
      <Title level={4}>Abonos</Title>
      <Title level={5}>Nitrógeno</Title>
      <ul>
        <li><Text strong>Para:</Text> Hojas</li>
        <li><Text strong>Cuándo:</Text> Durante el crecimiento</li>
        <li><Text strong>Fuente:</Text> Compost, urea, excremento seco</li>
      </ul>

      <Divider />
      <Title level={5}>Fósforo</Title>
      <ul>
        <li><Text strong>Para:</Text> Raíces y floración</li>
        <li><Text strong>Cuándo:</Text> Al inicio del cultivo y durante la floración</li>
        <li><Text strong>Fuente:</Text> Harina de hueso, roca fosfórica</li>
      </ul>
      
      <Divider />
      <Title level={5}>Potasio</Title>
      <ul>
        <li><Text strong>Para:</Text> Fruto y resistencia</li>
        <li><Text strong>Cuándo:</Text> Durante la fructificación</li>
        <li><Text strong>Fuente:</Text> Ceniza de madera, sulfato de potasio</li>
      </ul>
    </Card>
  </section>
);

export default TomatoCherryCare;
