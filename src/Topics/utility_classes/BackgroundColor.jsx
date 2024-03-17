import PropertiesTable from '../../components/PropertiesTable';

const BackgroundColor = () => {

    const backgroundClasses  = [
        { name: 'Background-Color', properties: [
            { classNames: 'bg-primary', color: 'primary', description: 'background-color: #326dee' },
            { classNames: 'bg-secondary', color: 'secondary', description: 'background-color: #6c757d' },
            { classNames: 'bg-success', color: 'success', description: 'background-color: #228B22' },
            { classNames: 'bg-danger', color: 'danger', description: 'background-color: #d32752' },
            { classNames: 'bg-info', color: 'info', description: 'background-color: #f6c31c' },
            { classNames: 'bg-dark', color: 'dark', description: 'background-color: #343a40' },
            { classNames: 'bg-red', color: 'red', description: 'background-color: #ff0000' },
            { classNames: 'bg-orange', color: 'orange', description: 'background-color: #ff7f00' },
            { classNames: 'bg-yellow', color: 'yellow', description: 'background-color: #ffff00' },
            { classNames: 'bg-green', color: 'green', description: 'background-color: #19e635' },
            { classNames: 'bg-blue', color: 'blue', description: 'background-color: #0000ff' },
            { classNames: 'bg-purple', color: 'purple', description: 'background-color: #8a2be2' },
            { classNames: 'bg-brown', color: 'brown', description: 'background-color: #a52a2a' },
            { classNames: 'bg-gray', color: 'gray', description: 'background-color: #808080' },
            { classNames: 'bg-black', color: 'black', description: 'background-color: black' },
            { classNames: 'bg-white', color: 'white', description: 'background-color: white' }
        ]},
    ];

    const lighterVariationClasses = [
        { name: 'Lighter Variations', properties: [
            { classNames: 'bg-red-light-1', color: 'red-light-1', description: 'background-color: #ff1a1a' },
            { classNames: 'bg-red-light-2', color: 'red-light-2', description: 'background-color: #ff3333' },
            { classNames: 'bg-red-light-3', color: 'red-light-3', description: 'background-color: #ff4d4d' },
            { classNames: 'bg-red-light-4', color: 'red-light-4', description: 'background-color: #ff6666' },
            { classNames: 'bg-red-light-5', color: 'red-light-5', description: 'background-color: #ff8080' },
            { classNames: 'bg-red-light-6', color: 'red-light-6', description: 'background-color: #ff9999' },
            { classNames: 'bg-primary-light-1', color: 'primary-light-1', description: 'background-color: #477cf0' },
            { classNames: 'bg-primary-light-2', color: 'primary-light-2', description: 'background-color: #5b8af1' },
            { classNames: 'bg-primary-light-3', color: 'primary-light-3', description: 'background-color: #7099f3' },
            { classNames: 'bg-primary-light-4', color: 'primary-light-4', description: 'background-color: #84a7f5' },
            { classNames: 'bg-primary-light-5', color: 'primary-light-5', description: 'background-color: #99b6f7' },
            { classNames: 'bg-primary-light-6', color: 'primary-light-6', description: 'background-color: #adc5f8' },
        ]},
    ];

    const darkerVariationClasses = [
        { name: 'Darker Variations', properties: [
            { classNames: 'bg-purple-dark-1', color: 'purple-dark-1', description: 'background-color: #ff1a1a' },
            { classNames: 'bg-purple-dark-2', color: 'purple-dark-2', description: 'background-color: #ff3333' },
            { classNames: 'bg-purple-dark-3', color: 'purple-dark-3', description: 'background-color: #ff4d4d' },
            { classNames: 'bg-purple-dark-4', color: 'purple-dark-4', description: 'background-color: #ff6666' },
            { classNames: 'bg-purple-dark-5', color: 'purple-dark-5', description: 'background-color: #ff8080' },
            { classNames: 'bg-purple-dark-6', color: 'purple-dark-6', description: 'background-color: #ff9999' },
            { classNames: 'bg-info-dark-1', color: 'info-dark-1', description: 'background-color: #477cf0' },
            { classNames: 'bg-info-dark-2', color: 'info-dark-2', description: 'background-color: #5b8af1' },
            { classNames: 'bg-info-dark-3', color: 'info-dark-3', description: 'background-color: #7099f3' },
            { classNames: 'bg-info-dark-4', color: 'info-dark-4', description: 'background-color: #84a7f5' },
            { classNames: 'bg-info-dark-5', color: 'info-dark-5', description: 'background-color: #99b6f7' },
            { classNames: 'bg-info-dark-6', color: 'info-dark-6', description: 'background-color: #adc5f8' },
        ]},
    ];

    const bgColorHoverClasses = [
        { name: 'Darker Variations', properties: [
            { classNames: 'bg-purple-dark-1', color: 'purple-dark-1', description: 'background-color: #ff1a1a' },
            { classNames: 'bg-purple-dark-2', color: 'purple-dark-2', description: 'background-color: #ff3333' },
            { classNames: 'bg-purple-dark-3', color: 'purple-dark-3', description: 'background-color: #ff4d4d' },
            { classNames: 'bg-purple-dark-4', color: 'purple-dark-4', description: 'background-color: #ff6666' },
            { classNames: 'bg-purple-dark-5', color: 'purple-dark-5', description: 'background-color: #ff8080' },
            { classNames: 'bg-purple-dark-6', color: 'purple-dark-6', description: 'background-color: #ff9999' },
            { classNames: 'bg-info-dark-1', color: 'info-dark-1', description: 'background-color: #477cf0' },
            { classNames: 'bg-info-dark-2', color: 'info-dark-2', description: 'background-color: #5b8af1' },
            { classNames: 'bg-info-dark-3', color: 'info-dark-3', description: 'background-color: #7099f3' },
            { classNames: 'bg-info-dark-4', color: 'info-dark-4', description: 'background-color: #84a7f5' },
            { classNames: 'bg-info-dark-5', color: 'info-dark-5', description: 'background-color: #99b6f7' },
            { classNames: 'bg-info-dark-6', color: 'info-dark-6', description: 'background-color: #adc5f8' },
        ]},
    ];

    

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Background Color</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utilities for controlling an element's <strong className='fw-extrabold'>background color.</strong> Simply use <strong className='fw-extrabold'>'bg'</strong> followed by the color name to apply your desired background color. 
                Enhance your design further by utilizing <strong className='fw-extrabold'>'light' and 'dark'</strong> keywords for color variations.
                For interactive elements, enhance user experience by applying hover effects using the <strong className='fw-extrabold'>'bg-hover'</strong> keyword.
            </p>
            {/* <p className="p-1 border-solid bw-thin bc-blue bg-primary-light-5 text-primary-dark-5 br-xs mt-3 mb-4 lh-3">
                <strong>Breakpoints:</strong> {`xs: 0px,   sm: 640px,   md: 768px,   lg: 1024px,   xl: 1280px`}
            </p> */}
            {
                backgroundClasses.map((backgroundClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{backgroundClass.name !== 'Background-Color' && backgroundClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={backgroundClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                lighterVariationClasses.map((lighterVariationClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{lighterVariationClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                                    {`Use bg-{color}-light-{scale} to apply lighter variation of background color. Scale range is from 0 to 9.`}
                                </p>
                                <PropertiesTable data={lighterVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create lighter variations for other colors. For example: 'bg-yellow-light-8', 'bg-success-light-9'
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                darkerVariationClasses.map((darkerVariationClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{darkerVariationClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                                    {`Use bg-{color}-dark-{scale} to apply darker variation of background color. Scale range is from 0 to 9.`}
                                </p>
                                <PropertiesTable data={darkerVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create darker variations for other colors. For example: 'bg-orange-dark-5', 'bg-danger-dark-9'
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BackgroundColor;