import { useState, useDeferredValue } from "react";

const images = Array.from({ length: 20 }, (_, i) => `https://via.placeholder.com/100?text=${i + 1}`);

export default function Example4() {
  const [filter, setFilter] = useState("");
  const deferredFilter = useDeferredValue(filter);

  const filteredImages = images.filter((img, index) =>
    index.toString().includes(deferredFilter)
  );

  return (
    <div>
      <input type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Filter images..." />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredImages?.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}
