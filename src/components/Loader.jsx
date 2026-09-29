function Loader({ text = 'Cargando...' }) {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  )
}

export default Loader