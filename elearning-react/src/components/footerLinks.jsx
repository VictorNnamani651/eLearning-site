import { Link } from "react-router-dom";

const FooterLinks = ({ title, items }) => {
  return (
    <div className="company-col col-md">
      <ul>
        <li className="text-danger fw-semibold">{title}</li>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
