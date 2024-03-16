import PropertiesTable from '../../components/PropertiesTable';

const Margin = () => {

    const marginClasses = [
        { name: 'Margin', properties: [
            { classNames: 'm-0', description: 'margin: 0' },
            { classNames: 'm-1', description: 'margin: 0.75rem' },
            { classNames: 'm-2', description: 'margin: 1.5rem' },
            { classNames: 'm-3', description: 'margin: 2.25rem' },
            { classNames: 'm-4', description: 'margin: 3rem' },
            { classNames: 'm-5', description: 'margin: 3.75rem' }
        ]},
        { name: 'Margin-top', properties: [
            { classNames: 'mt-0', description: 'margin-top: 0' },
            { classNames: 'mt-1', description: 'margin-top: 0.75rem' },
            { classNames: 'mt-2', description: 'margin-top: 1.5rem' },
            { classNames: 'mt-3', description: 'margin-top: 2.25rem' },
            { classNames: 'mt-4', description: 'margin-top: 3rem' },
            { classNames: 'mt-5', description: 'margin-top: 3.75rem' }
        ]},
        { name: 'Margin-bottom', properties: [
            { classNames: 'mb-0', description: 'margin-bottom: 0' },
            { classNames: 'mb-1', description: 'margin-bottom: 0.75rem' },
            { classNames: 'mb-2', description: 'margin-bottom: 1.5rem' },
            { classNames: 'mb-3', description: 'margin-bottom: 2.25rem' },
            { classNames: 'mb-4', description: 'margin-bottom: 3rem' },
            { classNames: 'mb-5', description: 'margin-bottom: 3.75rem' }
        ]},
        { name: 'Margin-left', properties: [
            { classNames: 'ml-0', description: 'margin-left: 0' },
            { classNames: 'ml-1', description: 'margin-left: 0.75rem' },
            { classNames: 'ml-2', description: 'margin-left: 1.5rem' },
            { classNames: 'ml-3', description: 'margin-left: 2.25rem' },
            { classNames: 'ml-4', description: 'margin-left: 3rem' },
            { classNames: 'ml-5', description: 'margin-left: 3.75rem' }
        ]},
        { name: 'Margin-right', properties: [
            { classNames: 'mr-0', description: 'margin-right: 0' },
            { classNames: 'mr-1', description: 'margin-right: 0.75rem' },
            { classNames: 'mr-2', description: 'margin-right: 1.5rem' },
            { classNames: 'mr-3', description: 'margin-right: 2.25rem' },
            { classNames: 'mr-4', description: 'margin-right: 3rem' },
            { classNames: 'mr-5', description: 'margin-right: 3.75rem' }
        ]}
    ];
    

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Margin</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Use <strong className='fw-extrabold'>m</strong> class with scale number for margin on all sides. Use <strong className='fw-extrabold'>ml, mr, mt, mb</strong> for left, right, top and bottom margin respectively.
                Margin utility classes use a scale from 0 to 5 units.
            </p>
            {
                marginClasses.map((marginClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{marginClass.name !== 'Margin' && marginClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={marginClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Margin;