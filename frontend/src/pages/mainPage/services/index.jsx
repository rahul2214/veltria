import Footer from '../footer';
import './index.css'

function Services() {
    return (
        <div>
            
            <div className="hero-services">
                <h1>Professional Web and <br/> App Development <br/> Services</h1>
                    <p>Offering training, teaching, and digital marketing solutions.</p>
                    <br/>
                        <a href="/contact">Get Started</a>
                        <br/>
                            <div className="services-section">
                                <div className="service-card">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/download.jpg?v=1726478765375"
                                        alt="Service 1"/>
                                        <p>Responsive designs tailored for your business needs.</p>
                                </div>
                                <div className="service-card">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/download%20(1).jpg?v=1726478780865"
                                        alt="Service 2"/>
                                        <p>Expert training to enhance your digital skills.</p>
                                </div>
                                <div className="service-card">
                                    <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/download%20(2).jpg?v=1726478772183"
                                        alt="Service 3"/>
                                        <p>Effective marketing strategies to boost your brand.</p>
                                </div>
                            </div>
                        </div>

                        <section className="articles-section">
                            <div className="article-card">
                                <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/images%20(4).jpg?v=1726478971692"
                                    alt="Article Image 1" className="article-image" />
                                    <div className="article-content">
                                        <h2>Elevate Your Business with Our Comprehensive Digital Solutions and Training Services</h2>
                                        <p>At Veltria, we specialize in web and app development, digital marketing, and training services. Our
                                            responsive, professional, and animated solutions are designed to enhance your online presence and
                                            drive
                                            success. Discover how we can help your business thrive in the digital landscape today!</p>
                                        <span className="article-date">5/8/2024 · 1 min read</span>
                                    </div>
                            </div>

                            <div className="article-card">
                                <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/images%20(3).jpg?v=1726478951876"
                                    alt="Article Image 2" className="article-image" />
                                    <div className="article-content">
                                        <h2>Elevate Your Business with Professional Web and App Development Services</h2>
                                        <p>Discover how Veltrias responsive and animated solutions in web development, app development,
                                            training,
                                            trading, and digital marketing can transform your business. Our expert team is dedicated to
                                            delivering
                                            professional services tailored to your needs, ensuring a seamless online presence that engages and
                                            converts your audience effectively.</p>
                                        <span className="article-date">5/8/2024 · 1 min read</span>
                                    </div>
                            </div>
                        </section>

            <Footer/>

        </div>
    );
}

export default Services;
