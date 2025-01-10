import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import { fetchMenulist } from "./Utils/Utils";
function App() {
  const menuLocation = useLocation();
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMenulist().then((menuList) => {
      setData(menuList);
    });
  }, []);
  return (
    <div className="min-h-screen ">
      <header
        className="pt-8 pb-4  sticky top-0 bg-white z-10 "
        style={{ borderBottom: "1px solid #ccc" }}
      >
        <a href="/">
          <img
            className="max-w-16"
            src="/Static/images/Mental-icon.png"
            alt=""
          />
        </a>
        <p>SECRETS OF MENTAL MATH</p>
        {menuLocation.pathname === "/" ? (
          ""
        ) : (
          <nav
            className="block sm:hidden pt-7 mt-5 "
            d
            style={{ borderTop: "1px solid #ccc" }}
          >
            <div
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"></path>
                    <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h22M5 16h22M5 24h22"
                  ></path>
                </svg>
              )}
              <div
                className={`mt-4 fixed left-0 right-0 h-[100vh] py-5 pl-10 pr-10 bg-white ${
                  open ? "block" : "hidden"
                } sm:hidden overflow-scroll drop-shadow-xl`}
              >
                <ul className="grid gap-5">
                  {/* <Link className="no-underline" to="/content/ChapterZero">
                    <li className="">
                      <span className="font-semibold text-neutral-950">
                        Chapter 0:
                      </span>
                      {" "}
                      <span className=" text-neutral-900 ">
                        Quick Tricks: Easy (and Impressive) Calculations
                      </span>
                    </li>
                  </Link>
                  <Link className="no-underline" to="/content/ChapterOne">
                    <li>
                      <span className="font-semibold text-neutral-900">
                        Chapter 1:{" "}
                      </span>
                      <span className="">
                        A Little Give and Take: Mental Addition and Subtraction
                      </span>
                    </li>
                  </Link> */}
                  {data.map((item) => (
                    <a
                      key={item.id}
                      className="no-underline"
                      href={`/content${item.link}`}
                    >
                      <li>
                        <span className="font-semibold text-neutral-900">
                          {item.name}:{" "}
                        </span>
                        <span className="">{item.description}</span>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </header>

      <Outlet></Outlet>

      <footer className="mt-24 pb-2 border-t-2">
        <img src="/Static/images/gojo-shocked.png" alt="" />
        <p>
          <span className="font-bold">Disclaimer:</span>{" "}
          <span className="text-sm">
            This website was created by the developer primarily as a personal
            project to practice and enhance coding skills. The purpose of this
            website is for personal use only, and it was not intended for public
            distribution or commercial use. It serves as a platform for the
            creator to experiment with various web development technologies,
            improve their coding abilities, and explore new concepts. Any
            content, features, or designs on the site are meant for learning and
            self-improvement, not for mass distribution or professional
            deployment.
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
