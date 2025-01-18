import Footer from '../footer';
import './index.css'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b593c500-d046-4b76-8d9b-93f9c2cbc063");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <div>
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1>Get In Touch</h1>
                        <p>Contact us for web development, app development, training, and digital marketing inquiries.</p>
                    </div>

                   

                    <form className="main-contact-form" onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="name">Your First Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your first name" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Your Email Address*</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">Your Message*</label>
                            <textarea id="message" name="message" placeholder="Type your message here" required></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit Your Inquiry</button>
                    </form>
                </div>
            </section>

<Footer/>

        </div>
    );
}

export default Contact;
