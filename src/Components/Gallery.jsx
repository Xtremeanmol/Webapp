import gallery1 from "../assets/img/gallery/01.jpg";
import gallery2 from "../assets/img/gallery/02.jpg";
import gallery3 from "../assets/img/gallery/03.jpg";
import gallery4 from "../assets/img/gallery/04.jpg";

export default function Gallery() {
  return (
    <>
      <div className="gallery-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">Gallery</span>
                <h2 className="site-title">
                  Lets Check Our Photo <br />
                  <span>Gallery</span>
                </h2>
                <div
                  className="site-shadow-text wow fadeInRight"
                  data-wow-delay=".35s"
                >
                  Our Gallery
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 popup-gallery">
            <div className="col-md-7">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery2} alt="" />
                      <a
                        className="popup-img gallery-link"
                        href={gallery2}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery3} alt="" />
                      <a
                        className="popup-img gallery-link"
                        href={gallery3}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="gallery-item wow fadeInDown"
                    data-wow-delay=".25s"
                  >
                    <div className="gallery-img">
                      <img src={gallery4} alt="" />
                      <a
                        className="popup-img gallery-link"
                        href={gallery4}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="gallery-item wow fadeInUp" data-wow-delay=".25s">
                <div className="gallery-img">
                  <img src={gallery1} alt="" />
                  <a
                    className="popup-img gallery-link"
                    href={gallery1}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
