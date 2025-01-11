import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { fetchMenulist } from "../../Utils/Utils";

const Content = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuList = await fetchMenulist();
        setData(menuList);
      } catch (err) {
        setError("Failed to fetch menu data");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-5xl m-auto mt-12 relative md:grid grid-cols-[1fr,2fr]">
      <nav className="flex-col gap-8 hidden sm:flex mb-6">
        <ul
          className="sticky top-48 max-w-[16rem] text-sm flex flex-col [@media_(max-height:1240px)]:overflow-y-scroll h-[calc(100vh-160px)] gap-1 mr-4 "
          style={{
            scrollbarWidth: "none",
          }}
        >
          {data?.map((item) => (
            <NavLink
              key={item.id}
              to={`/content${item.link}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-neutral-100 p-2 rounded"
                  : "p-2 hover:bg-neutral-100 rounded"
              }
            >
              <span className="font-semibold text-neutral-900">
                {item.name}:{" "}
              </span>
              <span>{item.description}</span>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
