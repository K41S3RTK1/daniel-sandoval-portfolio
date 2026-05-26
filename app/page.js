export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-bold text-xl text-white">
            Daniel Sandoval
          </a>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#inicio" className="hover:text-blue-300 transition">Inicio</a>
            <a href="#sobre-mi" className="hover:text-blue-300 transition">Sobre mí</a>
            <a href="#proyectos" className="hover:text-blue-300 transition">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-300 transition">Contacto</a>
          </div>
        </div>
      </nav>
      <section id="inicio" className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
        
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
            href="https://github.com/K41S3RTK1"
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

      <section id="proyectos" className="px-6 py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Proyectos</h2>

          <p className="text-slate-400 mb-10 max-w-3xl">
            Recopilación de laboratorios y proyectos desarrollados durante el
            curso de Sistemas y Tecnologías Web, utilizando tecnologías como
            HTML, CSS, JavaScript, Node.js, React, Next.js, Docker, PostgreSQL y GitHub.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <img
                src="/projects/lab6.png"
                alt="Captura del Laboratorio 6 de Node.js"
                className="h-36 w-full object-cover rounded-xl mb-5 border border-slate-800"
              />
              <h3 className="text-2xl font-semibold mb-3">Laboratorio 6 - Node.js</h3>
              <p className="text-slate-400 mb-4">
                Laboratorio enfocado en la creación de un servidor con Node.js,
                manejo de rutas y respuestas en formato JSON.
              </p>
              <p className="text-sm text-blue-300 mb-5">Node.js · JavaScript · GitHub</p>
              <a href="https://github.com/K41S3RTK1/laboratorio6-node" target="_blank" className="text-blue-400 hover:text-blue-300">
                Ver repositorio
              </a>
            </article>

            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <img
                src="/projects/lab7.png"
                alt="Captura del Laboratorio 7 de Express y React"
                className="h-36 w-full object-cover rounded-xl mb-5 border border-slate-800"
              />
              <h3 className="text-2xl font-semibold mb-3">Laboratorio 7 - Express y React</h3>
              <p className="text-slate-400 mb-4">
                Proyecto práctico donde se trabajó con Express para el backend
                y React con Vite para construir una interfaz funcional.
              </p>
              <p className="text-sm text-blue-300 mb-5">Express · React · Vite · JavaScript</p>
              <a href="https://github.com/K41S3RTK1/laboratorio7-express-react" target="_blank" className="text-blue-400 hover:text-blue-300">
                Ver repositorio
              </a>
            </article>

            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <img
                src="/projects/minimarket.png"
                alt="Captura de la actividad de tienda online"
                className="h-36 w-full object-cover rounded-xl mb-5 border border-slate-800"
              />
              <h3 className="text-2xl font-semibold mb-3">Actividad de tienda online</h3>
              <p className="text-slate-400 mb-4">
                Desarrollo de una tienda online con catálogo de productos,
                estructura visual responsive y publicación mediante GitHub Pages.
              </p>
              <p className="text-sm text-blue-300 mb-5">HTML · CSS · JavaScript · GitHub Pages</p>
              <a href="https://github.com/K41S3RTK1/minimarket-web" target="_blank" className="text-blue-400 hover:text-blue-300">
                Ver repositorio
              </a>
            </article>

            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <img
                src="/projects/proyecto2.png"
                alt="Captura del Proyecto 2 de base de datos"
                className="h-36 w-full object-cover rounded-xl mb-5 border border-slate-800"
              />
              <h3 className="text-2xl font-semibold mb-3">Proyecto 2 - Base de datos</h3>
              <p className="text-slate-400 mb-4">
                Sistema para una tienda de instrumentos musicales y equipo de audio,
                conectado a PostgreSQL mediante Node.js y Docker.
              </p>
              <p className="text-sm text-blue-300 mb-5">PostgreSQL · Docker · Node.js · Express</p>
              <a href="https://github.com/K41S3RTK1/proyecto2-tienda-musical" target="_blank" className="text-blue-400 hover:text-blue-300">
                Ver repositorio
              </a>
            </article>

            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <img
                src="/projects/proyecto3.png"
                alt="Captura del Proyecto 3 de backend y base de datos"
                className="h-36 w-full object-cover rounded-xl mb-5 border border-slate-800"
              />
              <h3 className="text-2xl font-semibold mb-3">Proyecto 3 - Backend y base de datos</h3>
              <p className="text-slate-400 mb-4">
                Proyecto enfocado en la integración de backend, base de datos,
                consultas SQL, estructura de API y documentación del sistema.
              </p>
              <p className="text-sm text-blue-300 mb-5">SQL · Docker · Express · GitHub</p>
              <a href="https://github.com/K41S3RTK1/proyecto2-tienda-musical/tree/proyecto-3" target="_blank" className="text-blue-400 hover:text-blue-300">
                Ver repositorio
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24 bg-white text-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl">
            Si deseas conocer más sobre mis proyectos o ponerte en contacto conmigo,
            puedes escribirme por correo electrónico o visitar mis perfiles profesionales.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:daniel.sandoval@uvg.edu.gt"
              className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Correo</h3>
              <p className="text-slate-600">sandovaluvg@gmail.com</p>
            </a>

            <a
              href="https://github.com/K41S3RTK1"
              target="_blank"
              className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-slate-600">github.com/K41S3RTK1</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        <p>© 2026 Daniel Sandoval. Portafolio desarrollado con Next.js.</p>
      </footer>
    </main>
  );
}