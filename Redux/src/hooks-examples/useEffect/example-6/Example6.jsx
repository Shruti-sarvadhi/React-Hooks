import { useState,useEffect } from 'react'



function Example6() {
  const [scrollY, setScrollY] = useState(window.scrollY);


  //track user's scroll position
  //clean up event listner when component unmount
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{"height":"200vh"}}>
      <h2 style={{"position":"fixed"}}>Scrolled: {scrollY}px</h2>
    </div>
  )
}

export default Example6
