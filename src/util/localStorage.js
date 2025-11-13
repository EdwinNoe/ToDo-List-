
export const setLocalStorage = (objeto) => {
  localStorage.setItem("toDoList", JSON.stringify(objeto))
}

export const getLocalStorage = () => {
  const storedData = localStorage.getItem("toDoList");
  if (localStorage.getItem("toDoList")) {
      return JSON.parse(storedData)
  } else {
      return []
  }
}

