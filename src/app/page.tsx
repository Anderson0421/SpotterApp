import Image from 'next/image'

export default async function Home() {
  return (
    <>
      <section id='home' className='mt-16 mx-auto text-white container items-center max-md:flex-col max-sm:mt-5 w-full justify-between max-md:px-10 max-sm:px-5 max-xl:px-10 max-lg:px-4 px-32 flex'>
        <div className='w-1/2 max-md:w-full'>
          <h1 className='animate-fade-in-right text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold leading-tight'>
            Estaciona tu auto
            de forma rápida y sencilla con
            <span className="font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary  to-secondary"> SPOTTER</span>
            </span>
          </h1>
          <p className='animate-fade-in-right animate-delay-200 mt-2 leading-relaxed'>
            Encuentra estacionamientos disponibles en tiempo real, reservar y pagar desde tu celular. ¡No más vueltas!
          </p>
        </div>
        <div className='w-3/5 animate-fade-in-down animate-delay-200 max-md:w-full flex justify-end max-md:justify-center'>
          <Image width={400} height={400} src='/spotter2.webp' alt='SpotterApp-Image' className='aspect-square w-3/4 max-md:mt-10 max-md:max-w-md max-sm:max-w-sm max-md:w-full rounded-lg' />
        </div>
      </section>
    </>
  );
}
