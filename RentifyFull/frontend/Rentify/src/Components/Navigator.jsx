import { Link } from "react-scroll";

export default function Navigator() {
  return (
    <div
      id="rightCont"
      className="fixed w-[10vw] flex justify-center items-center h-[31vh] right-0 group z-20 top-[29vh]"
    >
      <div
        id="navigator"
        className="absolute flex flex-col top-0 h-[100%] w-[4vw]  object-center rounded-l-full right-[0vw] transform translate-x-[100%] transition-transform duration-300 group-hover:translate-x-0"
      >
        <div id="homeBtn" className="relative left-2 flex justify-center mt-4">
          <Link
            to="heropg"
            spy={true}
            smooth={true}
            offset={-77}
            duration={500}
            activeClass="active"
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vh"
                viewBox="0 0 640 512"
                className="cursor-pointer text-test_color1 transform group hover:scale-110 transition-transform duration-300"
              >
                <path
                  fill="currentColor"
                  d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1c1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div id="money" className="relative left-2 flex justify-center mt-4">
          <Link
            to="moneypg"
            spy={true}
            smooth={true}
            offset={-77}
            duration={500}
            activeClass="active"
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vh"
                viewBox="0 0 640 512"
                className="cursor-pointer text-test_color1 transform group hover:scale-110 transition-transform duration-300"
              >
                <path
                  fill="currentColor"
                  d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23l-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1L535 41zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zm384 192c-35.3 0-64 28.7 64 64h64v-64zm-224 32a96 96 0 1 0 0-192a96 96 0 1 0 0 192z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div id="security" className="relative left-2 flex justify-center mt-4">
          <Link
            to="securitypg"
            spy={true}
            smooth={true}
            offset={-77}
            duration={500}
            activeClass="active"
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vh"
                viewBox="0 0 640 512"
                className="cursor-pointer text-test_color1 transform group hover:scale-110 transition-transform duration-300"
              >
                <path
                  fill="currentColor"
                  d="M224 64c-44.2 0-80 35.8-80 80v48h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h16v-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1.8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div id="demo" className="relative left-2 flex justify-center mt-4">
          <Link
            to="demopg"
            spy={true}
            smooth={true}
            offset={-77}
            duration={500}
            activeClass="active"
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vh"
                viewBox="0 0 640 512"
                className="cursor-pointer text-test_color1 transform group hover:scale-110 transition-transform duration-300"
              >
                <path
                  fill="currentColor"
                  d="M448 32h-86.1l-1 1l-127 127H326l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40L394 160h118zM294.1 32h-92.2l-1 1l-127 127H166l1-1L294 32zM64 32C28.7 32 0 60.7 0 96v64h6.1l1-1l127-127H64zm448 160H0v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div id="contact" className="relative left-2 flex justify-center mt-4">
          <Link
            to="foter"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vh"
                viewBox="0 0 640 512"
                className="cursor-pointer text-test_color1 transform group hover:scale-110 transition-transform duration-300 opa"
              >
                <path
                  fill="currentColor"
                  d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9c-22.8 21-53.3 33.9-86.8 33.9c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v112c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-106-86-192-192-192zm64 192a64 64 0 1 0-128 0a64 64 0 1 0 128 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
