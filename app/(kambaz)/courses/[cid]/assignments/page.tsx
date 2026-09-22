import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        type="search"
        placeholder="Search for Assignments"
      ></input>
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>{" "}
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="1234"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          cid={cid}
          aid="2345"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          cid={cid}
          aid="3456"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
        ></AssignmentItem>
      </ul>
    </div>
  );
}
