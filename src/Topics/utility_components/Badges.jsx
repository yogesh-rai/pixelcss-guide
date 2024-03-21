import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Badges = () => {
  
    const badgesCode = 
    `
    <div class="display-g default-grid">

        <!-- standard pilled badge -->
        <div class="display-f fd-col m-1 ml-0">
            <label class="mb-1">Pilled badge</label>
            <div>
                <span class="badge text-black fw-bold font-sm">Info</span> 
            </div>
        </div>


        <!-- positive actions badge -->
        <div class="display-f fd-col m-1 ml-0">
            <label class="mb-1">Positive badge</label>
            <div>
                <span class="badge-success text-white font-sm">+10 updates</span> 
            </div>
        </div>


        <!-- negative actions badge -->
        <div class="display-f fd-col m-1 ml-0">
            <label class="mb-1">Negative badge</label>
            <div>
                <span class="badge-red text-white font-sm">-5 deletions</span> 
            </div>
        </div>


        <!-- heading with badge -->
        <div class="display-f fd-col m-1 ml-0">
            <label class="mb-1">Heading with badge</label>
            <div>
                <h3>
                    Heading 
                    <span class="badge-secondary border-solid br-xs text-white font-sm">New</span>
                </h3> 
            </div>
        </div>


        <!-- button with rounded badge -->
        <div class="display-f fd-col m-1 ml-0">
            <label class="mb-1">Button with badge</label>
            <div>
                <button type="button" class="btn-primary text-white fw-bold br-sm">
                    Notifications 
                    <span class="badge-white text-black font-sm">4</span>
                </button>
            </div>
        </div>


    </div>
    `;
    

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Badges</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Add a pop of color and information to your content with these versatile little tags. 
                    Whether you want to highlight a new feature, show status updates, or indicate categories, 
                    PixelCSS <strong className='fw-extrabold'>Badges</strong> make it easy. 
                    With customizable styles and sizes, you can tailor them to fit seamlessly into your design.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of badges</h3>
                <CodePreview code={badgesCode} />
                <CodeDemo code={badgesCode} codeTitle={'Types of badges'} codeActions={false} />
            </div>
        </div>
    )

}

export default Badges;