import Footer from './footer';
import underConstructionImage from './image.png';

function Blogs() {
    return (
        <div>
            <div
                className="under-construction-container"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    textAlign: 'center'
                }}
            >
                <img
                    src={underConstructionImage}
                    alt="Page under construction"
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
                />
                <p style={{ fontSize: '1.2em', color: '#555' }}>This page is under construction. Check back soon!</p>
            </div>

            <Footer />
        </div>
    );
}

export default Blogs;
