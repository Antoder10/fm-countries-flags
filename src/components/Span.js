const Span = ({outerStyle = '', innerStyle = '', type, value}) => {
  return (
    <span className={`${outerStyle ? outerStyle : "mb-2"}`}>
      <span className={`${innerStyle ? innerStyle : "font-semibold"}`}>
        {type}
      </span>
      {value}
    </span>
  )
}

export default Span;