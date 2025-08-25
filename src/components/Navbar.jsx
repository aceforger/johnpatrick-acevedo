import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 overflow-x-auto whitespace-nowrap">
      <ul className="flex list-none m-0 px-4 gap-2 md:justify-center md:gap-0 md:px-0">
        <NavItem 
          iconSrc="./book.gif" 
          text="Book" 
          active
          path="/bookshop"
        />
        <NavItem 
          iconSrc="./ebook.gif" 
          text="eBook" 
          path="/ebooks"
        />
        <NavItem 
          iconSrc="./audio-book.gif" 
          text="Audio Book" 
          path="/audiobooks"
        />
        {/* <NavItem 
          iconSrc="./softcopy.gif" 
          text="Soft Copy" 
          path="/softcopies"
        />
        <NavItem 
          iconSrc="./hardcopy.gif" 
          text="Hard Copy" 
          path="/hardcopies"
        /> */}
      </ul>
    </nav>
  );
}

const NavItem = ({ iconSrc, text, active = false, path }) => (
  <li className="flex flex-col items-center ml-0 px-2 md:ml-16 lg:ml-50 first:md:ml-0">
    <Link 
      to={path}
      className={`flex flex-col items-center gap-2 p-2 rounded text-xs font-medium font-mono
        ${active ? 'text-black font-semibold' : 'text-gray-700'}
        hover:text-gray-700 transition-colors duration-300

        
      `}
    >
      <div className="mb-1">
        <img 
          src={iconSrc} 
          alt={text} 
          className="w-10 h-10 object-contain rounded shadow-lg md:w-10 md:h-10"
        />
      </div>
      {text}
    </Link>
  </li>
);

export default Navbar;