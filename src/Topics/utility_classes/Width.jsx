import PropertiesTable from '../../components/PropertiesTable';

const Width = () => {

    const widthClasses  = [
        { name: 'Width', properties: [
            { classNames: 'w-onehalf', description: 'width: 0.5rem' },
            { classNames: 'w-1', description: 'width: 1rem' },
            { classNames: 'w-2', description: 'width: 1.25rem' },
            { classNames: 'w-3', description: 'width: 1.5rem' },
            { classNames: 'w-4', description: 'width: 2rem' },
            { classNames: 'w-5', description: 'width: 2.5rem' },
            { classNames: 'w-6', description: 'width: 3rem' },
            { classNames: 'w-7', description: 'width: 3.5rem' },
            { classNames: 'w-8', description: 'width: 4rem' },
            { classNames: 'w-9', description: 'width: 4.5rem' },
            { classNames: 'w-10', description: 'width: 5rem' },
            { classNames: 'w-auto', description: 'width: auto' },
            { classNames: 'w-half', description: 'width: 50%' },
            { classNames: 'w-full', description: 'width: 100%' },
            { classNames: 'w-screen', description: 'width: 100vw' },
            { classNames: 'w-min-fit', description: 'width: min-content' },
            { classNames: 'w-max-fit', description: 'width: max-content' },
            { classNames: 'w-fit', description: 'width: fit-content' },
        ]},
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Width</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utility classes for setting the <strong className='fw-extrabold'>width</strong> of an element. Use <strong className='fw-extrabold'>w</strong> class with scale number to quickly set width of an element.
            </p>
            {
                widthClasses .map((widthClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{widthClass.name !== 'Width' && widthClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={widthClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Width;