import PropertiesTable from '../../components/PropertiesTable';

const Zindex = () => {

    const ZIndexClasses  = [
        { name: 'Z-Index', properties: [
            { classNames: 'z-index-0', description: 'z-index: 0' },
            { classNames: 'z-index-10', description: 'z-index: 10' },
            { classNames: 'z-index-20', description: 'z-index: 20' },
            { classNames: 'z-index-30', description: 'z-index: 30' },
            { classNames: 'z-index-40', description: 'z-index: 40' },
            { classNames: 'z-index-50', description: 'z-index: 50' },
            { classNames: 'z-index-auto', description: 'z-index: auto' }
        ]},
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Z-Index</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utilities for controlling the stack order of an element.
                Easily control the stack order of elements with <strong className='fw-extrabold'>z-index</strong> utilities. 
            </p>
            {
                ZIndexClasses .map((ZIndexClass) => (
                    <div className="textGray4">
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={ZIndexClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Zindex;