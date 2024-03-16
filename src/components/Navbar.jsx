import { Icon } from '@iconify-icon/react';

const Navbar = () => {
  return (
    <nav className="navbar-fixed bg-gray-light-9 lh-1 b-bottom bc-green-light-1 bw-thick">
        <div className="navbar-brand">
            <a href="#" className="logo p-1 text-green-dark-2 fw-extrabold">PixelCSS</a>
        </div>
        {/* <button class="navbar-toggler z-index-20" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button> */}
        <div className="">
            <ul class="">
                <li className="fw-bold">
                    <a href="https://github.com/yogesh-rai/pixelcss" title="view on github" target='_blank'>
                        <Icon icon="ri:github-fill" className="text-green-dark-2 text-hover-green-dark-7 mr-1" width="29" height="29"/>
                        {/* <Icon icon="codicon:github" width="29" height="29"  className='text-white text-hover-black' /> */}
                    </a>
                </li> 
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;