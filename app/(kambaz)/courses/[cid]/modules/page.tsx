"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import { useModulesStore } from "../../../store/modulesStore";
import ModulesControls from "./ModuleControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules).filter(
    (module) => module.course === cid,
  );
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
