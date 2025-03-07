/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import aboutImg1 from "../assets/img/about/01.jpg";
import aboutImg2 from "../assets/img/about/02.jpg";
import aboutImg3 from "../assets/img/about/03.jpg";

export default function AboutEvent() {
  return (
    <>
      <div className="about-area py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInRight" data-wow-delay=".25s">
                <div className="about-img">
                  <img className="img-1" src={aboutImg1} alt="" />
                  <img className="img-2" src={aboutImg2} alt="" />
                  <img className="img-3" src={aboutImg3} alt="" />
                </div>
                <div className="about-experience">
                  <span>75+</span>
                  <h5>
                    Guest <br />
                    Speakers
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInLeft" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">About</span>
                  <h2 className="site-title">
                    What&apos;s <span>New</span>
                  </h2>
                  <div
                    className="site-shadow-text wow fadeInRight"
                    data-wow-delay=".35s"
                  >
                    GORAKHPUR
                  </div>
                </div>
                <p className="about-text">
                  The Gorakhpur Book Festival, organized by the National Book
                  Trust, India (under the Ministry of Education, Government of
                  India), is making its debut this April at the centrally
                  located at Gorakhpur.
                </p>
                <p className="mt-3 about-text">
                  It promises to be a landmark event in the national publishing
                  calendar, bringing together a diverse array of national as
                  well as international exhibitors.
                </p>
                <p className="mt-3 about-text">
                  Featuring the theme &quot;Books for All,&quot; the
                  festival offers a multifaceted experience with literary
                  discussions, cultural performances, and activities for all age
                  groups.
                </p>
                <p className="mt-3 about-text">
                  This inaugural edition will host over 300 exhibitors and
                  expects to welcome more than 100,000 visitors, fostering a
                  vibrant exchange of ideas and stories.
                </p>
                {/* <div className="about-list-wrap">
                  <ul className="about-list list-unstyled">
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>01.</span> Children Activities.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>02.</span> Authors Corner.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>03.</span> Cultural Activities.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>04.</span> Film Festival.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>05.</span> Workshop Stage.
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="about-item">
                        <h4>
                          <span>06.</span> International Authors Meet.
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <Link to="/" className="theme-btn">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
