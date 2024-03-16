import PropertiesTable from '../../components/PropertiesTable';

const Typography = () => {

    const fontClasses = [
        { name: 'Font Size', properties: [
            { classNames: 'font-sm', description: 'font-size: 0.75rem' },
            { classNames: 'font-md', description: 'font-size: 1rem' },
            { classNames: 'font-lg', description: 'font-size: 1.5rem' },
            { classNames: 'font-xl', description: 'font-size: 2rem' },
            { classNames: 'font-xxl', description: 'font-size: 3rem' },
            { classNames: 'font-3xl', description: 'font-size: 4rem' }
        ]},
        { name: 'Font Weight', properties: [
            { classNames: 'fw-light', description: 'font-weight: 300' },
            { classNames: 'fw-normal', description: 'font-weight: 400' },
            { classNames: 'fw-medium', description: 'font-weight: 500' },
            { classNames: 'fw-bold', description: 'font-weight: 700' },
            { classNames: 'fw-extrabold', description: 'font-weight: 900' }
        ]},
        { name: 'Line Height', properties: [
            { classNames: 'lh-1', description: 'line-height: 0.75rem' },
            { classNames: 'lh-2', description: 'line-height: 1rem' },
            { classNames: 'lh-3', description: 'line-height: 1.5rem' },
            { classNames: 'lh-4', description: 'line-height: 2rem' },
            { classNames: 'lh-5', description: 'line-height: 3rem' },
        ]},
        { name: 'Text Align', properties: [
            { classNames: 'ta-left', description: 'text-align: left' },
            { classNames: 'ta-center', description: 'text-align: center' },
            { classNames: 'ta-right', description: 'text-align: right' },
            { classNames: 'ta-justify', description: 'text-align: justify' }
        ]}
    ];


    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Typography</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Enhance your <strong className='fw-extrabold'>typography</strong> effortlessly with these utility classes. Use <strong className='fw-extrabold'>'font' for font-size, 'fw' for font-weight, 'lh' for line-height, and 'ta' for text-align</strong>.
            </p>
            {
                fontClasses.map((fontClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{fontClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={fontClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Typography;