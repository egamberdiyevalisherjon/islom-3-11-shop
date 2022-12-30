import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// const CartLink = ({ cart }) => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <button className="btn text-white" onClick={() => setShow(!show)}>
//         <i className="fa-solid fa-shopping-cart"></i>
//       </button>

//       <div
//         className={`offcanvas offcanvas-end text-bg-light shadow ${
//           show ? "showing" : "hiding"
//         }`}
//       >
//         <div className="offcanvas-header">
//           <span></span>
//           <button
//             type="button"
//             onClick={() => setShow(!show)}
//             className="btn-close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <h2>In your cart, you have:</h2>
//           <ul className="list-group">
//             {cart.map((item) => {
//               return (
//                 <li className="list-group-item" key={item.id}>
//                   <img height={50} src={item.image} alt={item.title} />{" "}
//                   {item.title}: ${item.price} x {item.count}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

const Header = ({ cart }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate(`/login?afterPage=${pathname}`);
  }

  return (
    <header className="bg-info py-3 sticky-top">
      <nav className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img
            className="image-fluid"
            height={50}
            src="https://blog.logomyway.com/wp-content/uploads/2021/11/Ethereum-logo.png"
            alt="Ethereum"
          />
        </Link>
        <ul className="list-unstyled m-0 p-0 text-light d-flex align-items-center gap-3">
          <li>
            <Link to="/todo" className="text-reset text-decoration-none">
              Todo
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-reset text-decoration-none">
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-reset text-decoration-none d-inline-block position-relative"
            >
              <i className="fa-solid fa-shopping-cart fa-2x"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </li>
          <li className="list-group-item">
            <button className="btn" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket fa-2x text-white"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
