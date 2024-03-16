import PropertiesTable from '../../components/PropertiesTable';

const Padding = () => {

    const paddingClasses = [
        { name: 'Padding', properties: [
            { classNames: 'p-0', description: 'padding: 0' },
            { classNames: 'p-1', description: 'padding: 0.75rem' },
            { classNames: 'p-2', description: 'padding: 1.5rem' },
            { classNames: 'p-3', description: 'padding: 2.25rem' },
            { classNames: 'p-4', description: 'padding: 3rem' },
            { classNames: 'p-5', description: 'padding: 3.75rem' }
        ]},
        { name: 'Padding-top', properties: [
            { classNames: 'pt-0', description: 'padding-top: 0' },
            { classNames: 'pt-1', description: 'padding-top: 0.75rem' },
            { classNames: 'pt-2', description: 'padding-top: 1.5rem' },
            { classNames: 'pt-3', description: 'padding-top: 2.25rem' },
            { classNames: 'pt-4', description: 'padding-top: 3rem' },
            { classNames: 'pt-5', description: 'padding-top: 3.75rem' }
        ]},
        { name: 'Padding-bottom', properties: [
            { classNames: 'pb-0', description: 'padding-bottom: 0' },
            { classNames: 'pb-1', description: 'padding-bottom: 0.75rem' },
            { classNames: 'pb-2', description: 'padding-bottom: 1.5rem' },
            { classNames: 'pb-3', description: 'padding-bottom: 2.25rem' },
            { classNames: 'pb-4', description: 'padding-bottom: 3rem' },
            { classNames: 'pb-5', description: 'padding-bottom: 3.75rem' }
        ]},
        { name: 'Padding-left', properties: [
            { classNames: 'pl-0', description: 'padding-left: 0' },
            { classNames: 'pl-1', description: 'padding-left: 0.75rem' },
            { classNames: 'pl-2', description: 'padding-left: 1.5rem' },
            { classNames: 'pl-3', description: 'padding-left: 2.25rem' },
            { classNames: 'pl-4', description: 'padding-left: 3rem' },
            { classNames: 'pl-5', description: 'padding-left: 3.75rem' }
        ]},
        { name: 'Padding-right', properties: [
            { classNames: 'pr-0', description: 'padding-right: 0' },
            { classNames: 'pr-1', description: 'padding-right: 0.75rem' },
            { classNames: 'pr-2', description: 'padding-right: 1.5rem' },
            { classNames: 'pr-3', description: 'padding-right: 2.25rem' },
            { classNames: 'pr-4', description: 'padding-right: 3rem' },
            { classNames: 'pr-5', description: 'padding-right: 3.75rem' }
        ]}
    ];


    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Padding</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Use <strong className='fw-extrabold'>p</strong> class with scale number for padding on all sides. Use <strong className='fw-extrabold'>pl, pr, pt, pb</strong> for left, right, top and bottom padding respectively.
                padding utility classes use a scale from 0 to 5 units.
            </p>
            {
                paddingClasses.map((paddingClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{paddingClass.name !== 'Padding' && paddingClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={paddingClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Padding;