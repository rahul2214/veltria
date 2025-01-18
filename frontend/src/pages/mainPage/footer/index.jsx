import './index.css'

function Footer() {

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
            <footer className="footer">
                <div className="footer-section services">
                    <h3>Services</h3>
                    <p>Web and app development, training, and <br />marketing.</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/veltria/?igsh=dGg5NjJidzNqZXp6"
                            className="instagram-button" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"
                                title="Follow us on Instagram" loading="lazy" />
                        </a>
                        <a href="https://www.facebook.com/people/Veltria/61566384419550" className="instagram-button"
                            target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook" title="Follow us on Facebook" loading="lazy" />
                        </a>
                        <a href="https://www.linkedin.com/company/veltria" className="instagram-button" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn"
                                title="Follow us on LinkedIn" loading="lazy" />
                        </a>


                    </div>
                </div>

                <div className="footer-section footer-contact">
                    <h3>Contact</h3>
                    <p>+916303563546</p>
                    <p>admin@veltria.in</p>
                </div>

                <form className="footer-section footer-follow" onSubmit={onSubmit}>
                    <h3>Follow Us</h3>
                    <label className="footer-label" htmlFor="footer-email">Enter your email address</label>
                    <input
                        type="email"
                        id="footer-email"
                        name="email"
                        placeholder="Your email for contact"
                        required
                        aria-label="Email Address"
                    />
                    <button type="submit">Subscribe</button>
                </form>

            </footer>
            <div className="footer-below">
                <p>© 2024. All rights reserved.</p>
            </div>
            <a href="https://wa.me/+916303563546" className="whatsapp-button" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" title="Contact Us via WhatsApp" />
            </a>
        </div>
    );
}

export default Footer;
