export function ProgressBar() {
  return (
    <div className="border p-6 border-[#B9AB93] rounded-2xl flex flex-wrap items-center justify-between flex-col sm:flex-row">
      <div>
        <h1 className="text-3xl">Task done</h1>
        <h2 className="text-lg">Keep it up</h2>
      </div>

      <div className="w-30 h-30 rounded-full bg-[#88AB33] p-3 flex items-center justify-center">
        <span className="h-12 text-4xl">1/3</span>
      </div>
    </div>
  );
}