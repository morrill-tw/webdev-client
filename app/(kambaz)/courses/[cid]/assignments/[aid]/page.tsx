import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="w-[460px]">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="rounded p-2 w-full"
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        className="rounded p-2 w-full"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      ></textarea>
      <br />
      <div className="grid grid-cols-[150px_1fr] gap-3">
        <label htmlFor="wd-points" className="text-right pt-2">
          Points
        </label>
        <div className="text-left">
          <input
            id="wd-points"
            defaultValue={100}
            className="rounded p-2 w-full"
          />
        </div>

        <label htmlFor="wd-group" className="text-right pt-2">
          Assignment Group
        </label>
        <div className="text-left">
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="rounded p-2 w-full"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </select>
        </div>

        <label htmlFor="wd-display-grade-as" className="text-right pt-2">
          Display Grade as
        </label>
        <div className="text-left">
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className="rounded p-2 w-full"
          >
            <option value="Percentage">Percentage</option>
            <option value="Fraction">Fraction</option>
          </select>
        </div>

        <label htmlFor="wd-submission-type" className="text-right pt-2">
          Submission Type
        </label>
        <div className="rounded outline outline-2 outline-gray-400 p-4 text-left">
          <select
            className="rounded p-2"
            id="wd-submission-type"
            defaultValue="Online"
          >
            <option value="Online">Online</option>
            <option value="In Person">In Person</option>
          </select>
          <h4>Online Entry Options</h4>
          <input
            type="checkbox"
            name="online-entry-option"
            id="wd-text-entry"
          />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input
            type="checkbox"
            name="online-entry-option"
            id="wd-text-entry"
          />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input
            type="checkbox"
            name="online-entry-option"
            id="wd-website-url"
          />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />
          <input
            type="checkbox"
            name="online-entry-option"
            id="wd-media-recordings"
          />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br />
          <input
            type="checkbox"
            name="online-entry-option"
            id="wd-text-entry"
          />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>

        <label className="text-right pt-2">Assign</label>
        <div className="rounded outline outline-2 outline-gray-400 p-4 text-left">
          <label className="font-bold" htmlFor="wd-assign-to">
            Assign to
          </label>
          <br />
          <select
            className="rounded p-2"
            id="wd-assign-to"
            defaultValue="Everyone"
          >
            <option value="Percentage">Everyone</option>
          </select>
          <br />
          <label className="font-bold" htmlFor="wd-due-date">
            Due
          </label>
          <br />
          <input className="rounded p-2" id="wd-due-date" type="date" />
          <br />
          <div className="grid grid-cols-2 gap-1">
            <label className="font-bold" htmlFor="wd-available-from">
              Available from
            </label>
            <label className="font-bold" htmlFor="wd-available-until">
              Until
            </label>
            <input className="rounded p-2" id="wd-available-from" type="date" />
            <input
              className="rounded p-2"
              id="wd-available-until"
              type="date"
            />
          </div>
        </div>

        <label htmlFor="wd-ai-editor-notes" className="text-right pt-2">
          Sample notes
        </label>
        <div className="text-left">
          <textarea
            id="wd-ai-editor-notes"
            className="rounded p-2 w-full"
          ></textarea>
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
          <Link
            href={`/courses/${cid}/assignments`}
            id="wd-save"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
