import "../CSS/task.css";

export const Task = ({ title, checked, setChecked, onDelete }) => {
  // FUNZIONI
  // gestione input con check
  const handleCheck = () => setChecked(!checked);
  const classInput = checked ? "checkInput" : "";
  return (
    <>
      <div className={`task flex ${classInput}`}>
        <div className="content flex">
          <input
            type="checkbox"
            className="check"
            checked={checked}
            onChange={handleCheck}
          />
          <h3 className={`titleTask ${classInput}`}>{title}</h3>
        </div>
        <div className="icons flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-icon lucide-trash
            remove"
            onClick={onDelete}
          >
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
      </div>
    </>
  );
};
