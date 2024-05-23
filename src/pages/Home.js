import { Link } from "react-router-dom";

const Home = () => {
  return <>
    {/* <Discover />
    <Blog />
    <DbDiscover />
    <Faq/> */}  
    <Link to="/discover" className="home-image">
      <svg width="230" height="380" viewBox="0 0 230 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="117.417" cy="115.583" r="112.583" fill="#B7D958" />
        <path d="M47.9205 204.752C46.7626 201.407 44.5613 199.051 41.6041 197.213C39.06 195.632 36.1801 195.064 33.6577 193.523C28.6777 190.479 29.9901 184.21 29.9901 179.486C29.9901 177.229 27.8151 176.457 26.2773 175.208C24.6722 173.903 21.2201 172.923 20.21 171.155C19.8945 170.603 18.2279 170.974 17.7196 170.929C15.8837 170.764 15.2703 167.701 14.6633 166.356C12.9024 162.453 10.5069 158.308 9.81851 154.04C9.52609 152.227 9.17838 150.222 8.57335 148.493C6.71922 143.196 6.2226 137.272 4.92842 131.808C3.39996 125.354 3.67491 119.069 2.77768 112.565C1.71099 104.831 3.31531 96.6802 1.64572 89.0197C0.431817 83.45 0.592106 78.2689 5.10953 74.5985C7.57522 72.5951 8.59273 72.0599 11.7881 71.4063C14.101 70.9332 16.9026 67.1653 18.263 65.6107C23.2818 59.8748 26.7707 53.1032 30.8051 46.6389C33.385 42.5053 36.1895 38.5979 38.9553 34.5948C39.8319 33.326 40.8053 32.3454 42.0795 31.4706C50.8255 25.4659 59.9549 20.1652 69.9485 16.4834C77.0009 13.8851 84.6316 12.5408 91.9086 10.6424C97.9554 9.06499 105.068 6.34094 111.446 6.34094C113.413 6.34094 115.485 6.70063 117.423 6.97484C124.478 7.97316 131.513 9.1345 138.568 10.1443C147.519 11.4256 156.462 12.9195 165.351 14.5817C167.339 14.9535 170.086 15.2573 171.803 16.4834C183.066 24.5283 196.386 29.6218 207.346 38.036C210.435 40.4068 212.24 44.9877 214.161 48.2689C216.638 52.501 218.41 56.9286 220.092 61.5129C222.265 67.4303 224.05 73.357 224.552 79.6697C225.217 88.0263 224.779 96.5353 224.779 104.912C224.779 113.643 224.45 121.582 222.311 130.065C220.691 136.49 218.742 142.851 217.262 149.308C216.159 154.124 215.975 159.078 214.614 163.843C213.142 168.992 210.244 174.108 207.437 178.626C203.179 185.481 197.003 192.19 190.956 197.507C183.798 203.801 177.885 211.266 169.992 216.751C165.587 219.811 159.708 222.07 154.257 222.252C138.267 222.785 121.741 222.908 105.809 221.437C91.7697 220.141 77.59 220.046 63.4963 219.83C60.8603 219.789 53.0158 218.663 51.905 215.664C51.1538 213.636 48.8506 211.421 48.7355 209.234C48.65 207.611 48.0919 206.363 47.196 205.069C46.7672 204.449 47.1055 202.669 47.1055 201.899" stroke="#040404" strokeWidth="2" strokeLinecap="round" />
        <path d="M118.189 112.716C117.371 113.283 114.908 114.733 115.948 115.772C116.804 116.629 117.209 116.791 118.393 116.791C121.016 116.791 119.178 113.865 118.189 113.124" stroke="#040404" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.50634 136C5.96387 140.34 6.38726 127.56 5.73451 123.236C4.69043 116.319 4.94697 109.148 5.07402 102.16C5.19895 95.2893 7.03086 86.9075 9.51727 80.4843C12.7095 72.2376 13.793 63.1063 17.8033 55.0857C19.4372 51.8179 21.7134 49.1154 23.6276 46.0791C25.9952 42.3236 28.1596 38.2783 31.7335 35.5114C34.9633 33.0109 37.1714 29.3765 40.4399 26.9251C43.1466 24.8951 46.3938 23.4142 48.846 21.1008C51.6632 18.4432 54.097 17.126 57.6125 15.5768C60.413 14.3427 62.5389 12.009 65.4782 10.8333C69.2442 9.32694 72.932 7.51212 76.7064 6.08987C79.5874 5.00427 82.7751 5.08475 85.5929 4.0784C90.6908 2.25774 97.0429 3.30161 102.285 3.77818C108.908 4.38025 115.782 4.34859 122.37 4.34859C131.456 4.34859 140.493 2.18701 149.63 2.18701C156.95 2.18701 162.865 4.09972 169.084 7.83114C174.862 11.2981 181.462 13.8634 186.827 18.0987C189.864 20.4966 192.477 23.134 195.804 25.1538C198.76 26.9486 200.778 30.1779 203.099 32.7193C213.618 44.2402 222.081 57.14 224.354 72.7987C225.487 80.6 227.176 88.0516 227.176 95.9756C227.176 107.628 224.384 118.81 222.313 130.201C220.418 140.623 219.744 151.589 216.429 161.724C214.572 167.4 212.803 173.116 210.724 178.716C208.466 184.8 204.542 190.124 201.117 195.588C195.624 204.355 186.616 211.665 177.82 216.964C168.392 222.644 156.185 224.06 145.637 226.451C140.215 227.68 134.659 227.118 129.185 227.652C123.973 228.16 118.703 228.388 113.513 227.532C102.384 225.696 91.2221 224.471 80.189 221.858C72.9786 220.15 66.2295 216.971 59.3838 214.292C54.0611 212.209 51.0035 209.229 49.0862 204.025C47.4061 199.464 45.5784 194.454 41.5507 191.355C39.7456 189.967 38.3167 188.291 36.1468 187.543C33.9273 186.777 31.6301 186.032 30.2024 183.97C27.5772 180.178 30.9141 174.408 28.5812 170.52C27.3564 168.479 25.5397 168.291 23.4475 168.058C21.23 167.812 18.9919 166.34 17.2029 165.116C13.7723 162.769 12.9515 159.79 11.3486 156.05C9.62815 152.035 9.92756 148.164 9.09697 144.011C8.32263 140.139 6.14242 135.448 6.14242 131.5" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M102.959 373V364.273H108.43V365.406H104.276V368.065H108.145V369.195H104.276V371.866H108.482V373H102.959ZM117.233 364.273V373H116.023L111.587 366.599H111.506V373H110.189V364.273H111.408L115.848 370.682H115.929V364.273H117.233ZM118.724 365.406V364.273H125.478V365.406H122.755V373H121.442V365.406H118.724ZM126.971 373V364.273H130.081C130.757 364.273 131.319 364.389 131.765 364.622C132.213 364.855 132.549 365.178 132.77 365.589C132.992 365.999 133.103 366.472 133.103 367.009C133.103 367.543 132.99 368.013 132.766 368.419C132.544 368.822 132.209 369.136 131.76 369.361C131.314 369.585 130.753 369.697 130.077 369.697H127.721V368.564H129.958C130.384 368.564 130.73 368.503 130.998 368.381C131.267 368.259 131.465 368.081 131.59 367.848C131.715 367.615 131.777 367.335 131.777 367.009C131.777 366.679 131.713 366.393 131.586 366.152C131.461 365.911 131.263 365.726 130.993 365.598C130.726 365.467 130.375 365.402 129.941 365.402H128.287V373H126.971ZM131.279 369.062L133.435 373H131.935L129.821 369.062H131.279ZM135.442 373H134.044L137.185 364.273H138.706L141.847 373H140.449L137.982 365.858H137.914L135.442 373ZM135.676 369.582H140.211V370.69H135.676V369.582Z" fill="#333333" />
        <path d="M49.6847 280.727V286.409H32.8523V280.727H49.6847ZM36.7053 308V278.756C36.7053 276.78 37.09 275.14 37.8594 273.838C38.6406 272.536 39.706 271.559 41.0554 270.908C42.4048 270.257 43.9377 269.932 45.6541 269.932C46.8142 269.932 47.8736 270.021 48.8324 270.198C49.803 270.376 50.5251 270.536 50.9986 270.678L49.6491 276.359C49.3532 276.265 48.9863 276.176 48.5483 276.093C48.1222 276.01 47.6842 275.969 47.2344 275.969C46.1217 275.969 45.3464 276.229 44.9084 276.75C44.4704 277.259 44.2514 277.975 44.2514 278.898V308H36.7053ZM63.8695 271.636V308H56.3056V271.636H63.8695ZM126.218 308V280.727H133.426V285.539H133.746C134.314 283.941 135.261 282.68 136.587 281.757C137.913 280.834 139.499 280.372 141.346 280.372C143.216 280.372 144.808 280.84 146.122 281.775C147.436 282.698 148.312 283.953 148.75 285.539H149.034C149.59 283.977 150.596 282.728 152.052 281.793C153.52 280.846 155.254 280.372 157.255 280.372C159.8 280.372 161.865 281.183 163.451 282.805C165.049 284.415 165.848 286.699 165.848 289.658V308H158.302V291.15C158.302 289.635 157.9 288.498 157.095 287.741C156.29 286.983 155.284 286.604 154.076 286.604C152.703 286.604 151.632 287.042 150.863 287.918C150.093 288.782 149.708 289.925 149.708 291.345V308H142.375V290.99C142.375 289.652 141.991 288.587 141.221 287.794C140.464 287.001 139.463 286.604 138.221 286.604C137.38 286.604 136.623 286.817 135.948 287.244C135.285 287.658 134.758 288.244 134.368 289.001C133.977 289.747 133.782 290.623 133.782 291.629V308H126.218ZM173.823 308V280.727H181.387V308H173.823ZM177.623 277.212C176.498 277.212 175.534 276.839 174.729 276.093C173.936 275.335 173.539 274.43 173.539 273.376C173.539 272.335 173.936 271.441 174.729 270.695C175.534 269.938 176.498 269.559 177.623 269.559C178.747 269.559 179.706 269.938 180.499 270.695C181.304 271.441 181.707 272.335 181.707 273.376C181.707 274.43 181.304 275.335 180.499 276.093C179.706 276.839 178.747 277.212 177.623 277.212ZM207.468 318.227V303.632H207.237C206.882 304.39 206.379 305.141 205.728 305.887C205.089 306.621 204.254 307.231 203.225 307.716C202.207 308.201 200.964 308.444 199.496 308.444C197.424 308.444 195.548 307.911 193.867 306.846C192.198 305.769 190.873 304.188 189.89 302.105C188.919 300.01 188.434 297.441 188.434 294.399C188.434 291.274 188.937 288.676 189.943 286.604C190.95 284.521 192.287 282.964 193.956 281.935C195.637 280.893 197.478 280.372 199.478 280.372C201.005 280.372 202.278 280.633 203.296 281.153C204.325 281.662 205.154 282.302 205.781 283.071C206.421 283.829 206.906 284.574 207.237 285.308H207.557V280.727H215.014V318.227H207.468ZM201.893 302.425C203.112 302.425 204.142 302.093 204.982 301.43C205.835 300.756 206.486 299.815 206.936 298.607C207.397 297.4 207.628 295.985 207.628 294.364C207.628 292.742 207.403 291.333 206.953 290.138C206.503 288.942 205.852 288.019 205 287.368C204.148 286.717 203.112 286.391 201.893 286.391C200.65 286.391 199.602 286.729 198.75 287.403C197.898 288.078 197.253 289.013 196.815 290.209C196.377 291.404 196.158 292.789 196.158 294.364C196.158 295.95 196.377 297.353 196.815 298.572C197.265 299.779 197.91 300.726 198.75 301.413C199.602 302.087 200.65 302.425 201.893 302.425Z" fill="black" />
        <g clipPath="url(#clip0_654_983)">
          <path d="M84.7847 299.389C84.7847 304.8 85.094 306.239 85.094 306.239H79.1467C78.91 306.239 78.6831 306.332 78.5158 306.497C78.3485 306.662 78.2545 306.886 78.2545 307.12C78.2545 307.353 78.3485 307.577 78.5158 307.742C78.6831 307.907 78.91 308 79.1467 308H89.8529C90.0895 308 90.3164 307.907 90.4837 307.742C90.6511 307.577 90.745 307.353 90.745 307.12C90.745 306.886 90.6511 306.662 90.4837 306.497C90.3164 306.332 90.0895 306.239 89.8529 306.239H86.8789C86.8789 306.239 86.754 305.659 86.663 303.85C88.1964 303.791 89.6084 303.677 90.8283 303.547C93.926 303.219 96.3289 300.616 95.9631 297.458C95.4784 293.279 94.0515 289.227 92.0714 286.196C90.1187 283.209 87.4767 281 84.4992 281C81.5228 281 78.8802 283.209 76.9281 286.196C74.9474 289.227 73.5211 293.279 73.037 297.458C72.6706 300.616 75.0735 303.219 78.1712 303.548C79.5475 303.695 81.1677 303.82 82.9307 303.87C82.9723 303.039 83.008 301.947 83.0199 300.53C82.2785 299.825 81.5445 299.113 80.818 298.393C80.0853 297.673 79.3602 296.945 78.6429 296.209C78.3895 295.949 78.289 295.577 78.515 295.294C78.6395 295.139 78.7816 294.999 78.9385 294.876C79.2258 294.653 79.6023 294.752 79.8664 295.002C80.2779 295.391 81.0024 296.085 82.079 297.148C82.4347 297.498 82.7487 297.811 83.0247 298.087C83.0235 295.03 83.0187 293.153 83.0152 292.268C83.014 291.873 83.1442 291.452 83.5255 291.33C83.772 291.252 84.0373 291.252 84.2839 291.33C84.6657 291.452 84.7954 291.873 84.7942 292.268L84.7882 294.492C85.0464 294.234 85.3366 293.946 85.6608 293.626C86.3908 292.903 87.1283 292.188 87.8734 291.48C88.1381 291.23 88.514 291.131 88.8013 291.354C88.9587 291.476 89.1008 291.617 89.2248 291.772C89.4508 292.055 89.3503 292.427 89.0975 292.687C88.3801 293.423 87.655 294.151 86.9223 294.871C86.2169 295.569 85.5045 296.261 84.7853 296.946C84.7847 297.76 84.7845 298.575 84.7847 299.389Z" fill="black" />
        </g>
        <path d="M120.431 286.096C119.346 284.86 117.806 284.066 116.127 283.876C115.619 282.727 114.767 281.747 113.677 281.057C112.587 280.368 111.307 280 109.999 280C108.691 280 107.412 280.368 106.322 281.057C105.232 281.747 104.38 282.727 103.871 283.876C102.953 283.982 102.067 284.27 101.271 284.719C100.475 285.169 99.7862 285.772 99.2475 286.489C98.7089 287.206 98.3326 288.023 98.1425 288.886C97.9523 289.749 97.9525 290.641 98.143 291.504C98.3496 292.47 98.7935 293.375 99.4382 294.146C99.3588 294.517 99.3181 294.894 99.3167 295.272C99.3188 296.96 100.023 298.577 101.274 299.77C102.526 300.963 104.223 301.634 105.993 301.636C106.915 301.629 107.825 301.436 108.663 301.071V308H111.334V301.071C112.172 301.437 113.082 301.629 114.004 301.636C115.774 301.634 117.471 300.963 118.723 299.77C119.974 298.577 120.678 296.96 120.681 295.272C120.679 294.894 120.638 294.517 120.559 294.146C121.209 293.366 121.654 292.45 121.86 291.473C122.066 290.532 122.045 289.559 121.797 288.627C121.549 287.695 121.082 286.83 120.431 286.096ZM111 297.054V298.454H108.997V293.236L105.437 290.975L106.544 289.387L108.997 290.945V286.363H111V294.763L113.449 293.207L114.56 294.795L111 297.054Z" fill="black" />
        <defs>
          <clipPath id="clip0_654_983">
            <rect width="28" height="28" fill="white" transform="translate(70 280)" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  </>;
};

export default Home;