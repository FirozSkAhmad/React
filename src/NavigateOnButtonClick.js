import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateOnButtonClick() {
  const navigate = useNavigate();
  function navigateTo(url) {
    navigate(url);
  }
  return (
    <>
      {/* <button onClick={()=>navigate('/about')}>Go to About</button>
      <button onClick={()=>navigate('/filter')}>Go to Filter</button> */}
      <button onClick={() => navigateTo('/about')}>Go to About</button>
      <button onClick={() => navigateTo('/filter')}>Go to Filter</button>
    </>
  );
}

export default NavigateOnButtonClick;
