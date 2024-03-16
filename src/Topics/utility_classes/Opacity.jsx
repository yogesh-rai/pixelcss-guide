import PropertiesTable from '../../components/PropertiesTable';

const Opacity = () => {

    const opacityClasses  = [
        { name: 'Opacity', properties: [
            { classNames: 'opacity-10', description: 'opacity: 0.1' },
            { classNames: 'opacity-20', description: 'opacity: 0.2' },
            { classNames: 'opacity-30', description: 'opacity: 0.3' },
            { classNames: 'opacity-40', description: 'opacity: 0.4' },
            { classNames: 'opacity-50', description: 'opacity: 0.5' },
            { classNames: 'opacity-60', description: 'opacity: 0.6' },
            { classNames: 'opacity-70', description: 'opacity: 0.7' },
            { classNames: 'opacity-80', description: 'opacity: 0.8' },
            { classNames: 'opacity-90', description: 'opacity: 0.9' },
            { classNames: 'opacity-100', description: 'opacity: 1' },
        ]},
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Opacity</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                {/* Utility classes for setting the <strong className='fw-extrabold'>width</strong> of an element. Use <strong className='fw-extrabold'>w</strong> class with scale number to quickly set width of an element. */}
                Easily control the transparency of elements with <strong className='fw-extrabold'>Opacity</strong> utilities. Control the opacity of an element using the <strong className='fw-extrabold'>opacity class with scale number (transparency amount).</strong>
            </p>
            {
                opacityClasses .map((opacityClass) => (
                    <div className="textGray4">
                        {/* <h2 className="font-xl text-black-light-2 fw-bold mt-3">{opacityClass.name !== 'Opacity' && opacityClass.name}</h2> */}
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={opacityClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Opacity;