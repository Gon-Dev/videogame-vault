export default function SummaryItem( {icon,title,description} ) {
  return (
    <div className="summary-item">
      <img className="summary-icon" src={icon} alt="crosshairs" />
      <h4 className="summary-title">{title}</h4>
      <p className="summary-description">{description}</p>
    </div>
  )
}