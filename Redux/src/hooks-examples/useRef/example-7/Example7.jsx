import React, { useRef } from 'react';

function Example7() {
  const divRef = useRef(null);

  const scrollToTop = () => {
    divRef.current.scrollTop = 0;
  };

  return (
    <div>
      <div 
        ref={divRef}
        style={{ height: '500px' ,width:"100vw", overflow: 'auto' }}
      >
        <div style={{ height: '1000px' }}>
          Scroll me!
        </div>
      </div>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}

export default Example7;