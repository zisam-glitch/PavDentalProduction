import React from "react";
import PriceSlider from "../Components/Slider/PriceSlider";
import Price2 from "../Components/Price/Price2";
import Price5 from "../Components/Price/Price5";
import Price6 from "../Components/Price/Price6";
import BrandSlider from "../Components/Slider/BrandSlider";
import About2 from "../Components/About/About2";

const priceData2 = {
  pricePlan: [
    {
      mainTitle: "Examination",
      mainPrice: "Price",
      featureList: [
        {
          title: "In Hours",
          price: "£35",
        },
        {
          title: "Same Day",
          price: "£55",
        },
        {
          title: "Out of Hours	",
          price: "On Request",
        },
      ],
    },
  ],
};
const priceData3 = {
  pricePlan: [
    {
      mainTitle: "Periodontal / Gum Treatment",
      mainPrice: "Price",
      featureList: [
        {
          title: "Scale & Polish",
          price: "50",
        },
        {
          title: "Periodontal (gum) treatment per quadrant",
          price: "60",
        },
        {
          title: "air flow Cosmetic stain Removal",
          price: "75",
        },
      ],
    },
  ],
};
const priceData4 = {
  pricePlan: [
    {
      mainTitle: "Fillings / Bonding",
      mainPrice: "Price",
      featureList: [
        {
          title: "Basic Composite (white) Fillings",
          price: "95",
        },
        {
          title: "Intermediate Composite (white) Fillings",
          price: "145",
        },
        {
          title: "Advanced Composite (white) Fillings",
          price: "195",
        },
      ],
    },
  ],
};
const priceData15 = {
  pricePlan: [
    {
      mainTitle: "Hygiene",
      mainPrice: "Price",
      featureList: [
        {
          title: "Basic (Scale)",
          price: "45",
        },
        {
          title: "Intermediate (Scale & Polish)",
          price: "55",
        },
        {
          title: "Advanced (Periodontal / air flow)",
          price: "75",
        },
      ],
    },
  ],
};
const priceData5 = {
  pricePlan: [
    {
      mainTitle: "Root Canal Treatment",
      mainPrice: "Price",
      featureList: [
        {
          title: "Simple Root Canal Treatment (1-canal)",
          price: "195",
        },
        {
          title: "Intermediate Root Canal Treatment (2-canals)",
          price: "295",
        },
        {
          title: "Advanced Root canal Treatment (3-canals)",
          price: "395",
        },
        {
          title: "Advanced Root canal Treatment (4-canals)",
          price: "495",
        },
      ],
    },
  ],
};
const priceData6 = {
  pricePlan: [
    {
      mainTitle: "Extractions",
      mainPrice: "Price",
      featureList: [
        {
          title: "Simple Extraction",
          price: "95",
        },
        {
          title: "Intermediate Extraction",
          price: "145",
        },
        {
          title: "Complex Extraction",
          price: "195",
        },
        {
          title: "Treatment of Dry Socket",
          price: "35",
        },
      ],
    },
  ],
};
const priceData7 = {
  pricePlan: [
    {
      mainTitle: "Crown & Bridge",
      mainPrice: "Price",
      featureList: [
        {
          title: "Metal crown",
          price: "395",
        },

        {
          title: "Porcelain Crown/ Veneer",
          price: "495",
        },
        {
          title: "Precious Metal (Gold)",
          price: "695",
        },
        {
          title: "Inlay/ Onlay Composite",
          price: "295",
        },

        // {
        //   title: "Porcelain Veneer",
        //   price: "495",
        // },
        {
          title: "crown/ bridge recementation",
          price: "60",
        },
      ],
    },
  ],
};
const priceData8 = {
  pricePlan: [
    {
      mainTitle: "Dentures",
      mainPrice: "Price",
      featureList: [
        {
          title: "Acrylic Denture ",
          price: "495",
        },
        {
          title: "Valplast Denture (flexible)",
          price: "795",
        },
        {
          title: "Chrome Denture",
          price: "1195",
        },
      ],
    },
  ],
};
const priceData9 = {
  pricePlan: [
    {
      mainTitle: "Prevention",
      mainPrice: "Price",
      featureList: [
        {
          title: "X-Ray per film ",
          price: "Free",
        },
        {
          title: "Fissure Sealants per tooth          ",
          price: "10",
        },
        {
          title: "Fluoride Varnish Application           ",
          price: "5",
        },
      ],
    },
  ],
};
const priceData10 = {
  pricePlan: [
    {
      mainTitle: "Teeth Whitening",
      mainPrice: "Price",
      featureList: [
        {
          title: "Home Teeth Whitening with Trays",
          price: "295",
        },
        {
          title: "In Office Teeth Whitening",
          price: "295",
        },
        {
          title: "Combined Home and In Office  ",
          price: "495",
        },
        {
          title: "Top Up Syringes (Single) ",
          price: "45",
        },
        {
          title: "Top Up Syringes (Pack of 4)  ",
          price: "95",
        },
        {
          title: "Whitening Strips (14 day)  ",
          price: "65",
        },
      ],
    },
  ],
};
const priceData11 = {
  pricePlan: [
    {
      mainTitle: "Other Items",
      mainPrice: "Price",
      featureList: [
        {
          title: "Bite Guard",
          price: "145",
        },
        {
          title: "Sports Guard",
          price: "145",
        },
        {
          title: "antibiotic prescription",
          price: "25",
        },
        {
          title: "Clear aligners",
          price: "1995",
        },
      ],
    },
  ],
};
const priceData12 = {
  pricePlan: [
    {
      mainTitle: "Aesthetics Dermal Fillers",
      mainPrice: "Price",
      featureList: [
        {
          title: "0.5ML",
          price: "100",
        },
        {
          title: "0.7ML",
          price: "150",
        },
        {
          title: "1ML",
          price: "250",
        },

        {
          title: "2ML",
          price: "350",
        },
        {
          title: "3ML",
          price: "400",
        },
        {
          title: "4ML",
          price: "450",
        },
      ],
    },
  ],
};
const priceData13 = {
  pricePlan: [
    {
      mainTitle: "Aesthetics Botox",
      mainPrice: "Price",
      featureList: [
        {
          title: "1 AREA",
          price: "180",
        },
        {
          title: "2 AREAS",
          price: "240",
        },
        {
          title: "3 AREAS",
          price: "300",
        },
        {
          title: "4 AREAS",
          price: "400",
        },
      ],
    },
  ],
};

const priceData14 = {
  pricePlan: [
    {
      mainTitle: "Other Aesthetics",
      mainPrice: "Price",
      featureList: [
        {
          title: "PROFHILO FIRST DOSE",
          price: "£249",
        },
        {
          title: "SOSUM BOOSTER",
          price: "£160",
        },
        {
          title: "GRILLZ",
          price: "On request",
        },
      ],
    },
  ],
};

const brandData = [
  {
    bg: "orange",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495248/Bupa_logo.svg_v2qlvy.png",
  },
  {
    bg: "blue",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495248/Denplan_Logo_yohe5s.svg",
  },
  {
    bg: "red",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495248/Asset_1_uc4wy8_wchvhr.svg",
  },
  {
    bg: "green",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495248/aviva-logo_cwijxx.svg",
  },
  {
    bg: "dip-blue",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495247/vitality-logo-ellipse-pink_aj3prl.svg",
  },
  {
    bg: "orange",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717495248/AXA_Logo.svg_j9wmut.png",
  },
];

const priceData = [
  {
    title: "BRONZE",
    shape:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1724315007/savedSVGExport0-svg_1_jsya27.svg",
    price: "9.47",
    featureList: [
      {
        title: "Dedicated Whatsapp Number,",
        status: "0",
      },
      {
        title: "Appointments in 72hrs",
        status: "1",
      },

      {
        title: "1x hygiene treatments",
        status: "1",
      },
      {
        title: " 10% off treatment",
        status: "1",
      },
      {
        title: "10% off Products",
        status: "1",
      },
      {
        title: "Xrays included",
        status: "1",
      },
      {
        title: "1x check-up",
        status: "1",
      },
    ],
  },
  {
    title: "SILVER",
    shape:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1724314688/savedSVGExport0-svg_trs5a3.svg",
    price: "13.85",
    featureList: [
      {
        title: "Dedicated Whatsapp Number,",
        status: "0",
      },
      {
        title: "Appointments in 48hrs",
        status: "1",
      },

      {
        title: "2x hygiene treatments",
        status: "1",
      },
      {
        title: " 15% off treatment",
        status: "1",
      },
      {
        title: "15% off Products",
        status: "1",
      },
      {
        title: "Xrays included",
        status: "1",
      },
      {
        title: "2x check-up",
        status: "1",
      },
    ],
  },
  {
    title: "GOLD",
    shape:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1724315007/savedSVGExport0-svg_2_k9qgjk.svg",
    price: "18.24 ",
    featureList: [
      {
        title: "Dedicated Whatsapp Number,",
        status: "1",
      },
      {
        title: "Appointments in 24hrs",
        status: "1",
      },

      {
        title: "2x hygiene treatments",
        status: "1",
      },
      {
        title: " 20% off treatment",
        status: "1",
      },
      {
        title: "20% off Products",
        status: "1",
      },
      {
        title: "Xrays included",
        status: "1",
      },
      {
        title: "2x check-up",
        status: "1",
      },
    ],
  }
];

const aboutData2 = {
  title: "Special Announcement from Pav Dental  ",
  subTitle: `At Pav Dental, we take immense pride in being recognized as the market leader in dental pricing. Our dedication to offering top-notch dental services at the most competitive rates is unwavering. <br/>  <br/>

  <b><span> Our Price Match Promise</span> </b> <br/>
  We're committed to providing not only the best dental care but also the best value. Therefore, we guarantee to beat the price of any dental treatment offered by our competitors. Just present us with a written quote from another provider, and we will offer you a better price.
  <br/> <br/> 
  <b><span> Choose Pav Dental for:</span></b> <br/>
  <span>Affordable Excellence: </span>We ensure that superior dental care is accessible to everyone. <br/>
  <span>Comprehensive Care: </span>From routine check-ups to advanced treatments, we offer a wide range of dental services. <br/>
  <span>Trusted Expertise: </span>Our team of skilled dental professionals is dedicated to your oral health. Visit us at Pav Dental for your dental needs, and experience first-hand our commitment to affordability and quality care.`,
  img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1717528420/doctor-doing-their-work-pediatrics-office-min_eqzds1.jpg",
  avater: {
    img: "",
    name: "",
    designation: "",
  },
};

const Pricing = () => {
  return (
    <>
      <PriceSlider data={priceData} />
      <Price2 data={priceData2} varient="st-color2" />
      <Price5 data={priceData15} varient="st-color2" />

      <Price5 data={priceData4} varient="st-color2" />
      <Price5 data={priceData5} varient="st-color2" />
      <Price5 data={priceData6} varient="st-color2" />
      <Price5 data={priceData7} varient="st-color2" />
      <Price5 data={priceData8} varient="st-color2" />
      <Price5 data={priceData9} varient="st-color2" />
      <Price5 data={priceData10} varient="st-color2" />
      <Price5 data={priceData11} varient="st-color2" />
      <Price5 data={priceData12} varient="st-color2" />
      <Price5 data={priceData13} varient="st-color2" />
      <Price6 data={priceData14} varient="st-color2" />
      <BrandSlider data={brandData} />
      <About2 data={aboutData2} />
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="st-height-b120 st-height-lg-b80" />
    </>
  );
};

export default Pricing;
