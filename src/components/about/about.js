import React, { Component } from 'react'
import ReactStringReplace from "react-string-replace"
import { AppCtxStore } from "../../App.context"
export default class About extends Component {
    static contextType = AppCtxStore
    render() {
        var vocabulary = this.context.getVocabulary()
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>
                                {vocabulary.about_me}
                            </h2>
                            <p>
                                {
                                    ReactStringReplace(vocabulary.about_me_description, /#/g, (match, i) => (
                                        <br />
                                    ))
                                }
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>
                                        {vocabulary.contact_details}
                                    </h2>
                                    <p className="address">
                                        <span>Francesco Sorrentino</span><br />
                                        <span>148 SS 18 Tirrena Inferiore</span><br />
                                        <span>email@arm.com</span><br />
                                        <span>+39 3465738155</span><br />
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}