import React, { useState, useMemo } from 'react';
import ChartPreview from './ChartPreview';

function App() {
  const [dataPoints, setDataPoints] = useState([10, 20, 15]);

  const chartData = useMemo(() => {
    const max = Math.max(...dataPoints);
    return dataPoints.map((point, index) => ({
      label: `Point ${index + 1}`,
      value: point,
      normalized: (point / max) * 100,
    }));
  }, [dataPoints]);

  return (
    <div>
      <h1>Chart Data</h1>
      <button onClick={() => setDataPoints([...dataPoints, Math.random() * 30])}>
        Add Point
      </button>
      <ChartPreview data={chartData} />
    </div>
  );
}

export default App;