import React from "react";
import "../about/About.scss";
const About = () => {
  return (
    <div>
      <section>
        <div className="about">
          <div className="container py-6">
            <div className="row">
              <div className="about__border col-xl-2"></div>
              <div className="about__title col-xl-6">
                <h6 className="text-primary text-uppercase letter-spacing-5 mb-3">
                  ABOUT US
                </h6>
                <h2 className="display-3 font-weight-bold mb-5">
                  We are Varkala{" "}
                </h2>
                <p className="text-lg text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections
                </p>
              </div>
            </div>
            <div className="about__under ">
              <div className="row ">
                <div className="about__border col-xl-2"></div>
                <div className="about__title col-xl-6">
                  <h6 className="text-primary text-uppercase letter-spacing-5 mb-3">
                  THE OLD TIMES
                  </h6>
                  <h2 className="display-3 font-weight-bold mb-5">
                  History of Varkala{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about__history">
            <div className="container">
                <di v className="row">
                    <div className="about__history__img col-sm-4">
                        <img className="img-fluid" src="	https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/photo/raoul-ortega-2JtF6pYAOOI-unsplash.jpg" alt="" />
                    </div>
                    <div className="about__history__title col-sm-8 col-md-6 offset-md-1 align-items-center">
                        <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">HUMBLE BEGINNINGS</h6>
                        <h2 className="mb-4">We started as little</h2>
                        <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
                    </div>
                </di>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
