import { useEffect, useState } from "react";
import FooterLinks from "./footerLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerLinksData, setFooterLinks] = useState([]);
  const [footerGalleryData, setFooterGallery] = useState([]);
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const [linksResponse, galleryResponse] = await Promise.all([
          fetch(API.FOOTER_LINKS),
          fetch(API.FOOTER_GALLERY),
        ]);
        const linksData = await linksResponse.json();
        const galleryData = await galleryResponse.json();
        setFooterLinks(linksData);
        setFooterGallery(galleryData);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <section className="py-5 border-5 border-top border-danger" id="footer">
      <div className="container-md">
        <div className="py-5 row">
          <div className="elearning-col col-md-3">
            <ul>
              <li>
                <img
                  src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/logo-footer.png"
                  alt="Logo"
                />
              </li>
              <li>
                <i className="bi bi-envelope-at"></i>sample@mail.com
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>+(234) 9014 193 475
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>Abakaliki, Ebonyi Nigeria
              </li>
              <li></li>
            </ul>
          </div>
          {footerLinksData.map((col, index) => (
            <FooterLinks key={index} title={col.title} items={col.items} />
          ))}
          <div className="gallery-col col-md-3 ps-md-1 ps-5">
            <p className="text-danger fw-semibold">GALLERY</p>
            <div className="footer-gallery-imgs d-flex flex-wrap gap-1">
              {footerGalleryData.map((img, index) => (
                <Link to="/" key={index} className="col-3 p-0">
                  <img src={img.src} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
