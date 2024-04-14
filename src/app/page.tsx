import { BackgroundBeams } from "@/ui/background-beams";
import Image from 'next/image'


export default async function Home() {
  return (
    <>
      <section id='home' className='mt-20 mx-auto container items-center max-md:flex-col max-sm:mt-5 w-full justify-between max-md:px-10 max-sm:px-5 max-xl:px-10 max-lg:px-4 px-32 flex'>
        <div className='w-1/2 max-md:w-full'>
          <h1 className='animate-fade-in-right animate-delay-0 text-white text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-pretty leading-tight'>
            Estaciona tu auto de forma rápida y sencilla con
            <span className="font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white"> SP</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">OTTER</span>
            </span>
          </h1>
          <p className='animate-fade-in-right animate-delay-200 text-white text-medium mt-2  leading-relaxed'>
            Con Spotter, encontrar un lugar para estacionar tu auto nunca fue tan fácil. Gracias a nuestra tecnología, podrás encontrar un lugar para estacionar tu auto en cuestión de segundos. ¡No pierdas más tiempo buscando estacionamiento!
          </p>
        </div>
        <div className='w-3/5 animate-fade-in-down animate-delay-200 max-md:w-full flex justify-end max-md:justify-center'>
          <Image width={500} height={500} src='/spotter2.jpg' alt='SpotterApp-Image' className='aspect-square w-3/4 max-md:mt-10 max-md:max-w-md max-sm:max-w-sm max-md:w-full h-max rounded-lg' />
        </div>
      </section>
      <BackgroundBeams />
    </>
  );
}
