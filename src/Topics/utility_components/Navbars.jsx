import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Navbars = () => {
  
    const scrollableNavbarCode = 
    `
    <div>

        <!-- scrollable navbar -->
        <nav class="navbar bg-red-light-5 lh-4">
            <div class="navbar-brand">
                <a href="#" class="logo">Logo</a>
            </div>
            <button class="navbar-toggler z-index-20" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>
            <div class="navbar-links">
                <ul class="nav-links">
                <li><a href="#">Home</a></li> 
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="nav-sidebar" data-visble="false">
                <ul class="nav-sidebar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>  

    </div>
    `;

    const fixedNavbarCode = 
    `
    <div>

        <!-- fixed at top navbar -->
        <nav class="navbar-fixed bg-red-light-5 lh-4">
            <div class="navbar-brand">
                <a href="#" class="logo">Logo</a>
            </div>
            <button class="navbar-toggler z-index-20" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>
            <div class="navbar-links">
                <ul class="nav-links">
                <li><a href="#">Home</a></li> 
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="nav-sidebar" data-visble="false">
                <ul class="nav-sidebar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>  

    </div>
    `;

    const buttonNavbarCode = 
    `
    <div>

        <!-- navbar with buttons -->
        <nav class="navbar-fixed bg-red-light-5 lh-4">
            <div class="navbar-brand">
                <a href="#" class="logo">Logo</a>
            </div>
            <button class="navbar-toggler z-index-20" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>
            <div class="navbar-links">
                <ul class="nav-links">
                <li><a href="#">Home</a></li> 
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><button class="btn-primary text-white w-full br-xs">Login</button></li>
                <li><button class="btn-secondary text-white w-full br-xs">Signup</button></li>
                </ul>
            </div>
            <div class="nav-sidebar" data-visble="false">
                <ul class="nav-sidebar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><button class="btn-primary text-white w-full br-xs">Login</button></li>
                <li><button class="btn-secondary text-white w-full br-xs">Signup</button></li>
                </ul>
            </div>
        </nav>  

    </div>
    `;

    const toggleMenuJSCode = 
    `
    const nav = document.querySelector(".nav-sidebar");
    const navToggle = document.querySelector(".navbar-toggler");

    navToggle.addEventListener("click", () => {
        const visiblity = nav.getAttribute("data-visble");
        if (visiblity === 'false') {
            nav.setAttribute("data-visble", true);
            navToggle.setAttribute("aria-expanded", true);
        } else {
            nav.setAttribute("data-visble", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    })

    `;

    

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Navbar</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Navigate your website or application with ease using our sleek and responsive navigation bar. 
                    PixelCSS <strong className='fw-extrabold'>Navbar</strong> offers a seamless way to organize links and menus,
                    providing users with intuitive access to different sections of your site. With customizable styles, 
                    including options for fixed or responsive layouts, 
                    you can tailor the navbar to fit your design perfectly.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Scrollable navbar</h3>
                <CodePreview code={scrollableNavbarCode} />
                <CodeDemo code={scrollableNavbarCode} codeTitle={'Scrollable navbar'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Fixed at top navbar (non-scrollable)</h3>
                <CodePreview code={fixedNavbarCode} />
                <CodeDemo code={fixedNavbarCode} codeTitle={'Fixed at top navbar'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Navbar with buttons</h3>
                <CodePreview code={buttonNavbarCode} />
                <CodeDemo code={buttonNavbarCode} codeTitle={'Navbar with buttons'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <p className="p-1 border-solid bw-thin bc-orange bg-info-light-5 text-info-dark-5 br-xs mt-4 mb-2 lh-3">
                    <strong>Note:</strong> It requires Javascript to handle toggle sidebar menu on mobile devices.
                </p>
                <CodeDemo code={toggleMenuJSCode} codeTitle={'Sample Javascript code for toggle sidebar menu on mobile devices'} codeActions={false} language="javascript" />
            </div>
        </div>
    )

}

export default Navbars;