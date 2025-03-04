import React from 'react';

function ChartPreview({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>
          {item.label}: {item.value} (Normalized: {item.normalized.toFixed(2)}%)
        </p>
      ))}
    </div>
  );
}

export default ChartPreview;