import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Buttons = () => {
  
    const pilledButtonsCode = 
    `
    <div>

        <!-- standard pilled badge -->
        <div class="btn-example">
            <button class="btn fw-bold">Click me!</button>
            <button class="btn-primary text-white fw-bold">Click me!</button>
            <button class="btn-secondary text-white fw-bold">Primary</button>
            <button class="btn-success text-white fw-bold">Secondary</button>
            <button class="btn-danger text-white fw-bold">Danger</button>
            <button class="btn-info fw-bold">Info</button>
            <button class="btn-dark text-white fw-bold">Dark</button>
            <button class="btn-purple text-white fw-bold">Purple</button>
        </div>

    </div>
    `;

    const squaredButtonsCode = 
    `
    <div>

        <!-- standard pilled badge -->
        <div class="btn-example">
            <button class="btn fw-bold br-xs">Click me!</button>
            <button class="btn-primary text-white fw-bold br-xs">Primary</button>
            <button class="btn-secondary text-white fw-bold br-xs">Secondary</button>
            <button class="btn-success text-white fw-bold br-xs">Success</button>
            <button class="btn-danger text-white fw-bold br-xs">Danger</button>
            <button class="btn-info fw-bold br-xs">Info</button>
            <button class="btn-dark text-white fw-bold br-xs">Dark</button>
            <button class="btn-purple text-white fw-bold br-xs">Purple</button>
        </div>

    </div>
    `;

    const outlinedButtonsCode = 
    `
    <div>

        <!-- standard pilled badge -->
        <div class="btn-example">
            <button class="btn-outlined fw-bold bw-2">Click me!</button>
            <button class="btn-outlined-primary text-primary fw-bold bw-2">Primary</button>
            <button class="btn-outlined-secondary text-secondary fw-bold bw-2">Secondary</button>
            <button class="btn-outlined-success text-success fw-bold bw-2">Success</button>
            <button class="btn-outlined-danger text-danger fw-bold br-xs bw-2">Danger</button>
            <button class="btn-outlined-info text-info fw-bold br-xs bw-2">Info</button>
            <button class="btn-outlined-dark text-dark fw-bold br-xs bw-2">Dark</button>
            <button class="btn-outlined-purple text-purple fw-bold br-xs bw-2">Purple</button>
        </div>

    </div>
    `;

    const iconButton = 
    `
    <div>

        <button class="btn-primary text-white fw-bold br-sm display-f ai-center jc-center" type="button">
            <!-- Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" />
            </svg>
            Button with icon
        </button>

    </div>
    `

    const blockedButtonsCode = 
    `
    <div>

        <!-- standard pilled badge -->
        <div class="display-g row-md-2 gap-1">
            <button class="btn-outlined-primary text-primary fw-bold br-sm bw-2" type="button">Button 1</button>
            <button class="btn-primary text-white fw-bold br-sm" type="button">Button 2</button>
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
                <CodePreview code={pilledButtonsCode} />
                <CodeDemo code={pilledButtonsCode} codeTitle={'Types of badges'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of badges</h3>
                <CodePreview code={squaredButtonsCode} />
                <CodeDemo code={squaredButtonsCode} codeTitle={'Types of badges'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of badges</h3>
                <CodePreview code={outlinedButtonsCode} />
                <CodeDemo code={outlinedButtonsCode} codeTitle={'Types of badges'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of badges</h3>
                <CodePreview code={iconButton} />
                <CodeDemo code={iconButton} codeTitle={'Types of badges'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of badges</h3>
                <CodePreview code={blockedButtonsCode} />
                <CodeDemo code={blockedButtonsCode} codeTitle={'Types of badges'} codeActions={false} />
            </div>
        </div>
    )

}

export default Buttons;