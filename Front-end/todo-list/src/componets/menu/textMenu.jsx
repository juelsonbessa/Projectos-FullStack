import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TextMenu({ icon, text, linkAba }) {
  return (
    <>
      <div className="cursor-pointer hover:bg-slate-800 py-2 rounded-md duration-300 ease-in-out">
        <Link to={linkAba} className="flex items-center gap-3">
          <FontAwesomeIcon icon={icon} className="text-sm text-gray-500 cursor-pointer pl-3" />
          <span className="hover:tracking-wide duration-300 ease-in-out w-full">
            {text}
          </span>

          <span className="text-xs bg-blue-800 rounded-full p-1">1</span>
        </Link>
      </div>
    </>
  );
}

export default TextMenu;
