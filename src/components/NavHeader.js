import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import HamburgerMenu from './HamburgerMenu';

const NavHeader = () => {
  const path = useLocation().pathname

  return (
    <div id="navHeader">
      {/*<HamburgerMenu />*/}
      <div id="mainHeader">
        THE ANTI-EVICTION MAPPING PROJECT
      </div>
      <div id="mapLinks">
        <div id="housingProtectionLink" className={`link-cnr ${path === '/tenant-protections' ? 'active' : ''}`}>
          <Link to="/tenant-protections"> COVID-19    GLOBAL    HOUSING    PROTECTION<br />
            LEGISLATION & HOUSING JUSTICE ACTION</Link>
        </div>
        <div id="oralHxtoriesLink" className={`link-cnr ${path === '/eviction-stories' ? 'active' : ''}`}>
          <Link to="/eviction-stories">COVID-19   ORAL   HXSTORIES   OF   TENANT <br />
            RESISTANCE & EVICTION INFORMATION</Link>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
