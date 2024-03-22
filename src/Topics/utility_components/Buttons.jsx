import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Buttons = () => {
  
    const pilledButtonsCode = 
    `
    <div>

        <!-- pilled buttons -->
        <div class="btn-example">
            <button class="btn fw-bold">Click me!</button>
            <button class="btn-primary text-white fw-bold">Primary</button>
            <button class="btn-secondary text-white fw-bold">Secondary</button>
            <button class="btn-success text-white fw-bold">Success</button>
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

        <!-- CTA buttons (squared buttons) -->
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

        <!-- outlined buttons -->
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

        <!-- button with an icon -->
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

        <!-- block buttons using grid -->
        <div class="display-g row-xl-2 gap-1">
            <button class="btn-outlined-primary text-primary fw-bold br-sm bw-2" type="button">Button 1</button>
            <button class="btn-primary text-white fw-bold br-sm" type="button">Button 2</button>
        </div>

    </div>
    `;
    

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Buttons</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Elevate your user interface with these stylish and functional elements. 
                    From primary action buttons to secondary options, 
                    PixelCSS <strong className='fw-extrabold'>Buttons</strong> offer versatility and customization to suit any design. 
                    With a range of styles, sizes, and hover effects, 
                    you can create buttons that perfectly complement your website or application.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Pilled buttons</h3>
                <CodePreview code={pilledButtonsCode} />
                <CodeDemo code={pilledButtonsCode} codeTitle={'Pilled buttons'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">CTA buttons</h3>
                <CodePreview code={squaredButtonsCode} />
                <CodeDemo code={squaredButtonsCode} codeTitle={'CTA buttons'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Outlined buttons</h3>
                <CodePreview code={outlinedButtonsCode} />
                <CodeDemo code={outlinedButtonsCode} codeTitle={'Outlined buttons'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Button with an icon</h3>
                <CodePreview code={iconButton} />
                <CodeDemo code={iconButton} codeTitle={'button with an icon'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Block buttons</h3>
                <CodePreview code={blockedButtonsCode} />
                <CodeDemo code={blockedButtonsCode} codeTitle={'Block buttons'} codeActions={false} />
            </div>
        </div>
    )

}

export default Buttons;