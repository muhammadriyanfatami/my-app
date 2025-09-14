"use client";

export default function WhyChooseUs() {
  return (
<section className="WhyChooseUs" id="whychooseUs">
          <div className="container">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <div className="delivery-person-illustration">
                  <img src={"/bule.png"} alt="bule" />
                </div>
              </div>
              <div className="testimonial-text">
                <h2 className="testimonial-title">
                  What Our Customers<br />Say About Us
                </h2>
                <p className="testimonial-description">
                  CAR Express telah menjadi pilihan utama ribuan pelanggan
                  untuk kebutuhan pengantaran mereka. Dengan layanan yang cepat,
                  aman, dan terpercaya, kami berkomitmen memberikan pengalaman terbaik.
                </p>
                <div className="testimonial-stats">
                  <div className="stat-item">
                    <div className="stat-number">546+</div>
                    <div className="stat-label">Registered riders</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">789,900+</div>
                    <div className="stat-label">Orders Delivered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">865,000+</div>
                    <div className="stat-label">Satisfied Customers</div>
                  </div>
                </div>
                <div className="customer-reviews">
                  <div className="customer-avatars">
                    <div className="avatar">👨</div>
                    <div className="avatar">👩</div>
                    <div className="avatar">👨</div>
                  </div>
                  <div>
                    <div className="review-text">Our happy customers</div>
                    <div className="review-subtext">4.8 • 12.5k Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
