import React, { Component } from 'react'
import { AppCtxStore } from "../../App.context"
export default class Testimonials extends Component {
  static contextType = AppCtxStore
  render() {
    var vocabulary = this.context.getVocabulary()
    return (
      <React.Fragment>
      <section id="testimonials" className="no-print">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>{vocabulary.client_testimonials}</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                {
                  vocabulary.testimonials_elements.map((e, k)=>(
                    <li key={"testimonials-"+k}>
                      <blockquote>
                        <p>
                          {e.description}
                        </p>
                        <cite>
                          {e.from}
                        </cite>
                      </blockquote>
                    </li>
                  ))
                }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </React.Fragment>
    );
  }
}