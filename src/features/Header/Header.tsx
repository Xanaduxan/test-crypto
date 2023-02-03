import { useState } from 'react';
import './Header.css';

const Header = (): JSX.Element => {
  const [login, setLogin] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="deco"></div>
        <svg
          width="148.16"
          height="24.17"
          viewBox="0 0 870 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M108.403 113.545L75.7428 141.728C27.9345 139.831 -3.05176e-05 128.314 -3.05176e-05 92.5427H36.4121C36.4121 107.176 48.6421 113.816 94.7827 113.816C99.7859 113.816 104.372 113.816 108.403 113.545Z"
            fill="#092326"
          />
          <path
            d="M174.975 47.1518H138.563C138.563 31.9762 122.997 28.1823 85.0561 28.1823C81.7207 28.1823 78.5242 28.1823 75.7446 28.3178L107.848 0.541107C150.098 3.38653 174.975 17.2071 174.975 47.1518Z"
            fill="#092326"
          />
          <path
            d="M141.2 106.77C143.563 104.737 144.675 102.027 144.675 98.9109C144.675 87.3937 136.614 85.4967 90.6123 83.3288C28.9062 80.4834 4.30716 71.1341 4.30716 40.1055C4.30716 10.8384 33.7704 0.811636 83.5244 0.134155L45.4446 32.7887C41.9701 35.3632 40.7193 37.8021 40.7193 41.7315C40.7193 52.4357 49.1969 54.3326 90.4733 56.7716C146.342 59.7525 180.948 62.7334 180.948 97.6914C180.948 132.785 148.566 141.186 100.341 141.999"
            fill="#092326"
          />
          <path
            d="M230.705 31.7047V61.3783H332.02V91.323H230.705V139.966H194.293V1.89551H344.111V31.7047H230.705Z"
            fill="#092326"
          />
          <path
            d="M413.039 92.6818L358.699 140.105H308.528L388.301 71.0024L308.528 1.89932H358.699L413.039 49.323L436.804 71.0024"
            fill="#092326"
          />
          <path
            d="M450.285 59.888L517.412 1.89563H467.241L425.547 38.2086"
            fill="#092326"
          />
          <path
            d="M425.407 103.517L467.24 140.101H517.41L450.006 81.8373"
            fill="#092326"
          />
          <path
            d="M765.487 92.6818L711.286 140.105H661.115L740.888 71.0024L661.115 1.89932H711.286L765.487 49.323L789.392 71.0024"
            fill="#092326"
          />
          <path
            d="M802.596 60.159L870 1.89563H819.829L777.858 38.4796"
            fill="#092326"
          />
          <path
            d="M778.135 103.789L819.828 140.102H869.999L802.873 82.1092"
            fill="#092326"
          />
          <path
            d="M680.572 70.9986C680.572 118.016 648.33 140.102 611.778 140.102H508.935V1.89551H611.778C648.469 1.89551 680.572 23.9814 680.572 70.9986ZM644.16 70.9986C644.16 37.3955 625.537 31.7047 598.02 31.7047H545.347V110.292H598.02C625.537 110.292 644.16 104.602 644.16 70.9986Z"
            fill="#092326"
          />
        </svg>

        <button
          type="button"
          className={login ? 'active-wallet' : 'wallet'}
          onClick={() => setLogin((prev) => !prev)}
        >
          {!login ? (
            'Connect wallet'
          ) : (
            <>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4244_8885)">
                  <path
                    d="M16.1493 0.719971L9.95618 5.89212L11.1078 2.844L16.1493 0.719971Z"
                    fill="#E17726"
                    stroke="#E17726"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.86401 0.719971L8.00196 5.94041L6.90548 2.844L1.86401 0.719971Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.9193 12.7125L12.2715 15.5537L15.7999 16.6502L16.8106 12.7746L13.9193 12.7125Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.20862 12.7746L2.21323 16.6502L5.73553 15.5537L4.09382 12.7125L1.20862 12.7746Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.54553 7.91272L4.56543 9.58163L8.05707 9.76093L7.94069 5.51978L5.54553 7.91272Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4675 7.91282L10.0357 5.47156L9.95605 9.76101L13.4477 9.5817L12.4675 7.91282Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.7356 15.5537L7.84893 14.402L6.02964 12.8021L5.7356 15.5537Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1644 14.402L12.2716 15.5537L11.9837 12.8021L10.1644 14.402Z"
                    fill="#E27625"
                    stroke="#E27625"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.2716 15.5538L10.1644 14.4022L10.3359 15.9469L10.3175 16.602L12.2716 15.5538Z"
                    fill="#D5BFB2"
                    stroke="#D5BFB2"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.7356 15.5538L7.69582 16.602L7.68356 15.9469L7.84893 14.4022L5.7356 15.5538Z"
                    fill="#D5BFB2"
                    stroke="#D5BFB2"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.73244 11.7815L5.98047 11.2022L7.21784 10.5609L7.73244 11.7815Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2808 11.7815L10.7954 10.5609L12.0389 11.2022L10.2808 11.7815Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.73555 15.5537L6.04186 12.7125L4.09387 12.7746L5.73555 15.5537Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9714 12.7125L12.2716 15.5537L13.9194 12.7746L11.9714 12.7125Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.4477 9.5816L9.95605 9.76091L10.2807 11.7815L10.7953 10.5609L12.0388 11.2022L13.4477 9.5816Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.98046 11.2022L7.21783 10.5609L7.73243 11.7815L8.05707 9.76091L4.56543 9.5816L5.98046 11.2022Z"
                    fill="#CC6228"
                    stroke="#CC6228"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.56555 9.5816L6.02962 12.8022L5.98058 11.2022L4.56555 9.5816Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0389 11.2022L11.9838 12.8022L13.4478 9.5816L12.0389 11.2022Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.05736 9.76086L7.73267 11.7815L8.14307 14.1675L8.23497 11.0229L8.05736 9.76086Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.95609 9.76086L9.78455 11.016L9.87033 14.1675L10.2807 11.7815L9.95609 9.76086Z"
                    fill="#E27525"
                    stroke="#E27525"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2808 11.7816L9.87036 14.1676L10.1644 14.4021L11.9837 12.8022L12.0389 11.2023L10.2808 11.7816Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.98047 11.2023L6.02951 12.8022L7.84879 14.4021L8.14283 14.1676L7.73244 11.7816L5.98047 11.2023Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3176 16.602L10.336 15.9469L10.1767 15.7951H7.83671L7.68356 15.9469L7.69582 16.602L5.7356 15.5538L6.42165 16.1882L7.8122 17.2709H10.1951L11.5917 16.1882L12.2717 15.5538L10.3176 16.602Z"
                    fill="#C0AC9D"
                    stroke="#C0AC9D"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1644 14.402L9.87032 14.1676H8.14286L7.84887 14.402L7.68347 15.9468L7.8366 15.7951H10.1766L10.3359 15.9468L10.1644 14.402Z"
                    fill="#161616"
                    stroke="#161616"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.4126 6.23003L16.9333 3.37502L16.1492 0.719971L10.1644 5.71975L12.4677 7.91269L15.7204 8.98164L16.4371 8.03687L16.1247 7.78168L16.6209 7.2714L16.2411 6.94036L16.7373 6.51278L16.4126 6.23003Z"
                    fill="#763E1A"
                    stroke="#763E1A"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.07996 3.37502L1.60677 6.23003L1.26985 6.51278L1.77216 6.94036L1.39237 7.2714L1.88855 7.78168L1.57614 8.03687L2.29284 8.98164L5.5456 7.91269L7.84883 5.71975L1.86405 0.719971L1.07996 3.37502Z"
                    fill="#763E1A"
                    stroke="#763E1A"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7204 8.98159L12.4677 7.91272L13.4478 9.5816L11.9838 12.8021L13.9195 12.7745H16.8108L15.7204 8.98159Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5456 7.91272L2.29286 8.98159L1.20862 12.7745H4.09382L6.02952 12.8021L4.5655 9.5816L5.5456 7.91272Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.95611 9.76097L10.1644 5.71976L11.1077 2.84406H6.90552L7.84885 5.71976L8.05713 9.76097L8.13677 11.0299L8.14289 14.1676H9.87035L9.87647 11.0299L9.95611 9.76097Z"
                    fill="#F5841F"
                    stroke="#F5841F"
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4244_8885">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>{' '}
              0x1jqcds12...sk4e
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
