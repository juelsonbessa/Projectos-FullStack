import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function TextMenu({ icon, text, linkAba, contTasks}) {
  const location = useLocation();
  const isActive = location.pathname === linkAba;

  return (
    <>
      <div className={`cursor-pointer hover:bg-slate-800 py-2 rounded-md duration-300 ease-in-out ${isActive ? 'bg-slate-800' : ''}`}>
        <Link to={linkAba} className="flex items-center gap-3 px-2">
          <FontAwesomeIcon icon={icon} className="text-sm text-blue-500 cursor-pointer" />
          <span className="hover:tracking-wide duration-300 ease-in-out w-full">
            {text}
          </span>

          <div className="bg-gray-500 rounded-3xl w-7 h-5 flex scale-75 items-center justify-center">
            <span className="text-xs">{contTasks}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default TextMenu;
