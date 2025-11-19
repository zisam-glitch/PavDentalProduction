import React, { useState, useEffect } from 'react';
import About from '../Components/About/AboutET';
import Hero15 from '../Components/Hero/Hero15';
import Contact from '../Components/Contact/Contact';
import BookButton from '../Components/BookButton/BookButton';
import Hero23 from '../Components/Hero/Hero23F';
import parser from 'html-react-parser';

const Petition = () => {
  const [signatures, setSignatures] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postcode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Load signatures from localStorage on component mount
  useEffect(() => {
    const savedSignatures = localStorage.getItem('petitionSignatures');
    if (savedSignatures) {
      setSignatures(JSON.parse(savedSignatures));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.postcode.trim()) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Create new signature
    const newSignature = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      postcode: formData.postcode.trim(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    // Add signature to list
    const updatedSignatures = [...signatures, newSignature];
    setSignatures(updatedSignatures);

    // Save to localStorage
    localStorage.setItem('petitionSignatures', JSON.stringify(updatedSignatures));

    // Reset form
    setFormData({ name: '', email: '', postcode: '' });
    setSubmitMessage('Thank you for signing the petition!');
    setIsSubmitting(false);
  };

  // Hero data for the petition page
  const heroData = {
    subTitle: "Community Action",
    title: "NHS Dental Funding Petition",
    text: "<br/><span>Help Us Bring NHS Dental Care Back to Bradford</span> :<br/><br/>Bradford urgently needs better NHS dental access. Pav Dental is fully equipped to treat NHS patients, but current national rules only allow funding through buying an existing practice. We are asking the UK Government to change these rules so new practices can receive NHS contracts and help underserved communities.<br/><br/>Together, we can improve access to urgent dental care.<br/><br/>",
    imgSrc: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762883524/unnamed_2_aqgyl9.jpg",
    videoSrc: "https://www.youtube.com/embed/fISWYcAMjEw",
  };

  // About data for the petition
  const aboutData = {
    title: "Support Our Mission for Better Dental Access",
    subTitle: `
    <h4>Why This Petition Matters</h4>
    <p>Bradford residents deserve access to quality NHS dental care. Current regulations prevent new, well-equipped practices like Pav Dental from receiving NHS contracts, limiting options for patients who need affordable dental services.</p>
    <br/>
    <h4>How You Can Help</h4>
    <p>By signing this petition, you're supporting better dental access for everyone in Bradford. Your signature shows the government that our community needs and deserves improved NHS dental services.</p>
    `,
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1762883524/unnamed_2_aqgyl9.jpg",
  };

  // Petition features
  const petitionFeatures = [
    {
      title: "Sign the Petition",
      description: "Add your name to support better NHS dental access in Bradford. Every signature makes a difference.",
    },
    {
      title: "Share with Others",
      description: "Help spread the word about our campaign. The more people who sign, the stronger our message.",
    }
  ];

  // Video data for the YouTube video
  const videoData = {
    subTitle: "",
    title: "Petition for NHS Dental Funding in Bradford <br/>",
    text: "",
    videoSrc:
      "https://www.youtube.com/embed/fISWYcAMjEw",
    imgSrc:
      "https://img.youtube.com/vi/fISWYcAMjEw/maxresdefault.jpg",
  };

  return (
    <>

      <div className="st-height-b125 st-height-lg-b0" id="home"></div>
      <Hero15 data={heroData} />
      <Hero23 data={videoData} />

      {/* Petition Features Grid */}
      <div className="tf-container mb-60">
        <div className="grid-class container">
          {petitionFeatures.map((feature, index) => (
            <div className="vacancy" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Petition Form Section */}
      {/* <div className="tf-container mb-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="tf-appointment-wrap tf-style1">
              <div className="tf-appointment-content">
                <div className="tf-heading tf-style1 white-color">
                  <h3 className="heading">Sign the Petition</h3>
                  <p className="sub-heading">Add your name to support better NHS dental access in Bradford</p>
                </div>
                
                <form onSubmit={handleSubmit} className="tf-appointment-form">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Full Name *"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          required
                          placeholder="Postcode *"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-btn">
                    <button type="submit" disabled={isSubmitting} className="tf-button style-1">
                      {isSubmitting ? 'Submitting...' : 'Sign Petition'}
                    </button>
                  </div>
                  
                  {submitMessage && (
                    <div className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Signatures Section */}
      {/* <div className="tf-container mb-60">
        <div className="row">
          <div className="col-lg-12">
            <div className="tf-heading tf-style1 mb-30">
              <h3 className="heading">Petition Signatures ({signatures.length})</h3>
            </div>
            
            {signatures.length > 0 ? (
              <div className="tf-testimonial-wrap tf-style1">
                {signatures.map((signature) => (
                  <div key={signature.id} className="tf-testimonial-item">
                    <div className="tf-testimonial-content">
                      <div className="tf-testimonial-author">
                        <h5 className="name">{signature.name}</h5>
                        <span className="designation">{signature.postcode}</span>
                      </div>
                      <div className="tf-testimonial-date">
                        <span>{signature.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="tf-empty-state">
                <p>Be the first to sign this petition!</p>
              </div>
            )}
          </div>
        </div>
      </div> */}
      
      <Contact />
      <BookButton/>
      <style jsx>{`
        .mb-60 {
          margin-bottom: 60px;
        }
        
        .tf-appointment-wrap {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 50px;
          border-radius: 15px;
        }
        
        .white-color h3,
        .white-color p {
          color: white !important;
        }
        
        .tf-appointment-form .form-group input {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.9);
        }
        
        .form-btn {
          text-align: center;
          margin-top: 30px;
        }
        
        .alert {
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          font-weight: 600;
        }
        
        .alert-success {
          background: rgba(212, 237, 218, 0.9);
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        
        .alert-danger {
          background: rgba(248, 215, 218, 0.9);
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .tf-testimonial-wrap {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .tf-testimonial-item {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid #e1e5e9;
        }
        
        .tf-testimonial-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .tf-testimonial-author .name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }
        
        .tf-testimonial-author .designation {
          font-size: 0.9rem;
          color: #666;
        }
        
        .tf-testimonial-date {
          font-size: 0.85rem;
          color: #999;
          text-align: right;
        }
        
        .tf-empty-state {
          text-align: center;
          padding: 60px;
          background: #f8f9fa;
          border-radius: 10px;
          color: #666;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .tf-appointment-wrap {
            padding: 30px;
          }
          
          .tf-testimonial-wrap {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Petition;
