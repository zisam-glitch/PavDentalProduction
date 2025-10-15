import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const PostDetails = () => {
  const postImages = [
    { img: "/images/hero-bg3.jpg" },
    { img: "/images/hero-bg4.jpg" },
    { img: "/images/hero-bg5.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    loop: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="st-content">
      <div
        className="st-page-heading st-dynamic-bg"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/db1i46uiv/image/upload/v1724352143/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display_1_lkpn2d.jpg')`,
        }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h4>
              <Link to="/" className="st-back-to-home">
                <Icon icon="ph:arrow-left-bold" />
                Back To Home
              </Link>
            </h4>
            <h1 className="st-page-heading-title">
              Creating a Safe and Healthy Environment: The Benefits of
              Installing an Air Purifier in Dental Clinics
            </h1>
            <div className="st-post-label">
              <span>
                By <Link>Dr. Hassan Bhojani</Link>
              </span>
              <span>26 April, 2023</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="st-post-details st-style1">
              <p>
                Maintaining a clean and healthy environment is a top priority
                for dental clinics. Air quality plays an essential role in
                ensuring the health and safety of both patients and staff. One
                of the most effective ways to improve indoor air quality is by
                installing an air purifier.
              </p>
              <p>
                Parish Dental are proud to have partnered with Mars Purifier to
                improve air quality in the dental clinic. By installing Mars
                Purifier, Parish Dental has taken a proactive approach to
                ensuring the health and safety of their patients and staff. Mars
                Purifier's advanced technology is designed to provide the most
                effective air purification, ensuring that the air in Parish
                Dental is clean and healthy.
              </p>
              <p>
                Mars Purifier has a proven track record of providing
                high-quality air purification systems for a variety of
                industries, including healthcare, hospitality, and education.
                Their air purifiers are designed to be both efficient and
                effective, providing continuous air purification without causing
                disruptions to daily operations. By partnering with Mars
                Purifier, Parish Dental has taken a step towards providing the
                best possible care for their patients and staff.
              </p>

              <h2>Removes harmful particles </h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p>
                    Dental clinics are often crowded places, and patients come
                    in with a variety of health conditions. Air purifiers like
                    Mars Purifier are designed to remove harmful particles from
                    the air, including bacteria, viruses, allergens, and other
                    pollutants. By removing these particles, air purifiers help
                    to prevent the spread of infectious diseases and reduce the
                    risk of allergic reactions.
                  </p>

                  <h2>Reduces odours</h2>

                  <p>
                    Dental procedures can produce unpleasant odours that linger
                    in the air. An air purifier can help to remove these odours
                    by filtering out the particles that cause them. Mars
                    Purifier uses advanced technology to eliminate odours,
                    leaving the air smelling fresh and clean.
                  </p>

                  <h2>Improves air circulation</h2>
                  <p>
                    Proper air circulation is essential in a dental clinic to
                    prevent the build-up of airborne contaminants. Air purifiers
                    like Mars Purifier help to improve air circulation by
                    filtering out particles and pushing clean air back into the
                    room. This creates a more comfortable and healthy
                    environment for both patients and staff.
                  </p>
                  <h2>Enhances staff productivity</h2>
                  <p>
                    Air pollution can affect staff productivity and lead to
                    absenteeism. Installing an air purifier in the dental clinic
                    can improve indoor air quality, which, in turn, can enhance
                    staff productivity. Clean air promotes better health and
                    mental alertness, making it easier for staff to focus and
                    perform their duties.
                  </p>
                  <h2>Enhances staff productivity</h2>
                  <p>
                    Patients with respiratory conditions, such as asthma or
                    allergies, can benefit greatly from the installation of an
                    air purifier. Mars Purifier helps to remove allergens and
                    other harmful particles from the air, reducing the risk of
                    respiratory problems for patients
                  </p>
                  <p>
                    In conclusion, installing an air purifier in the dental
                    clinic, like Mars Purifier, has numerous benefits, including
                    removing harmful particles, reducing odours, improving air
                    circulation, enhancing staff productivity, and helping
                    patients with respiratory conditions. By improving indoor
                    air quality, dental clinics can create a safer and healthier
                    environment for all.
                  </p>
                  <p>
                    By prioritising air quality, Parish Dental is setting a new
                    standard for dental clinics and demonstrating their
                    commitment to the well-being of their patients and staff.
                  </p>
                </div>
              </div>
              {/* .st-slider */}
              <div className="st-height-b20 st-height-lg-b20" />

              <div className="st-height-b35 st-height-lg-b35" />

              <div className="st-height-b60 st-height-lg-b60" />
              <div className="st-post-btn-gropu">
                <Link
                  to=""
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
                <Link
                  to=""
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              </div>
              <div className="st-height-b60 st-height-lg-b60" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Recent Post</h3>
              <ul className="st-post-widget-list st-mp0">
                <li>
                  <div className="st-post st-style1">
                    <Link to="" className="st-post-thumb st-zoom">
                      <img
                        src="https://res.cloudinary.com/db1i46uiv/image/upload/v1724352143/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display_1_lkpn2d.jpg"
                        alt="post1"
                        className="st-zoom-in"
                      />
                    </Link>
                    <div className="st-post-info">
                      <h2 className="st-post-title">
                        <a href="blog-details-right-sidebar.html">
                          Creating a Safe and Healthy Env...
                        </a>
                      </h2>
                      <div className="st-post-date">26 April, 2023</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="st-height-b30 st-height-lg-b30" />
      
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default PostDetails;
