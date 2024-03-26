import { Icon } from '@iconify-icon/react';

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="navbar-fixed bg-gray-light-9 lh-1 b-bottom bc-green-light-1 bw-thick z-index-30">
        <div className="navbar-brand">
            <a href="https://www.npmjs.com/package/pixelcss" target="_blank" className="logo p-1 pl-0 text-green-dark-2 fw-extrabold">PixelCSS</a>
        </div>
        
        <div className="display-f jc-center ai-center">
            <ul className="nav-items">
                <li className="fw-bold">
                    <a href="https://github.com/yogesh-rai/pixelcss-guide" title="view on github" target='_blank'>
                        <Icon icon="ri:github-fill" className="text-green-dark-2 text-hover-green-dark-7" width="29" height="29"/>
                    </a>
                </li> 
            </ul>
            <button 
              onClick={toggleMobileMenu} 
              style={{ padding: '7px' }} 
              title="Toggle Index"   
              className="toggle-menu bg-green-dark-2 bg-hover-green-light-2 text-white border-none br-rounded lh-1 c-pointer"
            >
                {
                    isMobileMenuOpen ? 
                    <Icon icon="mingcute:close-fill" width="1.1rem" height="1.1rem" />
                    :
                    <Icon icon="ic:round-menu" width="1.1rem" height="1.1rem" />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar;