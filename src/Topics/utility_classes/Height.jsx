import PropertiesTable from '../../components/PropertiesTable';

const Height = () => {

    const heightClasses = [
        { name: 'Height', properties: [
            { classNames: 'h-onehalf', description: 'height: 0.5rem' },
            { classNames: 'h-1', description: 'height: 1rem' },
            { classNames: 'h-2', description: 'height: 1.25rem' },
            { classNames: 'h-3', description: 'height: 1.5rem' },
            { classNames: 'h-4', description: 'height: 2rem' },
            { classNames: 'h-5', description: 'height: 2.5rem' },
            { classNames: 'h-6', description: 'height: 3rem' },
            { classNames: 'h-7', description: 'height: 3.5rem' },
            { classNames: 'h-8', description: 'height: 4rem' },
            { classNames: 'h-9', description: 'height: 4.5rem' },
            { classNames: 'h-10', description: 'height: 5rem' },
            { classNames: 'h-auto', description: 'height: auto' },
            { classNames: 'h-half', description: 'height: 50%' },
            { classNames: 'h-full', description: 'height: 100%' },
            { classNames: 'h-screen', description: 'height: 100vh' },
            { classNames: 'h-min-fit', description: 'height: min-content' },
            { classNames: 'h-max-fit', description: 'height: max-content' },
            { classNames: 'h-fit', description: 'height: fit-content' },
        ]},
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Height</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utility classes for setting the <strong className='fw-extrabold'>height</strong> of an element. Use <strong className='fw-extrabold'>h</strong> class with scale number to quickly set height of an element.
            </p>
            {
                heightClasses.map((heightClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{heightClass.name !== 'Height' && heightClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={heightClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Height;