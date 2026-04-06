export default function Navbar() {
  return (
    <>
        <header className="p-5 bg-[#0a121f] fixed w-full shadow">
            <nav className="flex items-center justify-around flex-wrap">
                <div className="flex items-center gap-5">
                    <img src="/Logo.svg" alt="logo" />
                    <p className="text-blue-400 text-xl">Artificial Intelligence</p>
                </div>
                <ul className="flex items-center gap-5 flex-wrap">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Services</a></li>
                    <li><a href="#" className="text-white">Blog</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
                <button className="bg-blue-400 text-white px-5 py-3 rounded-sm">Sign In</button>
            </nav>
        </header>
    </>
  )
}
