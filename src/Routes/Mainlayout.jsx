import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

function Children() {
    const [mainloading, setMainloading] = useState(true);
    useEffect(() => {
        setMainloading(true);
        return () => clearTimeout(timeoutId);
      }, []);
      const timeoutId = setTimeout(() => {
        setMainloading(false);
      }, 500);
  return (
    <>
    {mainloading? 
    <div className="preloader"><span className="loader" /></div>:"" }
    <Outlet />
    
    </>
  )
}
export default Children;