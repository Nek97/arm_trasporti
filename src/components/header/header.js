import React, { Component } from 'react'
import ReactStringReplace from "react-string-replace"
import { AppCtxStore } from "../../App.context"
export default class Header extends Component {
  static contextType = AppCtxStore
  render() {
    var vocabulary = this.context.getVocabulary()
    var languages = this.context.getLanguages()
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap" className="no-print">
            {/* eslint-disable-next-line*/}
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">{vocabulary.show_navigation}</a>
            {/* eslint-disable-next-line*/}
            <a className="mobile-btn" href="#" title="Hide navigation">{vocabulary.hide_navigation}</a>
            <ul id="nav" className="nav no-print">
              {/* eslint-disable-next-line*/}
              <li className="current"><a className="smoothscroll" href="#home">{vocabulary.home}</a></li>
              {/* eslint-disable-next-line*/}
              <li><a className="smoothscroll" href="#about">{vocabulary.about}</a></li>
              <li className="no-print">
                {/* eslint-disable-next-line*/}
                <a>
                  <select onChange={(event) => { this.context.setLanguage(event.target.value) }} className="language_select">
                    {
                      languages.map((language, k) => (
                        <option value={language.language_code} key={"language-" + k} className="language_select">{language.language_info}</option>
                      ))
                    }
                  </select>
                </a>
              </li>

            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{vocabulary.homeTitle}</h1>
              <h3>
                {
                  ReactStringReplace(vocabulary.homeDescription, /@(\w+)/g, (match, i) => (
                    <span key={match + i}>{match}</span>
                  ))
                }
              </h3>
              <hr />
              <ul className="social no-print">
                <li><a href="tel/+393465738155"><i className="fa fa-phone" /></a></li>
                <li><a href="https://wa.me/+393465738155"><i className="fa fa-whatsapp" /></a></li>
                <li><a href="mailto:email@arm.com"><i className="fa fa-envelope" /></a></li>
                <li><a href="geo:40.59359392320874, 14.982884726891033"><i className="fa fa-map-marker" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown no-print">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}