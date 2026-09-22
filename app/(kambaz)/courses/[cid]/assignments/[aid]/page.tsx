import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <select id="wd-group">
              <option value="assignemnts">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="projects">PROJECTS</option>
            </select>
          </tr>
          <tr>
            <select id="wd-display-grade-as">
              <option value="total">TOTAL</option>
              <option value="percentage">PERCENTAGE</option>
            </select>
          </tr>
          <tr>
            <select id="wd-submission-type">
              <option value="in-person">In Person</option>
              <option value="online">Online</option>
            </select>
          </tr>
          <tr>
            <label>
              <input id="wd-text-entry" type="checkbox">
                Text Entry
              </input>
            </label>
            <label>
              <input id="wd-website-url" type="checkbox">
                Website URL
              </input>
            </label>
            <label>
              <input id="wd-media-recordings" type="checkbox">
                Media Recordings
              </input>
            </label>
            <label>
              <input id="wd-student-annotation" type="checkbox">
                Student Annotation
              </input>
            </label>
            <label>
              <input id="wd-file-upload" type="checkbox">
                File Upload
              </input>
            </label>
          </tr>
          <tr>
            <select id="wd-assign-to">
              <option value="everyone">Everyone</option>
            </select>
          </tr>
          <tr>
            <label>Due Date:</label>
            <input id="wd-due-date" type="date"></input>
            <label>Available from:</label>
            <input id="wd-available-from" type="date"></input>
            <label>Until:</label>
            <input id="wd-available-until" type="date"></input>
          </tr>
          <tr>
            <Link id="wd-cancel" href="/">
              <button>Cancel</button>
            </Link>
            <Link id="wd-save" href="/">
              <button>Save</button>
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
