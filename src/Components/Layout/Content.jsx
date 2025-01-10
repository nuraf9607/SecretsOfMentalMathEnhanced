import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchMenulist } from "../../Utils/Utils";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMenulist().then((menuList) => {
      setData(menuList);
    });
  }, []);
  return (
    <div className="w-full  max-w-5xl m-auto mt-10 relative md:grid grid-cols-[1fr,2fr] ">
      <nav className="flex-col gap-8 hidden sm:flex ">
        <ul className="sticky top-48 max-w-[16rem] text-sm flex flex-col gap-3  [@media_(max-height:840px)]:overflow-y-scroll h-[calc(100vh-260px)]">
          {data?.map((item) => (
            <a
              key={item.id}
              className="no-underline"
              href={`/content${item.link}`}
            >
              <li className="pr-2">
                <span className="font-semibold text-neutral-900">
                  {item.name}:{" "}
                </span>
                <span>{item.description}</span>
              </li>
            </a>
          ))}
        </ul>
      </nav>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Content;
