import React from 'react';
import HomeNavbar from './Navbar&Modals/HomeNavbar.tsx';

const ImageContainer: React.FC<{ leftImageUrl: string; centerImageUrl: string; rightImageUrl: string }> = ({  }) => {
  return (
    <div>
      <HomeNavbar activePage={''} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
        <img src="https://i.postimg.cc/Kz8NNfTF/aboutone.png" alt="Left image" style={{ width: '31%', objectFit: 'contain', marginLeft: '10%' }} />
        {/* <img src="https://i.postimg.cc/nhM90WR3/abouttwo.png" alt="Center image" style={{ width: '30%', objectFit: 'contain' }} /> */}
        <img src="https://i.postimg.cc/tRZXvjpZ/abouthree.png" alt="Right image" style={{ width: '31%', objectFit: 'contain',marginRight: '10%'}} />
      </div>
    </div>
  );
};

export default ImageContainer;