import { useState } from "react";
import Task from "../../components/tasks/task";
import {
  faStar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar";

function Search() {

  return (
    <div className="flex">
      <div className="bg-slate-900 py-8 h-lvh p-2 text-white w-11 md:w-96">
        <Sidebar />
      </div>

      <div className="bg-searchImg w-lvw h-lvh p-7 flex flex-col justify-between gap-5">

        <div className="w-full h-full overflow-y-scroll no-scrollbar scroll-smooth flex flex-col gap-1">
          <Task
            iconCheck={faCheckCircle}
            text={"Aprender React JS"}
            iconStar={faStar}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
