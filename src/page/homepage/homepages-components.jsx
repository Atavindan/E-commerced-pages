import React from 'react';
import './homepages-components.scss';
import Directory from '../../components/directory/directory.compound'
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
    <Directory />
    </div>
  </div>
)

export default HomePage;