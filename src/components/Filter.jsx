
export function Filter({ onFilter }) {
  return (
  <div className="my-3" >
    <label className="mr-1" htmlFor="task-select">Filtrar Tareas:</label>
    <select className="border-1  border-[#B9AB93]" name="task" id="task-select" onChange={(e) => onFilter(e.target.value)}>
      <option className="bg-black" value="all">Todas</option>
      <option className="bg-black" value="completed">Completadas</option>
      <option className="bg-black" value="pending">Pendientes</option>
    </select>
  </div>
  )
}
