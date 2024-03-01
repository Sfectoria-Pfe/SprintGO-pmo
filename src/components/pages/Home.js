import React from 'react'


const Home = () => {
  return (
    <div className="home-page">
            {/* Banner Section */}
            <section className="banner">
                <div className="banner-content">
                    <h1>Welcome to SprintGo</h1>
                    <p>Stay informed about our latest initiatives and announcements.</p>
                    
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <h2>AboutUs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt mauris. In hac habitasse platea dictumst. Sed ut commodo orci. Nulla hendrerit dolor quis magna ullamcorper, nec ullamcorper nunc suscipit.</p>
                </div>
            </section>

            {/* Key Initiatives Section */}
            <section className="key-initiatives">
                <div className="container">
                    <h2>Key Initiatives</h2>
                    <p>Discover our top initiatives aimed at making a difference in people's lives.</p>
                    
                </div>
            </section>

            {/* Latest News Section */}
            <section className="latest-news">
                <div className="container">
                    <h2>Latest News</h2>
                    {/* Insert news articles or links here */}
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Have questions or feedback? We'd love to hear from you!</p>
                    
                </div>
            </section>
        </div>
  )
}

export default Home