import React, { Component } from 'react';
import { DropdownMenu, DropdownToggle, Nav, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/shipper.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/img/avatars/6.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  
  handleGetTime = () => {
    var tempDate = new Date();
    if(tempDate.getHours() >= 0 && tempDate.getHours() <= 11){
      return "Good Morning" + ', ';
    }else if(tempDate.getHours() > 11 && tempDate.getHours() <= 17){
      return "Good Afternoon" + ', ';
    }else if(tempDate.getHours() > 17 && tempDate.getHours() <= 22){
      return "Good Evening" + ', ';
    }else{
      return "Good Night" + ', ';
    }
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown>
          <DropdownToggle nav>
              { /*<img src={avatar} className="img-avatar" alt="avatar-user" /> */ }
              <span className="mr-3">
              <strong className="hidden-name-xs">{this.handleGetTime()} <Label style={{color:'#fe5757'}}>Shipper User</Label></strong> 
              </span><span>
                <i className="fa fa-user-circle-o" aria-hidden="true" style={{fontSize:"0.8em", fontWeight:"normal"}}></i>
              </span>
            </DropdownToggle>
            {/* <DropdownMenu right style={{ right: 'auto', height: '400px' }}>
              AppHeaderDropdown
            </DropdownMenu> */}
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/* <AppAsideToggler className="d-lg-none" mobile /> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
