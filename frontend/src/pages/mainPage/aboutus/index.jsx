import Footer from '../footer';
import './index.css'

function AboutUs() {
    return (
        <div>
            <section className="digital-solutions">
                <div className="content-wrapper">
                    <div className="left-content">
                        <h1>Your Partner in Digital Solutions</h1>
                    </div>
                    <div className="right-content">
                        <p>At Veltria, we specialize in web and app development, training, trading, and digital marketing
                            services,
                            delivering responsive, professional, and animated solutions tailored to your business needs.</p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h2>50+</h2>
                                <span>Proven Success</span>
                            </div>
                            <div className="stat-item">
                                <h2>15</h2>
                                <span>Trusted by Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="about-section">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h2>Our Mission</h2>
                            <p>At Veltria, our mission is to empower businesses through innovative web solutions, cutting-edge
                                app
                                development, strategic digital marketing, and high-quality training. We aim to drive success and
                                growth by leveraging the latest technology and industry insights.</p>
                        </div>
                        <div className="image">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/about1.jpg?v=1726479185664" alt="Mission Image"/>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h2>Our Purpose</h2>
                            <p>We are committed to helping our clients navigate the complexities of the digital landscape. From
                                start-ups to established enterprises, our purpose is to deliver impactful results through
                                tailored
                                solutions that meet your unique business needs.</p>
                        </div>
                        <div className="image">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/about2.jpg?v=1726479189792" alt="Purpose Image"/>
                        </div>
                    </div>
                  
                    <div className="content">
                        <div className="text">
                            <h2>Why Choose Us</h2>
                            <p>Choosing Veltria means partnering with a team that understands your vision and works tirelessly
                                to bring it
                                to life. With our diverse expertise in web development, app design, digital marketing, and
                                training, we
                                provide comprehensive solutions tailored to your specific needs. Our client-centric approach
                                ensures we stay
                                aligned with your goals every step of the way.</p>
                        </div>
                        <div className="image">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/about1.jpg?v=1726479185664" alt="Why Choose Us Image"/>
                        </div>
                    </div>

                    
                    {/* <div className="content">
                        <div className="text">
                            <h2>Our Vision</h2>
                            <p>Our vision is to be a global leader in the digital landscape, setting the standard for
                                innovative,
                                customer-focused solutions. We aspire to continuously evolve and adapt to the changing needs of
                                the market,
                                using our skills and passion to make a positive impact on businesses worldwide.</p>
                        </div>
                        <div className="image">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/about1.jpg?v=1726479185664" alt="Vision Image"/>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="client-feedback">
                <h2>Client Feedback</h2>
                <p>See what our clients say about our outstanding web <br/> and app development services.</p>
                <div className="feedback-container">
                    <div className="feedback-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>I appreciate the training sessions offered by Veltria; they greatly enhanced my skills and confidence
                            in
                            digital marketing strategies.</p>
                        <div className="client-info">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/review2.avif?v=1726479330142" alt="Mark Smith"/>
                                <div>
                                    <h4>Mark Smith</h4>
                                    <p>Chicago</p>
                                </div>
                        </div>
                    </div>
                    <div className="feedback-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>Veltria’s web development transformed my business. Their professionalism is unmatched!</p>
                        <div className="client-info">
                            <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/image.png?v=1726479338862" alt="Alice Johnson"/>
                                <div>
                                    <h4>Alice Johnson</h4>
                                    <p>New York</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>


        <Footer/>

        </div>
    );
}

export default AboutUs;
