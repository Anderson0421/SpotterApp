import NavbarComponent from '../../components/Navbar'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`)
    .then((module) => module.default)
  return (
    <>
      <NavbarComponent />
      <section id='home' className='h-screen  mx-auto container max-md:flex-col mt-16 max-sm:mt-5 w-full  justify-between max-md:px-10 max-sm:px-5 max-xl:px-10 max-lg:px-4 px-32 flex'>
        <div className='w-1/2 max-md:w-full'>
          <h1 className='animate-fade-in-right animate-delay-0 text-white text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-pretty leading-tight'>
            {dictionary.title}
            <span className="font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white"> SP</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">OTTER</span>
            </span>
          </h1>
          <p className='animate-fade-in-right animate-delay-200 text-white text-medium mt-2  leading-relaxed'>
            {dictionary.descriptionHome}
          </p>
        </div>
        <div className='w-3/5 animate-fade-in-down animate-delay-200 max-md:w-full flex justify-end max-md:justify-center'>
          {/* Vamos a cambiarlo por la etiqueta Image */}
          <img src='spotter2.jpg' alt='car' className='w-3/4 max-md:mt-10 max-md:max-w-md max-sm:max-w-sm max-md:w-full h-max rounded-lg' />
        </div>
      </section>
      <div
        className='relative w-full  hide-scrollbar h-screen overflow-auto snap-y snap-mandatory
      bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
      '
      >
        <div className='snap-center h-screen w-full justify-center gap-20 flex  px-20 items-center text-9xl'>
          <img src='spotter3.jpg' alt='car' className='w-3/5  max-w-sm max-md:mt-10 max-md:max-w-md max-sm:max-w-sm max-md:w-full h-max rounded-lg' />
          <div className='w-1/2'>
            <h1 className='text-white text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-pretty leading-tight'>
              Descubre la forma más rápida de encontrar estacionamiento
            </h1>
            <p className='text-white text-medium mt-2  leading-relaxed'>
              Con Spotter, encontrar un lugar para estacionar tu auto nunca fue tan fácil.
              Gracias a nuestra tecnología, podrás encontrar un lugar para estacionar tu auto en cuestión de segundos.
              ¡No pierdas más tiempo buscando estacionamiento!
            </p>
          </div>
        </div>
        <div className='snap-center h-screen w-full justify-center gap-10 flex px-20 items-center text-9xl'>
          <div className='w-1/2'>
            <h1 className='text-white text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-pretty leading-tight'>
              Gestiona tu estacionamiento de forma rápida y sencilla
            </h1>
            <p className='text-white text-medium mt-2  leading-relaxed'>
              Nuestro sistema de gestión de estacionamiento te permitirá
              administrar tus espacios en tiempo real, gracias a nuestra
              tecnología de vanguardia. ¡No pierdas más tiempo!
            </p>
          </div>
          <img src='spotter4.jpg' alt='car' className='w-3/5 max-w-sm max-md:mt-10 max-md:max-w-md max-sm:max-w-sm max-md:w-full h-max rounded-lg' />

        </div>
      </div>
    </>
  );
}
