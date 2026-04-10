import logo from '../../assets/Logo.svg';

export default function Navbar() {
  return (
    <>
      <header className='py-5 bg-[#0a121f] md:fixed w-full shadow'>
        <nav className='space-y-4 md:space-y-0 block md:flex md:flex-wrap items-center justify-center md:justify-around text-center'>
          <div className='flex justify-center items-center gap-2 md:gap-5'>
            <img src={logo} alt='logo' />
            <p className='text-blue-400 text-xl'>Artificial Intelligence</p>
          </div>
          <ul className='items-center text-3xl space-y-4 md:space-y-0 md:text-[14px] xl:text-[18px] gap-3 md:gap-5 block md:flex md:flex-wrap'>
            <li>
              <a href='#' className='text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Contact
              </a>
            </li>
          </ul>
          <button className='bg-blue-400 text-white px-5 py-3 rounded-sm mt-5 md:mt-0'>
            Sign In
          </button>
        </nav>
      </header>
    </>
  );
}
