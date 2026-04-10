import photo from '../../assets/raketa.png';
import img1 from '../../assets/Groups/Group 1.svg';
import img2 from '../../assets/Groups/Group 2.svg';
import img3 from '../../assets/Groups/Group 3.svg';
import img4 from '../../assets/Groups/Group 4.svg';
import { IoMdPlay } from 'react-icons/io';

export default function Header() {
  return (
    <>
      <div className='bg-[#08101e] py-20 md:py-30'>
        <div className='container p-5 space-y-20 xl:space-y-0 mx-auto flex flex-wrap items-center justify-around'>
          <div>
            <h3 className='text-blue-400 uppercase'>
              Next genaretion platform
            </h3>
            <h1 className='text-white font-bold text-5xl md:text-6xl mt-5'>
              Artificial intelligence <br /> & Syber security
            </h1>
            <p className='text-gray-300 mt-10'>
              Lorem ipsum is placeholder text commonly used in the graphic,{' '}
              <br /> print, and publishing industries for previewing layouts and{' '}
              <br /> visual mockups.
            </p>

            <div className='btn mt-10 flex gap-4'>
              <button className='bg-blue-500 px-2 md:px-5 py-3 text-white rounded-sm'>
                Get Started
              </button>
              <button className='bg-blue-500 px-2 md:px-5 py-3 text-white rounded-sm flex items-center gap-3'>
                {' '}
                <IoMdPlay className='text-xl' /> Watch Video
              </button>
            </div>
          </div>
          <div>
            <img src={photo} alt='img' />
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-20 items-center mt-30 md:mt-20'>
          <img src={img1} alt='img' />
          <img src={img2} alt='img' />
          <img src={img3} alt='img' />
          <img src={img4} alt='img' />
        </div>
      </div>
    </>
  );
}
