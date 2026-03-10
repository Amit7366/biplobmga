import { Link, useParams } from 'react-router-dom';
import './FacetimeNew.css'
import { FaPhoneAlt, FaBell, FaCommentDots, FaInfoCircle } from "react-icons/fa";
import { usePageMeta } from '../../hooks/usePageMeta';
const FacetimeNew = () => {
    const params = useParams();
       usePageMeta("Megapersonals | Classified Hookup Service", "/favicon.ico");
  return (
     <div className="call-screen">
      <div className="top-icon">
        <FaInfoCircle />
      </div>

      <div className="caller-info">
        <p className="country">United States</p>
        <h1 className="number">+1 (212) 183-3173</h1>
      </div>

      <div className="actions">
        <div className="action">
          <FaCommentDots />
          <span>Message</span>
        </div>
        <div className="action">
          <FaBell />
          <span>Remind Me</span>
        </div>
      </div>

      <Link to={`/auth/login/${params.id}`} className="d-flex call-buttons">
        <button className="decline">
          <FaPhoneAlt />
          <span>Decline</span>
        </button>

        <button className="accept">
          <FaPhoneAlt />
          <span>Accept</span>
        </button>
      </Link>
    </div>
  )
}

export default FacetimeNew
