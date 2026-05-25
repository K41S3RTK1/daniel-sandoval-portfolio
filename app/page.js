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
      <section id="sobre-mi" className="px-6 py-24 bg-white text-slate-950">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>

    <p className="text-lg text-slate-700 leading-relaxed mb-6">
      Soy Daniel Sandoval, estudiante interesado en el desarrollo web y en la
      creación de soluciones digitales funcionales, ordenadas y fáciles de usar.
      Durante el curso de Sistemas y Tecnologías Web he aprendido a trabajar con
      herramientas modernas como HTML, CSS, JavaScript, Node.js, React, Next.js,
      Git, GitHub y despliegues web.
    </p>

    <p className="text-lg text-slate-700 leading-relaxed">
      Me interesa seguir aprendiendo sobre desarrollo frontend, backend,
      bases de datos, diseño de interfaces y buenas prácticas para construir
      proyectos más completos y profesionales.
    </p>
  </div>
</section>
    </main>
  );
}