"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const existing = assignments.find((a) => a._id === aid && a.course === cid);
  const [draft, setDraft] = useState<Omit<Assignment, "_id">>({
    title: existing?.title ?? "",
    course: cid,
    description: existing?.description ?? "",
    points: existing?.points ?? 100,
    due: existing?.due ?? "",
    available: existing?.available ?? "",
    availableUntil: existing?.availableUntil ?? "",
  });

  const save = () => {
    if (existing) {
      updateAssignment({ ...existing, ...draft });
    } else {
      addAssignment(draft);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="w-[460px]">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        value={draft.title}
        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        className="rounded p-2 w-full"
      />
      <br />
      <p id="wd-assignment-id">Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        className="rounded p-2 w-full"
        value={draft.description}
        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
      ></textarea>
      <br />
      <div className="grid grid-cols-[150px_1fr] gap-3">
        <label htmlFor="wd-points" className="text-right pt-2">
          Points
        </label>
        <div className="text-left">
          <input
            id="wd-points"
            type="number"
            value={draft.points}
            onChange={(e) =>
              setDraft({ ...draft, points: Number(e.target.value) })
            }
            className="rounded p-2 w-full"
          />
        </div>
        <label className="text-right pt-2">Assign</label>
        <div className="rounded outline outline-2 outline-gray-400 p-4 text-left">
          <label className="font-bold" htmlFor="wd-due-date">
            Due
          </label>
          <br />
          <input
            className="rounded p-2"
            id="wd-due-date"
            type="date"
            value={draft.due}
            onChange={(e) => setDraft({ ...draft, due: e.target.value })}
          />
          <br />
          <div className="grid grid-cols-2 gap-1">
            <label className="font-bold" htmlFor="wd-available-from">
              Available from
            </label>
            <label className="font-bold" htmlFor="wd-available-until">
              Until
            </label>
            <input
              className="rounded p-2"
              id="wd-available-from"
              type="date"
              value={draft.available}
              onChange={(e) =>
                setDraft({ ...draft, available: e.target.value })
              }
            />
            <input
              className="rounded p-2"
              id="wd-available-until"
              type="date"
              value={draft.availableUntil}
              onChange={(e) =>
                setDraft({ ...draft, availableUntil: e.target.value })
              }
            />
          </div>
        </div>

        <div></div>
        <div className="flex justify-end gap-2">
          <Link
            href={`/courses/${cid}/assignments`}
            id="wd-cancel"
            className="rounded border border-gray-400 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 no-underline"
          >
            Cancel
          </Link>
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
