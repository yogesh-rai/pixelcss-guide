import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Footers = () => {
  
    const footerCode = 
    `
    <div>

        <!-- footer -->
        <footer class="footer">
            <div class="footer-container ml-1 mr-1">
            <div class="footer-logo">
                <a href="#">Logo</a>
            </div>
            <div class="footer-links">
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            </div>
        </footer>

    </div>
    `;

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Footer</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Complete your website or application with a polished and functional footer. 
                    PixelCSS  <strong className='fw-extrabold'>Footer</strong> offers a simple yet effective way to provide essential information, links, 
                    and contact details at the bottom of your pages.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Footer</h3>
                <CodePreview code={footerCode} />
                <CodeDemo code={footerCode} codeTitle={'Footer'} codeActions={false} />
            </div>
        </div>
    )

}

export default Footers;