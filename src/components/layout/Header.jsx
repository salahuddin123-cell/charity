import { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import DehazeIcon from "@mui/icons-material/Dehaze";



const Header = () => {
  const [activetab, setactivetab] = useState(1);
  const [navtoggle, setnavtoggle] = useState(false);
  return (
    <div>
      <div className="headline">
        <img src="/img/trustlogo.jpg" alt="notfound" />
      </div>
      <nav>
        <label
          for="bars"
          onClick={() => setnavtoggle(!navtoggle)}
          className="checkbtn"
        >
          <DehazeIcon />
        </label>

        <ul className={navtoggle ? "navtoggle" : ""}>
          <li>
            <a
              className={activetab === 1 && "active"}
              onClick={() => setactivetab(1)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activetab === 2 && "active"}
              onClick={() => setactivetab(2)}
            >
              Who we are
            </a>
          </li>
          <li>
            <a
              className={activetab === 7 && "active"}
              onClick={() => setactivetab(7)}
            >
              Our Vission
            </a>
          </li>
          <li>
            <a
              className={activetab === 8 && "active"}
              onClick={() => setactivetab(8)}
            >
              Our Mission
            </a>
          </li>
          <li>
            <a
              className={activetab === 3 && "active"}
              onClick={() => setactivetab(3)}
            >
              What we do
            </a>
          </li>
          <li>
            <a
              className={activetab === 4 && "active"}
              onClick={() => setactivetab(4)}
            >
              Get involve with us
            </a>
          </li>
          <li>
            <a
              className={activetab === 5 && "active"}
              onClick={() => setactivetab(5)}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className={activetab === 6 && "active"}
              onClick={() => setactivetab(6)}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
