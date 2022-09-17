import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="no-print">
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links no-print">
                <li><a href="tel/+393465738155"><i className="fa fa-phone" /></a></li>
                <li><a href="https://wa.me/+393465738155"><i className="fa fa-whatsapp" /></a></li>
                <li><a href="mailto:email@arm.com"><i className="fa fa-envelope" /></a></li>
                <li><a href="geo:40.59359392320874, 14.982884726891033"><i className="fa fa-map-marker" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2022 ARM Trasporti</li>
              </ul>
            </div>
            <div id="go-top" className="no-print"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}