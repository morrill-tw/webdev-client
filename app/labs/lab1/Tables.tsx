export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>
      <table border={1} width="100%" id="wd-your-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Assignment</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Dev</td>
            <td align="center">A1</td>
            <td align="center">9/27</td>
          </tr>
          <tr>
            <td>Programming Languages</td>
            <td align="center">HW1</td>
            <td align="center">9/18</td>
          </tr>
          <tr>
            <td>Game Programming I</td>
            <td align="center">Psyduck Challenges 1-4</td>
            <td align="center">9/17</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
