import Image from 'next/image'
import { BackToTopBtn, Cars, Cta, Footer, Header, Hero,Why, Testmonial } from './components'

export default function Home() {
  return (
    
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'> 
      <Header/>
      <Hero/>
      <Cars/>
      <Why/>
      <Testmonial/>
      <Cta/>
      <Footer/>
    </main>
  )
}
