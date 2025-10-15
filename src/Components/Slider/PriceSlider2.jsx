import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading2";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Price from "../Price/Price";

const PriceSlider = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-left slick-arrow ${
        currentSlide === 0 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
    >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-right slick-arrow ${
        currentSlide === slideCount - 1 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
    >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="pricing">
      <div className="st-height-b120 st-height-lg-b80" id="home"></div>
      <h2 className="blue text-center" >How Much Will It Cost?</h2>
      <div className="st-height-b60 st-height-lg-b40" />
      <div className="container">
        <Slider {...settings} className="st-slider-style2 st-pricing-wrap">
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Interest Free Finance (10 Months)
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £200.00
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">10</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  0.00%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  0.00% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2000.00
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 18 months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £119.63
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">18</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.90%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.11% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2153.34
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £153.34
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 24 Months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £91.80
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">24</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.08% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2203.20
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £203.20
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 36 Moriths 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £64.04
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">36</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.09% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2305.44
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £305.44
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 48 Months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £50.22
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">48</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.89%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.13% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2410.56
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £410.56
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
          <div className="bg-white  shadows border-gray-200 rounded-lg border-2  text-center ">
            <div className="uppercase rounded-t-lg text-center px-6 py-6 bg-primary text-white font-semibold  text-sm ">
              Classic Credit 60 months 9.9%
            </div>

            <ul className=" text-center list-none text-sm text-gray-600 ">
              <li className="p-3 border-gray-300 border-b-2 text-sm ">
                <span className="text-primary font-semibold text-lg">
                  £2000.00
                </span>{" "}
                <br /> Loan amount
              </li>
              <li className="p-3 border-gray-300 border-b-2 text-sm bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  £41.98
                </span>{" "}
                <br /> Monthly payment
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">60</span>{" "}
                <br />
                Number of payments
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 bg-gray-200">
                <span className="text-primary font-semibold text-lg">
                  9.90%
                </span>{" "}
                <br />
                Representative APR
              </li>
              <li className="p-3 border-gray-300 text-sm border-b-2 ">
                <span className="text-primary font-semibold text-lg">
                  5.19% Fixed
                </span>{" "}
                <br />
                Annual Rate of interest
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total repayable: £2518.80
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Total interest: £518.80
              </li>
              <li className="p-3 border-gray-300 border-b-2 bg-gray-200">
                Arrangement fee: £0.00
              </li>
              <li className="p-3 border-gray-300 border-b-2  bg-gray-200">
                Settlement fee: £0.00
              </li>
              <li className="p-3 rounded-b-lg bg-gray-200">
                First payment in 1 morith
              </li>
            </ul>
          </div>
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default PriceSlider;
