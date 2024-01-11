import Image from 'next/image';
import Header from './component/header';
import Hero from './component/hero';

export default function Home() {
   return (
      <main className="">
         <div className="mt-24">
            <Header />
         </div>
         <Hero />
      </main>
   );
}
