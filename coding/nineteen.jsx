//Write a React component that implements a tooltip.
import "./tooltip.css";
const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && <div className="tooltip-content">{text}</div>}
    </div>
  )};