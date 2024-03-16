import PropertiesTable from '../../components/PropertiesTable';

const Grid = () => {

    const gridClasses = [
        { name: 'Gap', properties: [
            { classNames: 'gap-0', description: 'grid-gap: 0' },
            { classNames: 'gap-1', description: 'grid-gap: 10px' },
            { classNames: 'gap-2', description: 'grid-gap: 20px' },
            { classNames: 'gap-3', description: 'grid-gap: 30px' },
            { classNames: 'gap-4', description: 'grid-gap: 40px' },
            { classNames: 'gap-5', description: 'grid-gap: 50px' }
        ]},
        { name: 'Grid Flow', properties: [
            { classNames: 'grid-flow-row', description: 'grid-auto-flow: row' },
            { classNames: 'grid-flow-col', description: 'grid-auto-flow: column' }
        ]}
    ];

    const responsiveGridClasses = [
        { name: 'Grid Columns', properties: [
            { classNames: 'col-1-xs', description: 'grid-template-columns: repeat(1, 1fr) creates 1 column grid on extra small devices' },
            { classNames: 'col-2-xs', description: 'grid-template-columns: repeat(2, 1fr) creates 2 column grid on extra small devices' },
            { classNames: 'col-3-xs,....,col-12-xs', description: 'creates 3,4,5...,12 columns grid on extra small devices' },
            { classNames: 'col-1-sm', description: 'grid-template-columns: repeat(1, 1fr) creates 1 column grid on small devices' },
            { classNames: 'col-2-sm', description: 'grid-template-columns: repeat(2, 1fr) creates 2 column grid on small devices' },
            { classNames: 'col-3-sm,....,col-12-sm', description: 'creates 3,4,5...,12 columns grid on small devices' },
            { classNames: 'col-1-md', description: 'grid-template-columns: repeat(1, 1fr) creates 1 column grid on medium devices' },
            { classNames: 'col-2-md', description: 'grid-template-columns: repeat(2, 1fr) creates 2 column grid on medium devices' },
            { classNames: 'col-3-md,....,col-12-md', description: 'creates 3,4,5...,12 columns grid on small devices' },
            { classNames: 'col-1-lg', description: 'grid-template-columns: repeat(1, 1fr) creates 1 column grid on large devices' },
            { classNames: 'col-2-lg', description: 'grid-template-columns: repeat(2, 1fr) creates 2 column grid on large devices' },
            { classNames: 'col-3-lg,....,col-12-lg', description: 'creates 3,4,5...,12 columns grid on large devices' },
            { classNames: 'col-1-xl', description: 'grid-template-columns: repeat(1, 1fr) creates 1 column grid on extra large devices' },
            { classNames: 'col-2-xl', description: 'grid-template-columns: repeat(2, 1fr) creates 2 column grid on extra large devices' },
            { classNames: 'col-3-xl,....,col-12-xl', description: 'creates 3,4,5...,12 columns grid on extra large devices' },
            
        ]},
        { name: 'Grid Rows', properties: [
            { classNames: 'row-1-xs', description: 'grid-template-rows: repeat(1, minmax(0, 1fr)) creates 1 row grid on extra small devices' },
            { classNames: 'row-2-xs', description: 'grid-template-rows: repeat(2, minmax(0, 1fr)) creates 2 rows grid on extra small devices' },
            { classNames: 'row-3-xs,....,row-12-xs', description: 'creates 3,4,5...,12 rows grid on extra small devices' },
            { classNames: 'row-1-sm', description: 'grid-template-rows: repeat(1, minmax(0, 1fr)) creates 1 row grid on small devices' },
            { classNames: 'row-2-sm', description: 'grid-template-rows: repeat(2, minmax(0, 1fr)) creates 2 rows grid on small devices' },
            { classNames: 'row-3-sm,....,row-12-sm', description: 'creates 3,4,5...,12 rows grid on small devices' },
            { classNames: 'row-1-md', description: 'grid-template-rows: repeat(1, minmax(0, 1fr)) creates 1 row grid on medium devices' },
            { classNames: 'row-2-md', description: 'grid-template-rows: repeat(2, minmax(0, 1fr)) creates 2 rows grid on medium devices' },
            { classNames: 'row-3-md,....,row-12-md', description: 'creates 3,4,5...,12 rows grid on small devices' },
            { classNames: 'row-1-lg', description: 'grid-template-rows: repeat(1, minmax(0, 1fr)) creates 1 row grid on large devices' },
            { classNames: 'row-2-lg', description: 'grid-template-rows: repeat(2, minmax(0, 1fr)) creates 2 rows grid on large devices' },
            { classNames: 'row-3-lg,....,row-12-lg', description: 'creates 3,4,5...,12 rows grid on large devices' },
            { classNames: 'row-1-xl', description: 'grid-template-rows: repeat(1, minmax(0, 1fr)) creates 1 row grid on extra large devices' },
            { classNames: 'row-2-xl', description: 'grid-template-rows: repeat(2, minmax(0, 1fr)) creates 2 rows grid on extra large devices' },
            { classNames: 'row-3-xl,....,row-12-xl', description: 'creates 3,4,5...,12 rows grid on extra large devices' },
            
        ]},
    ];

    

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Grid</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Utility classes for setting the <strong className='fw-extrabold'>height</strong> of an element. Use <strong className='fw-extrabold'>h</strong> class with scale number to quickly set height of an element.
            </p>
            {
                gridClasses.map((gridClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{gridClass.name !== 'Grid' && gridClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={gridClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                responsiveGridClasses.map((responsiveGridClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{responsiveGridClass.name !== 'Grid' && responsiveGridClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={responsiveGridClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Grid;