import { Brands,CarSlide  } from "."


const Cars = () => {
  return (
    <section className='  flex flex-col py-[4rem] items-center bg-white' id="cars">
      <div className='container mx-auto mt-60 xl:mt-0 px-4 xl:px-0'>
      <Brands/>
      <CarSlide/>
      </div>
    </section>
  )
}

export default Cars