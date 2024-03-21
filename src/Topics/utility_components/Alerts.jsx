import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Alerts = () => {
  
    const alertsCode = 
    `
    <div>

        <!-- success alert -->
        <div class="display-f jc-between ai-center bg-success-light-5 text-success-dark-5 p-1 mb-4 br-xs">
            <div class="display-f ai-center">
                <!-- Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" class="mr-1">
                    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
                </svg>
                This is a success alert!
            </div>
            <span class="c-pointer">X</span>
        </div>


        <!-- danger alert -->
        <div class="display-f jc-between ai-center bg-danger-light-5 text-danger-dark-5 p-1 mb-4 br-xs" >
            <div class="display-f ai-center">
                <!-- Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="mr-1">
                    <path fill="currentColor" d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zm.51 11.83l-1.41 1.41L12 13.41l-2.83 2.83l-1.41-1.41L10.59 12L7.76 9.17l1.41-1.41L12 10.59l2.83-2.83l1.41 1.41L13.41 12z" />
                </svg>
                This is a danger alert!
            </div>
            <span class="c-pointer">X</span>
        </div>


        <!-- warning/info alert -->
        <div class="display-f jc-between ai-center bg-info-light-5 text-info-dark-5 p-1 mb-4 br-xs">
            <div class="display-f ai-center">
                <!-- Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="mr-1">
                    <path fill="currentColor" d="M1 21L12 2l11 19zm11-3q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m-1-3h2v-5h-2z" />
                </svg>
                This is a warning alert!
            </div>
            <span class="c-pointer">X</span>
        </div>


        <!-- primary notification alert -->
        <div class="display-f jc-between ai-center bg-primary-light-5 text-primary-dark-5 p-1 mb-4 br-xs">
            <div class="display-f ai-center">
                <!-- Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 20 20" class="mr-1">
                    <path fill="currentColor" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10s10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z" />
                </svg>
                This is a primary alert!
            </div>
            <span class="c-pointer">X</span>
        </div>

    </div>
    `;
    

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Alerts</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Keep your users informed and engaged with these simple and effective notification elements. 
                    From success messages to warnings and errors, 
                    PixelCSS <strong className='fw-extrabold'>Alerts</strong> offer clear and customizable options to communicate important information.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Types of alerts</h3>
                <CodePreview code={alertsCode} />
                <CodeDemo code={alertsCode} codeTitle={'Types of alerts'} codeActions={false} />
            </div>
        </div>
    )

}

export default Alerts;