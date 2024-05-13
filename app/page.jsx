import Image from 'next/image';
import hero01 from '/public/home/hero01.png';

export default function Home() {
  return (
    <main>
      <div
        className="mx-auto max-w-4xl bg-contain sm:h-96 bg-no-repeat sm:bg-contain bg-right"
        style={{ backgroundImage: `url('/home/hero01.png')` }}>
        <article className="pl-6 pt-8">
          <h1 className="text-5xl font-bold mb-3 md:w-[50%]">
            Bringing Communities Together
          </h1>
          <div className="bg-pBlue-100 h-2 w-40 mb-5"></div>
          <p className="text-sm w-[40%] sm:w-[30%]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          {/* <Image src={hero01} alt="images" /> */}
        </article>
      </div>

      <div
        className="mx-auto max-w-4xl bg-contain sm:h-96 bg-no-repeat sm:bg-contain bg-right"
        style={{ backgroundImage: `url('/home/hero02.png')` }}>
        <article className="pl-6 pt-8">
          <h1 className="text-3xl text-center font-bold md:w-[100%]">
            What We Do
          </h1>
          <p className="text-center">Car Shar For Everyone</p>
          <div className="bg-pOrange-100 h-2 w-40 mb-5"></div>
          <p className="text-sm w-[40%] sm:w-[30%]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          {/* <Image src={hero01} alt="images" /> */}
        </article>
      </div>

      <div
        className="mx-auto max-w-4xl bg-contain sm:h-96 bg-no-repeat sm:bg-contain bg-right"
        style={{ backgroundImage: `url('/home/hero03.png')` }}>
        <article className="pl-6 pt-8">
          <h1 className="text-3xl font-bold mb-3 md:w-[50%] text-right">
            About Us
          </h1>
          <div className="bg-pGreen-100 h-2 w-40 mb-5"></div>
          <p className="text-sm w-[-40%] w-[30%] text-right ml-auto">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          {/* <Image src={hero01} alt="images" /> */}
        </article>
      </div>
    </main>
  );
}
