export function ProgressBar({ tasks }) {
  let tasksLength = tasks.length; 
  let tasksCompleted = tasks.filter(task => task.completed).length;
  let percentage = tasksLength === 0 ? 0 : (tasksCompleted / tasksLength) * 100;
  let title;
  let subtitle;

  if (percentage === 0) {
    title = "Nada completado:";
    subtitle = '"¡A por la primera tarea!"';
  } else if (percentage > 0 && percentage <= 50) {
    title = "Menos de la mitad:";
    subtitle = '"¡Sigue así!"';
  } else if (percentage > 50 && percentage < 100) {
    title = "Más de la mitad:";
    subtitle = "¡Casi listo!";
  } else if (percentage === 100) {
    title = "Completado:";
    subtitle = '"¡Genial, terminado!"';
  }

  return (
<div className="border p-6 border-[#B9AB93] rounded-2xl flex flex-wrap items-center justify-between flex-col sm:flex-row my-1">
  <div>
    <h1 className="text-3xl">{title}</h1>
    <h2 className="text-lg">{subtitle}</h2>
  </div>

  <div className="w-35 h-35 rounded-full bg-[#88AB33] p-3 flex items-center justify-center">
    <span className="h-12 text-4xl">{tasksCompleted}/{tasksLength}</span>
  </div>
</div>
  );
}
