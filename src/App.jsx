import './App.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdHeart } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function App() {
  return (
    <>
      <div className="free-shipping-text">
        Enjoy <strong>FREE SHIPPING</strong> on orders over $1,000! No code
        needed. (Continental US Customers Only)
      </div>
      <nav className="mobile-nav">
        <div className="top-nav">
          <div className="top-nav-logo">Cannatron Logo</div>
        </div>
        <div className="bottom-nav">
          <BiSearchAlt className="bottom-nav-icon" />
          <FaCircleUser className="bottom-nav-icon" />
          <IoMdHeart className="bottom-nav-icon" />
          <AiOutlineShoppingCart className="bottom-nav-icon" />
          <GiHamburgerMenu className="bottom-nav-icon" />
        </div>
      </nav>

      <nav className="desktop-nav">
        <div className="top-nav-wrapper">
          <div className="top-nav">
            <div>Formerly Ooze Wholesale</div>
            <div>
              <div>Give us a call (855) 977-0420</div>
              <div>Sign up for our newsletter</div>
              <button className="sign-up-btn">Mock</button>
            </div>
          </div>
        </div>

        <div className="middle-nav-wrapper">
          <div className="middle-nav">
            <div className="middle-nav-logo">Cannatron Logo</div>
            <div className="middle-right-nav">
              <div>
                <div>
                  <FaCircleUser /> Mock
                </div>
                <div>
                  <IoMdHeart /> Mock
                </div>
                <div>
                  <AiOutlineShoppingCart /> Mock
                </div>
              </div>
              <div>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="login-btn">Mock</button>
                <button className="register-btn">Mock</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav-wrapper">
          <div className="bottom-nav">
            <div>Mock</div>
            <div>
              Mock <IoMdArrowDropdown size="2rem" />
            </div>
            <div>
              Mock <IoMdArrowDropdown size="2rem" />
            </div>
            <div>
              Mock
              <IoMdArrowDropdown size="2rem" />
            </div>
            <div>
              Mock <IoMdArrowDropdown size="2rem" />
            </div>
          </div>
        </div>
      </nav>

      <div className="main-wrapper">
        <main>
          <img src="https://cannatron.com/cdn/shop/files/CT24_A023_Duplex_2_Thickboi.jpg?v=1706542144" />
          <img src="https://cannatron.com/cdn/shop/files/CT24_A019_KP_Suga_Sean_UFC_299_Thicc_Boi.jpg?v=1706898979" />
          <img src="https://cannatron.com/cdn/shop/files/CT24_A040_King_Palm_Cones_Caramel_Gold_Feature_THICC_BOI.jpg?v=1706303141" />
          <img src="https://cannatron.com/cdn/shop/files/CT24_A026_Ooze_Brink_Dry_Herb_Vape_Thicc_Boi.jpg?v=1705343090" />
        </main>
      </div>

      <div className="icon-wrapper">
        <div>
          <img src="https://cannatron.com/cdn/shop/files/Ooze_small.webp?v=1657173303" />
        </div>
        <div>
          <img src="https://cannatron.com/cdn/shop/files/king_palm_cannatron_logo_bar_small_3bd9cb38-413b-4f01-8c7f-4c127dc336d5_small.webp?v=1667014362" />
        </div>

        <div>
          <img src="https://cannatron.com/cdn/shop/files/Truweigh_Primary_small.png?v=1667014382" />
        </div>

        <div>
          <img src="https://cannatron.com/cdn/shop/files/white_rhino_cannatron_logo_bar_small_507dd55b-df4c-4f82-83f6-188b92f029f3_small.webp?v=1667014458" />
        </div>
        <div>
          <img src="https://cannatron.com/cdn/shop/files/Untitled_design_-_2022-11-08T124627.728_small.png?v=1667929596" />
        </div>
        <div>
          <img src="https://cannatron.com/cdn/shop/files/GreenMonkey_Primary_Black_Color_Verticle_small.png?v=1667320110" />
        </div>

        <div>
          <img src="https://cannatron.com/cdn/shop/files/LoudLock_Blue_small.png?v=1657173101" />
        </div>
        <div>
          <img src="https://cannatron.com/cdn/shop/files/pop_cones_cannatron_logo_bar_small_b27ccbfa-861f-44e3-a5a4-de28a2a499cf_small.webp?v=1667014480" />
        </div>
        <div>
          <img src="https://cannatron.com/cdn/shop/files/santa_cruz_shredder_cannatron_logo_bar_small_16646c3f-9976-498f-8b9f-9c829252fd2b_small.webp?v=1667014501" />
        </div>
      </div>
    </>
  );
}
