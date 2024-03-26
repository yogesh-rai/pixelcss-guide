import PropertiesTable from '../../components/PropertiesTable';

const BorderColor = () => {

    const borderColorClasses  = [
        { name: 'Border-Color', properties: [
            { classNames: 'bc-primary', color: 'primary', description: 'border-color: #326dee' },
            { classNames: 'bc-secondary', color: 'secondary', description: 'border-color: #6c757d' },
            { classNames: 'bc-success', color: 'success', description: 'border-color: #228B22' },
            { classNames: 'bc-danger', color: 'danger', description: 'border-color: #d32752' },
            { classNames: 'bc-info', color: 'info', description: 'border-color: #f6c31c' },
            { classNames: 'bc-dark', color: 'dark', description: 'border-color: #343a40' },
            { classNames: 'bc-red', color: 'red', description: 'border-color: #ff0000' },
            { classNames: 'bc-orange', color: 'orange', description: 'border-color: #ff7f00' },
            { classNames: 'bc-yellow', color: 'yellow', description: 'border-color: #ffff00' },
            { classNames: 'bc-green', color: 'green', description: 'border-color: #19e635' },
            { classNames: 'bc-blue', color: 'blue', description: 'border-color: #0000ff' },
            { classNames: 'bc-purple', color: 'purple', description: 'border-color: #8a2be2' },
            { classNames: 'bc-brown', color: 'brown', description: 'border-color: #a52a2a' },
            { classNames: 'bc-gray', color: 'gray', description: 'border-color: #808080' },
            { classNames: 'bc-black', color: 'black', description: 'border-color: black' },
            { classNames: 'bc-white', color: 'white', description: 'border-color: white' }
        ]},
    ];

    const lighterVariationClasses = [
        { name: 'Lighter Variations', properties: [
            { classNames: 'bc-primary-light-1', color: 'primary-light-1', description: 'border-color: #477cf0' },
            { classNames: 'bc-primary-light-2', color: 'primary-light-2', description: 'border-color: #5b8af1' },
            { classNames: 'bc-primary-light-3', color: 'primary-light-3', description: 'border-color: #7099f3' },
            { classNames: 'bc-primary-light-4', color: 'primary-light-4', description: 'border-color: #84a7f5' },
            { classNames: 'bc-primary-light-5', color: 'primary-light-5', description: 'border-color: #99b6f7' },
            { classNames: 'bc-primary-light-6', color: 'primary-light-6', description: 'border-color: #adc5f8' },
            { classNames: 'bc-danger-light-1', color: 'danger-light-1', description: 'border-color: #d73d63' },
            { classNames: 'bc-danger-light-2', color: 'danger-light-2', description: 'border-color: #dc5275' },
            { classNames: 'bc-danger-light-3', color: 'danger-light-3', description: 'border-color: #e06886' },
            { classNames: 'bc-danger-light-4', color: 'danger-light-4', description: 'border-color: #e57d97' },
            { classNames: 'bc-danger-light-5', color: 'danger-light-5', description: 'border-color: #e993a9' },
            { classNames: 'bc-danger-light-6', color: 'danger-light-6', description: 'border-color: #eda9ba' },
        ]},
    ];

    // change color code
    const darkerVariationClasses = [
        { name: 'Darker Variations', properties: [
            { classNames: 'bc-yellow-dark-1', color: 'yellow-dark-1', description: 'border-color: #e6e600' },
            { classNames: 'bc-yellow-dark-2', color: 'yellow-dark-2', description: 'border-color: #cccc00' },
            { classNames: 'bc-yellow-dark-3', color: 'yellow-dark-3', description: 'border-color: #b3b300' },
            { classNames: 'bc-yellow-dark-4', color: 'yellow-dark-4', description: 'border-color: #999900' },
            { classNames: 'bc-yellow-dark-5', color: 'yellow-dark-5', description: 'border-color: olive' },
            { classNames: 'bc-yellow-dark-6', color: 'yellow-dark-6', description: 'border-color: #666600' },
            { classNames: 'bc-purple-dark-1', color: 'purple-dark-1', description: 'border-color: #7c27cb' },
            { classNames: 'bc-purple-dark-2', color: 'purple-dark-2', description: 'border-color: #6e22b5' },
            { classNames: 'bc-purple-dark-3', color: 'purple-dark-3', description: 'border-color: #611e9e' },
            { classNames: 'bc-purple-dark-4', color: 'purple-dark-4', description: 'border-color: #531a88' },
            { classNames: 'bc-purple-dark-5', color: 'purple-dark-5', description: 'border-color: #451671' },
            { classNames: 'bc-purple-dark-6', color: 'purple-dark-6', description: 'border-color: #37115a' },
        ]},
    ];
    

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Border Color</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utilities for controlling an element's <strong className='fw-extrabold'>border color.</strong> Simply use <strong className='fw-extrabold'>'bc'</strong> followed by the color name to apply your desired border color. 
                Enhance your design further by utilizing <strong className='fw-extrabold'>'light' and 'dark'</strong> keywords for color variations.
            </p>
            {
                borderColorClasses.map((borderColorClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{borderColorClass.name !== 'Border-Color' && borderColorClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={borderColorClass.properties} />
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
                                    {`Use bc-{color}-light-{scale} to apply lighter variation of border color. Scale range is from 1 to 9.`}
                                </p>
                                <PropertiesTable data={lighterVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create lighter variations for other colors. For example: 'bc-blue-light-8', 'bc-red-light-5', etc.
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
                                    {`Use bc-{color}-dark-{scale} to apply darker variation of border color. Scale range is from 1 to 9.`}
                                </p>
                                <PropertiesTable data={darkerVariationClass.properties} />
                                <p className="font-md text-gray-dark-3 fw-bold lh-3 mt-2">
                                    Similarly, you can create darker variations for other colors. For example: 'bc-info-dark-5', 'bc-brown-dark-2', etc.
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BorderColor;