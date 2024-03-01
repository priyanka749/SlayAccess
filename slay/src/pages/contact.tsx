import React from 'react';
import HomeNavbar from './Navbar&Modals/HomeNavbar.tsx';

const Contact: React.FC<{ leftImageUrl: string; centerImageUrl: string; rightImageUrl: string }> = ({  }) => {
  return (
    <div>
      <HomeNavbar activePage={''} />

      <div className="container" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontWeight: 'bold' }}>Call for more information</h2>
    </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
        <img src="https://i.postimg.cc/N0Z7ZTS3/Conatct1.png" alt="Left image" style={{ width: '31%', objectFit: 'contain', marginLeft: '10%' }} />
        {/* <img src="https://i.postimg.cc/nhM90WR3/abouttwo.png" alt="Center image" style={{ width: '30%', objectFit: 'contain' }} /> */}
        <img src="https://i.postimg.cc/x88fHJTd/Contact2.png" alt="Right image" style={{ width: '31%', objectFit: 'contain',marginRight: '10%'}} />
      </div>
    </div>
  );
};

export default Contact;