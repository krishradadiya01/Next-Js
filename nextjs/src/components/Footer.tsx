

export default function Footer() {
    return (
        <footer>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">About Us</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Workflow</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">How this Possible</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Learning Journey</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Your Feedback</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">Quick Links</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Home</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">About</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Courses</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Contact</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">Follow Us</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Facebook</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Instagram</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Twitter</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Linked In</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">Contact Us</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Gujarat, India</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Surat 395010</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Email: abc@gmail.com</a>
                </li>
                <li>
                    <a className="tex-white hover:text-gray-300 cursor-pointer">Phone: (+91) 9909085096</a>
                </li>
                </nav>
            </div>
            </div>
        </div>
            <p className="text-center text-xs pt-8 my-8">© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}