import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMenulist } from "../../Utils/Utils";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMenulist().then((menuList) => {
      setData(menuList);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-center py-8">
        <Link to="/content">
          <img
            className="max-w-60"
            src="/static/images/Benj_9780307347466_epub_cvi_r1.jpg"
            alt=""
          />
        </Link>
      </div>

      <div>
        <div className="flex gap-2 mb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12H3m13 6H3M16 6H3m18 6h.01M21 18h.01M21 6h.01"
            />
          </svg>
          <p className="font-semibold">Contents</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 ">
          {data.map((item) => (
            <a key={item?.id} href={`/content${item.link}`}>
              <div className="border py-5 px-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
