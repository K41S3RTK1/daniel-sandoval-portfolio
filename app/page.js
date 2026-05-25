export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Daniel Sandoval
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Estudiante de Ciencias de la Computación y Tecnologías de la Información.
        </p>

        <p className="max-w-2xl text-slate-400 mb-8">
          Portafolio personal desarrollado con Next.js donde presento
          proyectos, laboratorios y tecnologías aprendidas durante el curso
          de Sistemas y Tecnologías Web.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-xl transition"
          >
            GitHub
          </a>

          <a
            href="#proyectos"
            className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
          >
            Ver proyectos
          </a>
        </div>

      </section>
    </main>
  );
}