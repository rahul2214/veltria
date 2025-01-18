import { useCallback, memo } from "react";
import "./index.css";

const Footer = memo(() => {
    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "b593c500-d046-4b76-8d9b-93f9c2cbc063");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            }).then((res) => res.json());

            if (response.success) {
                console.log("Subscription successful:", response);
                alert("Thank you for subscribing!");
            } else {
                console.error("Subscription failed:", response.message);
                alert("Subscription failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during subscription:", error);
            alert("An error occurred. Please try again later.");
        }
    }, []);

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
                    <p>
                        <strong>Phone:</strong> +91 6303563546
                    </p>
                    <p>
                        <strong>Email:</strong> admin@veltria.in
                    </p>
                </div>

                <form className="footer-section footer-follow" onSubmit={onSubmit}>
                    <h3>Follow Us</h3>
                    <label className="footer-label" htmlFor="footer-email">
                        Enter your email address
                    </label>
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
                <p>© 2024 Veltria. All rights reserved.</p>
            </div>
            <a
                href="https://wa.me/+916303563546"
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Us via WhatsApp"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    loading="lazy"
                />
            </a>
        </div>
    );
});

export default Footer;
