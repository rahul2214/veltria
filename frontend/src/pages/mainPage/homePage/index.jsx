import Footer from "../footer";
import { useState } from 'react';
import './index.css'

function HomePage() {
    return (
        <div>
            <section className="hero-main">
                <div className="hero-main-content">
                    <h1>Innovate.<br />Adapt. Succeed.</h1>
                    <p>Veltria provides an effective and powerful <br /> way to build your projects</p>
                    <a href="/contact" className="main-btn-primary">Get Started</a>

                    <div className="features">
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Speed & Security Icon" loading="lazy" />
                                <p>Speed & Security</p>
                        </div>
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Flexibility & Scalability Icon" loading="lazy" />
                                <p>Flexibility & Scalability</p>
                        </div>
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Better Collaboration Icon" loading="lazy" />
                                <p>Better Collaboration</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/home-main.png?v=1726477960888"
                        alt="Veltria digital solutions banner" className="responsive-img" loading="lazy" />
                </div>
            </section>
            <section className="hero-mobile">
                <div className="hero-image">
                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/home-main.png?v=1726477960888"
                        alt="Illustration" className="responsive-img" loading="lazy"/>
                </div>
                <div className="hero-content">
                    <h1>Innovate.<br />Adapt. Succeed.</h1>
                    <p>Veltria provides an effective and powerful way to build your projects</p>
                    <div className="features">
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Speed & Security Icon" loading="lazy"/>
                                <p>Speed & Security</p>
                        </div>
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Flexibility & Scalability Icon" loading="lazy"/>
                                <p>Flexibility & Scalability</p>
                        </div>
                        <div className="feature">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/chrome_EqXzY6l4Dm.png?v=1726478338409"
                                alt="Better Collaboration Icon" loading="lazy"/>
                                <p>Better Collaboration</p>
                        </div>
                    </div>
                    <a href="/contact" className="main-btn-primary">Get Started</a>
                </div>

            </section>

        
            <section className="diagonal-section">
                <div className="content">
                    <h1>Empower Your Business with Veltria's Expertise</h1>
                    <p>
                        At Veltria, we believe in harnessing the power of technology to drive innovation and growth. Our
                        comprehensive range of services, from web and app development to digital marketing and graphic design,
                        are tailored to meet the unique needs of your business. Let us help you turn your vision into reality
                        and achieve great things with the right solutions.
                    </p>
                </div>
            </section>

    
            <section className="expert-services">
                <h2>Our Expert Services</h2>
                <p className="intro-text">Offering web and app development, training, trading, and digital marketing solutions <br/>
                    tailored for you.</p>
                <div className="services-container">
                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/home-service.avif?v=1726478257125"
                        alt="Veltria services icon" className="service-image" loading="lazy" />
                        <div className="service-details">
                            <div className="service-item">
                                <h3>Web Development Services</h3>
                                <p>Custom websites designed to enhance your online presence and engage your audience effectively.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3>App Development</h3>
                                <p>Innovative mobile applications that provide seamless user experiences and drive business growth.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3>Digital Marketing</h3>
                                <p>Strategic marketing solutions to boost your brand visibility and reach your target audience.</p>
                            </div>
                        </div>
                </div>
            </section>

            
            <div className="home-about-section">
                <div className="content-about">
                    <h2>About Veltria</h2>
                    <p>We specialize in web and app development, training, trading, and digital marketing services to elevate
                        your business.</p>
                    <a href="/aboutus">Learn More</a>
                </div>
                <div className="images">
                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/images%20(1).jpg?v=1726478539304"
                        alt="Veltria developer speaking" className="about-image" loading="lazy" />
                        <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/images%20(1).png?v=1726478651389"
                            alt="Veltria developer collaborating" className="about-image" loading="lazy" /> 
                        </div>
                    </div>

                
                    <section className="trusted-leaders">
                        <div className="content-container">
                            <h2>Trusted Among Industry Leaders</h2>
                            <p>
                                We are proud to be trusted by leading companies in the industry. Our clients rely on our expertise to
                                drive their business forward.
                                Join the list of esteemed organizations who have benefited from our innovative solutions.
                            </p>
                            <div className="logo-grid">
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/images%20(2).png?v=1726479510265"
                                        alt="Givenchy Logo" loading="lazy" />
                                    <span>Givenchy</span>
                                </div>
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/cannon.png?v=1726479590802"
                                        alt="Cannondale Logo" loading="lazy" />
                                    <span>Cannondale</span>
                                </div>
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/sram.png?v=1726479578584"
                                        alt="Sram Logo" loading="lazy" />
                                    <span>Sram</span>
                                </div>
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/gotham.png?v=1726479544371"
                                        alt="Gotham Logo" loading="lazy" />
                                    <span>Gotham</span>
                                </div>
                               
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/koolaid.jpg?v=1726479705694"
                                alt="A.T. Motion Logo" loading="lazy"/>
                                    <span>Koolaid</span>
                                </div>
                                <div className="logo-item">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/look.png?v=1726479583927"
                                alt="Bond Logo" loading="lazy"/>
                                    <span>Look</span>
                                </div>
                            </div>
                        </div>
                    </section>

            <FAQSection />
            <Footer/>
        </div>
    );
}


function FAQSection() {
    const faqs = [
        { question: 'What services does Veltria offer?', answer: 'Veltria specializes in web development, app development, digital marketing, graphic design, trading, and professional training services.' },
        { question: 'How can Veltria help my business grow?', answer: 'Veltria provides tailored digital solutions, including website and app development, strategic marketing campaigns, and engaging graphic design, all aimed at boosting your brand’s online presence.' },
        { question: 'Can I get a custom quote for my project?', answer: 'Yes, Veltria offers personalized quotes based on the specific requirements of your project. Contact us to discuss your needs, and we will provide a custom proposal.' },
        { question: 'What is the process for starting a project with Veltria?', answer: 'To start a project, reach out to us with your project details. We will discuss your vision, define the scope, and create a tailored plan to achieve your goals.' },
        { question: 'Does Veltria offer after-launch support?', answer: 'Yes, Veltria provides ongoing support and maintenance to ensure your digital solutions remain up-to-date and continue to perform optimally after launch.' },
    ];

    return (
        <section className="faq-section">
            <h2>FAQ</h2>
            <h3>Any Questions? Answered</h3>
            <p>Find answers to the most commonly asked questions about Veltria’s services and offerings.</p>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}

// Individual FAQ Item Component
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className={`arrow ${isOpen ? 'active' : ''}`}>▼</span>
            </button>
            {isOpen && (
                <div className={`faq-answer ${isOpen ? 'active' : ''}`}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}


export default HomePage;
