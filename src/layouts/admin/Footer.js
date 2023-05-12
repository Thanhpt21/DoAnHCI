import React from "react";
import "../../components/frontend/css/Footer.css";
const Footer = () => {
  return (
    <>
      <footer
        className="section footer-classic context-dark bg-image"
      >
          <div class="row no-gutters social-container">
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-facebook"></span>
              <span>Facebook</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-instagram"></span>
              <span>instagram</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-twitter"></span>
              <span>twitter</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-youtube-play"></span>
              <span>google</span>
            </a>
          </div>
        </div>
        <div class="container" style={{color: 'black', paddingTop: '20px'}}>
          <div class="row row-30 mau_chu">
            <div class="col-md-4 col-xl-5">
              <h5>Giới thiệu</h5>
              <div class="pr-xl-4">
                <p>
                Shop Thời Trang John Henry với phương châm "Đồng hành cùng phong cách thời trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, bởi chúng tôi luôn đề cao tiêu chí mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng. 
                </p>
                <p class="rights">
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd>
                johnhenry@gmail.com
                </dd>
              </dl>
              <dl class="contact-list">
                <dt>phone:</dt>
                <dd>
                  0131440679
                </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Google map</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="350" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="container"  style={{ fontWeight: 'bold'}}>
            <div className="mau_chu" style={{textAlign: 'center'}}>Copyright 2023 © John Henry Fashion Company Ltd</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
