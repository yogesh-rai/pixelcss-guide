import PropertiesTable from '../../components/PropertiesTable';

const Border = () => {

    const borderClasses = [
        { name: 'Border', properties: [
            { classNames: 'border-none', description: 'border: none' },
            { classNames: 'border-solid', description: 'border: solid' },
            { classNames: 'border-dashed', description: 'border: dashed' },
            { classNames: 'border-dotted', description: 'border: dotted' },
            { classNames: 'border-double', description: 'border: double' },
            { classNames: 'b-bottom', description: 'border-bottom: solid' },
            { classNames: 'b-left', description: 'border-left: solid' },
        ]},
        { name: 'Border Width', properties: [
            { classNames: 'bw-0', description: 'border-width: 0px;' },
            { classNames: 'bw-1', description: 'border-width: 1px;' },
            { classNames: 'bw-2', description: 'border-width: 2px;' },
            { classNames: 'bw-3', description: 'border-width: 3px;' },
            { classNames: 'bw-4', description: 'border-width: 4px;' },
            { classNames: 'bw-5', description: 'border-width: 5px;' },
            { classNames: 'bw-thin', description: 'border-width: thin;' },
            { classNames: 'bw-medium', description: 'border-width: medium;' },
            { classNames: 'bw-thick', description: 'border-width: thick;' },
        ]},
        { name: 'Border Radius', properties: [
            { classNames: 'br-none', description: 'border-radius: 0' },
            { classNames: 'br-xs', description: 'border-radius: 5px' },
            { classNames: 'br-sm', description: 'border-radius: 10px' },
            { classNames: 'br-md', description: 'border-radius: 20px' },
            { classNames: 'br-lg', description: 'border-radius: 40px' },
            { classNames: 'br-rounded-pill', description: 'border-radius: 1.5rem' },
            { classNames: 'br-rounded', description: 'border-radius: 50%' },
        ]},
    ];


    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Border</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Use <strong className='fw-extrabold'>border</strong> to add borders to your elements, while utilizing <strong className='fw-extrabold'>br, bw</strong> classes for refined control over border radius, and width, respectively.
            </p>
            {
                borderClasses.map((borderClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{borderClass.name !== 'Border' && borderClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={borderClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Border;