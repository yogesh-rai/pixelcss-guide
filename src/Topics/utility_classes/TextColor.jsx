import PropertiesTable from '../../components/PropertiesTable';

const TextColor = () => {

    const textColorClasses  = [
        { name: 'Text-Color', properties: [
            { classNames: 'text-primary', color: 'primary', description: 'color: #326dee' },
            { classNames: 'text-secondary', color: 'secondary', description: 'color: #6c757d' },
            { classNames: 'text-success', color: 'success', description: 'color: #228B22' },
            { classNames: 'text-danger', color: 'danger', description: 'color: #d32752' },
            { classNames: 'text-info', color: 'info', description: 'color: #f6c31c' },
            { classNames: 'text-dark', color: 'dark', description: 'color: #343a40' },
            { classNames: 'text-red', color: 'red', description: 'color: #ff0000' },
            { classNames: 'text-orange', color: 'orange', description: 'color: #ff7f00' },
            { classNames: 'text-yellow', color: 'yellow', description: 'color: #ffff00' },
            { classNames: 'text-green', color: 'green', description: 'color: #19e635' },
            { classNames: 'text-blue', color: 'blue', description: 'color: #0000ff' },
            { classNames: 'text-purple', color: 'purple', description: 'color: #8a2be2' },
            { classNames: 'text-brown', color: 'brown', description: 'color: #a52a2a' },
            { classNames: 'text-gray', color: 'gray', description: 'color: #808080' },
            { classNames: 'text-black', color: 'black', description: 'color: black' },
            { classNames: 'text-white', color: 'white', description: 'color: white' }
        ]},
    ];

    const lighterVariationClasses = [
        { name: 'Lighter Variations', properties: [
            { classNames: 'text-orange-light-1', color: 'orange-light-1', description: 'color: #ff8c1a' },
            { classNames: 'text-orange-light-2', color: 'orange-light-2', description: 'color: #ff9933' },
            { classNames: 'text-orange-light-3', color: 'orange-light-3', description: 'color: #ffa54d' },
            { classNames: 'text-orange-light-4', color: 'orange-light-4', description: 'color: #ffb266' },
            { classNames: 'text-orange-light-5', color: 'orange-light-5', description: 'color: #ffbf80' },
            { classNames: 'text-orange-light-6', color: 'orange-light-6', description: 'color: #ffcc99' },
            { classNames: 'text-purple-light-1', color: 'purple-light-1', description: 'color: #9640e5' },
            { classNames: 'text-purple-light-2', color: 'purple-light-2', description: 'color: #a155e8' },
            { classNames: 'text-purple-light-3', color: 'purple-light-3', description: 'color: #ad6beb' },
            { classNames: 'text-purple-light-4', color: 'purple-light-4', description: 'color: #b980ee' },
            { classNames: 'text-purple-light-5', color: 'purple-light-5', description: 'color: #c595f1' },
            { classNames: 'text-purple-light-6', color: 'purple-light-6', description: 'color: #d0aaf3' },
        ]},
    ];

    const darkerVariationClasses = [
        { name: 'Darker Variations', properties: [
            { classNames: 'text-blue-dark-1', color: 'blue-dark-1', description: 'color: #0000e6' },
            { classNames: 'text-blue-dark-2', color: 'blue-dark-2', description: 'color: #0000cc' },
            { classNames: 'text-blue-dark-3', color: 'blue-dark-3', description: 'color: #0000b3' },
            { classNames: 'text-blue-dark-4', color: 'blue-dark-4', description: 'color: #000099' },
            { classNames: 'text-blue-dark-5', color: 'blue-dark-5', description: 'color: navy' },
            { classNames: 'text-blue-dark-6', color: 'blue-dark-6', description: 'color: #000066' },
            { classNames: 'text-danger-dark-1', color: 'danger-dark-1', description: 'color: #be234a' },
            { classNames: 'text-danger-dark-2', color: 'danger-dark-2', description: 'color: #a91f42' },
            { classNames: 'text-danger-dark-3', color: 'danger-dark-3', description: 'color: #941b39' },
            { classNames: 'text-danger-dark-4', color: 'danger-dark-4', description: 'color: #7f1731' },
            { classNames: 'text-danger-dark-5', color: 'danger-dark-5', description: 'color: #6a1429' },
            { classNames: 'text-danger-dark-6', color: 'danger-dark-6', description: 'color: #541021' },
        ]},
    ];

    const textColorHoverClasses = [
        { name: 'Text Hover Effects Class', properties: [
            { classNames: 'text-hover-red-light-3', color: 'hover-red-light-3', description: 'Apply 3rd scale lighter variation of red color on hover' },
            { classNames: 'text-hover-brown-light-2', color: 'hover-brown-light-2', description: 'Apply 2nd scale lighter variation of brown color on hover' },
            { classNames: 'text-hover-primary', color: 'hover-primary', description: 'Apply Primary text color on hover' },
            { classNames: 'text-hover-orange-dark-2', color: 'hover-orange-dark-2', description: 'Apply 2nd scale darker variation of orange color on hover' },
            { classNames: 'text-hover-success', color: 'hover-success', description: 'Apply success bg color on hover' },
        ]},
    ];

    

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Text Color</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utilities for controlling an element's <strong className='fw-extrabold'>text color.</strong> Simply use <strong className='fw-extrabold'>'text'</strong> followed by the color name to apply your desired text color. 
                Enhance your design further by utilizing <strong className='fw-extrabold'>'light' and 'dark'</strong> keywords for color variations.
                For interactive texts, enhance user experience by applying hover effects using the <strong className='fw-extrabold'>'text-hover'</strong> keyword.
            </p>
            {
                textColorClasses.map((textColorClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{textColorClass.name !== 'Text-Color' && textColorClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={textColorClass.properties} />
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
                                    {`Use text-{color}-light-{scale} to apply lighter variation of text color. Scale range is from 1 to 9.`}
                                </p>
                                <PropertiesTable data={lighterVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create lighter variations for other colors. For example: 'text-green-light-8', 'text-secondary-light-3', etc.
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
                                    {`Use text-{color}-dark-{scale} to apply darker variation of text color. Scale range is from 1 to 9.`}
                                </p>
                                <PropertiesTable data={darkerVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create darker variations for other colors. For example: 'text-purple-dark-5', 'text-brown-dark-7', etc.
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                textColorHoverClasses.map((textColorHoverClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{textColorHoverClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                                    {`Enhance user interaction with the 'text-hover' class, effortlessly changing text colors upon mouse hover. Experiment with lighter and darker variations of colors to add depth and dimension to the text.`}
                                </p>
                                <PropertiesTable data={textColorHoverClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create text-hover classes for other colors. For example: 'text-hover-dark', 'text-hover-purple-dark-2, etc.             
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TextColor;