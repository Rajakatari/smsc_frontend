import "./index.css";

const dateDetails = [
  { label: "Today", id: "TODAY" },
  { label: "Yeterday", id: "YESTERDAY" },
  { label: "Last 7 Days", id: "LAST7DAYS" },
  { label: "This Month", id: "THIS_MONTH" },
  { label: "Last Month", id: "LASTH_MONTH" },
  { label: "Custom", id: "CUSTOM" },
];
const clientGroup = [
  { label: "1sixty", id: "1SIXTY" },
  { label: "3Mdigit", id: "3MDIGIT" },
  { label: "Advitha", id: "ADWITHA" },
  { label: "Alogic", id: "ALOGIC" },
  { label: "AlogicUD", id: "ALOGICUD" },
  { label: "BulksmsT", id: "BULKSMST" },
  { label: "DevBook", id: "DEVBOOK" },
];

const clientList = [
  { label: "3MdigitP1", id: "3MdigitP1" },
  { label: "3MdigitP2", id: "3MdigitP2" },
  { label: "3MdigiT", id: "3MdigiT" },
  { label: "3Mdigit10", id: "3Mdigit10" },
  { label: "3Mdigit11", id: "3Mdigit11" },
  { label: "3Mdigit12", id: "3Mdigit12" },
  { label: "3MdigiT2", id: "3MdigiT2" },
];

const ClientSummary = () => (
  <div className="home-container">
    <h3 className="smsc-report-heading">SMSC Consolidate Report</h3>
    <div className="filtering-section">
      <label htmlFor="date-drop-down">Date</label>
      <select id="date-drop-down">
        {dateDetails.map((e) => (
          <option value={e.id} key={e.id}>
            {e.label}
          </option>
        ))}
      </select>
      <label htmlFor="clients-group">Client Group</label>
      <select id="clients-group">
        {clientGroup.map((e) => (
          <option value={e.id} key={e.id}>
            {e.label}
          </option>
        ))}
      </select>
      <label htmlFor="clients-list">Client List</label>
      <select id="clients-list">
        {clientList.map((e) => (
          <option value={e.id} key={e.id}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
    <div>
      <h5>Total rows:0</h5>
    </div>
  </div>
);

export default ClientSummary;
