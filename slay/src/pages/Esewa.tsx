import React from 'react';
import HomeNavbar from './Navbar&Modals/HomeNavbar.tsx';

const Esewa: React.FC<{ leftImageUrl: string; centerImageUrl: string; rightImageUrl: string }> = ({  }) => {
  return (
    <div>
      <HomeNavbar activePage={''} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
       
        { <img src="https://i.postimg.cc/NGPmd664/eswea.jpg" alt="Center image" style={{ width: '50%', objectFit: 'contain' }} /> }
    
      </div>
    </div>
  );
};

export default Esewa;