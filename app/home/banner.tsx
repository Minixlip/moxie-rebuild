import Link from 'next/link';
import Navbar from '../components/navbar';
import bannerImg from '../home/assets/HomeImg.jpg';

export default function Banner() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${bannerImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className="h-full flex justify-center flex-col mx-2 md:ml-40 gap-8">
        <span className="text-5xl md:text-6xl lg:text-8xl font-bold lg:w-[60%] text-white">
          WEAR CLOTHES THAT MATTER
        </span>
        <Link href={'/shop'}>
          <span className="text-2xl font-semibold px-12 py-3 text-white bg-[#4170E8] w-fit cursor-pointer">
            Shop now
          </span>
        </Link>
      </div>
    </div>
  );
}
