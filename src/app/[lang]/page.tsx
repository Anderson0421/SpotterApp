import NavbarComponent from '../../components/Navbar'
export default async function Home({ params: { lang } }: { params: { lang: string } }) {

  const dictionary = await import(`@/app/dictionaries/${lang}.json`)
    .then((module) => module.default)

  return (
    <>
      <NavbarComponent />
      <section id='home' className='mt-20 mx-auto container items-center max-md:flex-col max-sm:mt-5 w-full justify-between max-md:px-10 max-sm:px-5 max-xl:px-10 max-lg:px-4 px-32 flex
      bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
      '>
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
    </>
  );
}
