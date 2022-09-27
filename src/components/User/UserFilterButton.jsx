export default function UserFilterButton( {title,setActiveSection,handleFilterButton} ) {
  const key = title.toLowerCase();
  const children = title.toUpperCase();
  return (
    <button
      className="user-filter-button"
      type="button"
      key={key}
      onClick={ event => {
        setActiveSection(title)
        handleFilterButton(event)
      }}>
      {children}
    </button>
  )
}