import React from "react";
import Hero3 from "../../Components/Hero/Hero3";
import Pricing from "../../Components/Slider/PriceSlider2";
import Accordion from "../../Components/Accordion/Accordion1";
import About from "../../Components/About/AboutC";
import parse from "html-react-parser";
import BookButton from "../../Components/BookButton/BookButton";

const heroData = [
  {
    title: " Flexible Payment Options <br/> for Your Treatment    ",
    flex: "none",
    buttonBottom: "Book appointment",
    buttonBottomLnk: "https://pavdental.setmore.com/",
    bgGradient: "",
    subTitle: `Patient Finance offers flexible payment options for dental <br/> 
    treatments. Choose from various plans, including 0% APR finance for<br/>
     shorter terms. Get a personalized estimate and apply easily online.`,
    bgImg:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1717662518/New_Project_12_bvxjhn.png",
  },
];

const vacancies = [
  {
    title: "Flexible Payment Plans",
    text: "Allows you to spread the cost - you can opt to have the treatment you want, when you want it, on a repayment plan to suit your circumstances.",
  },
  {
    title: "Expanded Treatment Options",
    text: "Wider choice of treatments - you can access a fuller range of treatments and choose the perfect option for you.",
  },
  {
    title: "Tailored Payment Terms",
    text: "Payment terms to suit you - with a range of credit and payment options available, you can choose the one best suited to your circumstances.",
  },
  {
    title: "Deposit-Free Options",
    text: "No up-front deposit option - with no initial financial outlay, you can avoid dipping into your savings or having to find a lump sum to start your treatment.",
  },
];

const WhyPav = [
  {
    title: "Patient Finance",
    text: "Patient finance makes your treatment accessible by spreading the cost.",
  },
  {
    title: "Equal Monthly Payments",
    text: "You pay the same amount each month for a set period of time, so you don’t have to pay for your treatment in one go.",
  },
  {
    title: "Finance Calculator",
    text: "Check out our quick and easy to use finance calculator to get an estimate of what your repayment options might be.",
  },
];

const faqData = {
  title: "Frequently Asked Question  ",
  faqItems: [
    {
      title: "How do I schedule a virtual consultation with PavDental?",
      content:
        "To schedule a virtual consultation with PavDental, simply log into your account on the PavDental website or mobile app and select the virtual consultation option. From there, you will be able to choose a convenient time and date for your appointment",
    },
    {
      title:
        "Do I need to have any specific technology to use the virtual consultation service?",
      content:
        "You can acess the service from any device with an internet connection and a camera, such as a smartphone, tablet, or computer          .",
    },
    {
      title: "How does the virtual consultation work?",
      content:
        "The virtual consultation works by connecting you with a licensed dentist through video conferencing. The dentist will be able to see and hear you, and you will be able to see and hear the dentist. During the consultation, the dentist will assess your dental needs and discuss your treatment options.",
    },
    {
      title: "What happens after the virtual consultation?",
      content:
        "Following the virtual consultation, if deemed necessary prior to an in-person visit or primary care, the dentist will issue an electronic prescription for any required treatments or medications. This prescription will be transmitted to your preferred pharmacy, allowing you to conveniently retrieve it.",
    },
    {
      title:
        "How long does it take to receive a prescription after the virtual consultation?",
      content:
        "After your virtual consultation with the dentist, they will promptly e-file your prescription with your preferred pharmacy. Its availability to retrieve from your preferred pharmacy may depend on their stock and business hours.",
    },
    {
      title: "How much does a prescription cost?",
      content: "Flat rate £25.",
    },
    {
      title: "What is a virtual video consultation?",
      content:
        "A virtual video dental consultation is a way for you to connect with a dentist via video call. During the consultation, you can discuss your oral health concerns and treatment plan, and get any questions answered.",
    },
    {
      title: "How do I book a virtual video consultation?",
      content:
        "You can book a virtual video dental consultation through PavDental's platform, either as a subscriber or on a pay-as-you-go basis. Simply select the type of appointment you need, choose a date and time, and you will be connected with a qualified dentist.",
    },
    {
      title:
        "What type of servies can I receive during a virtual video dental consultation?",
      content:
        "During a virtual video dental consultation, you can receive a wide range of services, including preventive care, smile correction, night guards, remineralization trays, sleep apnea devices, electronic prescriptions, free specialist referrals, and more.",
    },
    {
      title:
        "What equipment do I need for a virtual video dental consultation?",
      content:
        "All you need for a virtual video dental consultation is a device with a camera, such as a smartphone, tablet, or computer, and a reliable internet connection.",
    },
    {
      title:
        "Can I receive a diagnosis and treatment plan during a virtual video dental consultation?",
      content:
        "Yes, you can receive a diagnosis and treatment plan during a virtual video dental consultation. Your dentist will assess your oral health, answer any questions you have, and provide you with a personalized treatment plan.",
    },
    {
      title:
        "How long does a virtual video dental consultation typically last?",
      content:
        "Virtual video dental consultations typically last 30 minutes. You will have ample time to discuss your oral health concerns and receive a diagnosis and treatment plan from your dentist.",
    },
  ],
};

const depositOptions = [
  {
    title: "Deposit Requirement",
    text: "It’s entirely up to you - a deposit isn’t required upfront. But you can choose to pay one if it suits you.",
  },
  {
    title: "Reduced Monthly Repayments",
    text: "Paying an upfront deposit could reduce the cost of your monthly repayments. This is something you can decide at the application stage.",
  },
];

const financeOptions = [
  {
    title: "0% APR Finance",
    text: "You can apply for finance at 0% APR*, also called interest-free finance, to pay for treatments that cost between £500 and £50,000, provided you select a repayment term of 12, 18, 24, 36 or 40 months.",
  },
  {
    title: "7.9% APR Finance",
    text: "If you prefer a longer repayment term of 48 or 60 months, you can apply for finance at 7.9% APR representative*.",
  },
];
const repaymentExamples = [
  {
    title: "Personalized Examples",
    text: "Once you know the cost of your treatment plan, simply speak to the friendly practice team and they can provide you with an example of what your repayments might be based on your choice of repayment term.",
  },
  {
    title: "Representative Examples",
    text: "Here are some representative examples to show you how it all works.",
  },
];
const repaymentExamples2 = [
  {
    title:
      "Interest-free example- 0% APR* finance: repayment term of 18 months    ",
    text: `When you select a repayment term of 40 months or less, there is no interest to pay, so you don't pay back any more than the cost of treatment.
    <br/> Cost of treatment £2,000
    <br/>Loan value - £2,000
    <br/>Repayment term -18 months
    <br/>Annualised rate of interest (APR representative) - 0%*
    <br/>Monthly repayments - 18 x £111.11
    <br/>Total interest - £0.00
    <br/>Total amount repayable £1,999.98`,
  },
  {
    title:
      "Interest-bearing example- 7.9% APR representative* finance repayment term of 48 months    ",
    text: `If you choose a longer repayment term of 48 or 60 months, you can still spread the cost of treatment with fixed- monthly repayments, but you pay interest at 7.9% APR representative*.
    <br/>Cost of treatment - £2,000
    <br/>Loan value - £2,000
    <br/>Repayment term - 48 months
    <br/>Annualised rate of interest (APR representative) - 7.9%*
    <br/>Monthly repayments - 48 x £48.49
    <br/>Total interest - £327.52
    <br/>Total amount repayable £2,327.52`,
  },
];

const repaymentExamples3 = [
  {
    title: "Patient Finance Application",
    text: "Once you have agreed your treatment plan and cost with your clinician, you’ll have the option to apply for patient finance. If you’re interested, a member of the reception team will ask for your email address and send you a link to a simple application form to complete. If you’re eligible for patient finance, you can use it to help pay for your treatment. A decision is made very quickly, and you could be booking in your treatment in no time.",
  },
  {
    title: "Finance Provider Information",
    text: "Pav Dental (registered office: 1 Rose Hill Avenue, Blackburn BB1 1YF. Company No. 244415) is a trading name of Mars Purifierp. Credit is provided by Secure Trust Bank PLC trading as V12 Retail Finance with whom we have a commercial relationship (and so we are unable to provide independent advice) and is subject to age and status. Minimum spend applies.",
  },
];

const VirtualDentistry = () => {
  return (
    <>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <Hero3 data={heroData} />
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">The advantages at a glance</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {vacancies.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How does patient finance work?</h2>
      <div className="st-height-b60 st-height-lg-b80" />
      <div className="container">
        <div className="row jcenter ">
          {WhyPav.map((WhyPav, index) => (
            <div className="col-lg-4 margin-g">
              <div className="vc " key={index}>
                <h4>{WhyPav.title}</h4>
                <p>{WhyPav.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">Do I have to pay a deposit?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {depositOptions.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">Can I get 0% APR finance?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {financeOptions.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">
        how much will I pay each month and for how long?
      </h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{vacancy.title}</h4>
            <p>{vacancy.text}</p>
          </div>
        ))}
      </div>
      <Pricing />
      <h2 className="blue center">
        how much will I pay each month and for how long?
      </h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples2.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{parse(vacancy.title)}</h4>
            <p>{parse(vacancy.text)}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <h2 className="blue center">How do I sign up for patient finance?</h2>
      <div className="st-height-b80 st-height-lg-b80" />
      <div className="grid-class container">
        {repaymentExamples3.map((vacancy, index) => (
          <div className="vacancy" key={index}>
            <h4>{parse(vacancy.title)}</h4>
            <p>{parse(vacancy.text)}</p>
          </div>
        ))}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />

      {/* <Accordion data={faqData} /> */}
      <BookButton />
    </>
  );
};

export default VirtualDentistry;
