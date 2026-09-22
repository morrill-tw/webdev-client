"use client";

export default function YourForm() {
  return (
    <div>
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Text Fields</h5>
        <label htmlFor="wd-your-form-full-name">Full name: </label>
        <input
          type="text"
          placeholder="Jane Doe"
          defaultValue="Jane Doe"
          id="wd-your-form-full-name"
        />
        <br />
        <label htmlFor="wd-your-form-username">Username: </label>
        <input
          type="text"
          placeholder="janedoe"
          defaultValue="janedoe"
          id="wd-your-form-username"
        />
        <br />
        <label htmlFor="wd-your-form-password">Password: </label>
        <input
          type="password"
          defaultValue="sample123!"
          id="wd-your-form-password"
        />

        <h5>Text boxes</h5>
        <label htmlFor="wd-your-form-bio">Biography: </label>
        <br />
        <textarea
          id="wd-your-form-bio"
          cols={30}
          rows={6}
          defaultValue="SAMPLE BIO: Jane Doe is a sample student in an introductory web development course. Replace this text with your own biography."
        />

        <h5>Radio buttons</h5>
        <label>Class standing:</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-standing"
          id="wd-your-form-standing-freshman"
        />
        <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-standing"
          id="wd-your-form-standing-sophomore"
        />
        <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-standing"
          id="wd-your-form-standing-junior"
          defaultChecked
        />
        <label htmlFor="wd-your-form-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-standing"
          id="wd-your-form-standing-senior"
        />
        <label htmlFor="wd-your-form-standing-senior">Senior</label>
        <br />
        <label>Enrollment status:</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-enrollment"
          id="wd-your-form-enrollment-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-form-enrollment-full-time">Full-time</label>
        <br />
        <input
          type="radio"
          name="wd-your-form-enrollment"
          id="wd-your-form-enrollment-part-time"
        />
        <label htmlFor="wd-your-form-enrollment-part-time">Part-time</label>

        <h5>Checkboxes</h5>
        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-form-interests"
          id="wd-your-form-interests-web"
          defaultChecked
        />
        <label htmlFor="wd-your-form-interests-web">Web Development</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-form-interests"
          id="wd-your-form-interests-mobile"
        />
        <label htmlFor="wd-your-form-interests-mobile">
          Mobile Development
        </label>
        <br />
        <input
          type="checkbox"
          name="wd-your-form-interests"
          id="wd-your-form-interests-data"
        />
        <label htmlFor="wd-your-form-interests-data">Data Science</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-form-interests"
          id="wd-your-form-interests-security"
        />
        <label htmlFor="wd-your-form-interests-security">Cybersecurity</label>

        <h5>Dropdowns</h5>
        <label htmlFor="wd-your-form-major">Major: </label>
        <br />
        <select id="wd-your-form-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Science</option>
          <option value="BUS">Business</option>
        </select>
        <br />
        <label htmlFor="wd-your-form-languages">
          Favorite programming languages:{" "}
        </label>
        <br />
        <select
          multiple
          id="wd-your-form-languages"
          defaultValue={["TS", "PY"]}
        >
          <option value="TS">TypeScript</option>
          <option value="PY">Python</option>
          <option value="JAVA">Java</option>
          <option value="CPP">C++</option>
          <option value="RUST">Rust</option>
        </select>

        <h5>Other HTML field types</h5>
        <label htmlFor="wd-your-form-email">Email: </label>
        <input
          type="email"
          placeholder="jane@university.edu"
          defaultValue="jane@university.edu"
          id="wd-your-form-email"
        />
        <br />
        <label htmlFor="wd-your-form-grad-year">Graduation year: </label>
        <input
          type="number"
          defaultValue="2027"
          min={2000}
          max={2100}
          id="wd-your-form-grad-year"
        />
        <br />
        <label htmlFor="wd-your-form-dob">Date of birth: </label>
        <input
          type="date"
          defaultValue="2004-05-15"
          min="1900-01-01"
          max="2026-12-31"
          id="wd-your-form-dob"
        />
        <br />
        <label htmlFor="wd-your-form-experience">
          Web development experience (0-10):{" "}
        </label>
        <input
          type="range"
          defaultValue="5"
          min="0"
          max="10"
          id="wd-your-form-experience"
        />

        <h5>Buttons</h5>
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
