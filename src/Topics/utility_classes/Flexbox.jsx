import PropertiesTable from '../../components/PropertiesTable';

const Flexbox = () => {

    const flexboxClasses = [
        { name: 'Flex', properties: [
            { classNames: 'display-f', description: 'display: flex' },
            { classNames: 'fw-wrap', description: 'flex-wrap: wrap' },
            { classNames: 'fw-nowrap', description: 'flex-wrap: nowrap' },
            { classNames: 'fg-0', description: 'flex-grow: 0' },
            { classNames: 'fg-1', description: 'flex-grow: 1' },
            { classNames: 'f-flow', description: 'flex-flow: row wrap' }
        ]},
        { name: 'Flex Direction', properties: [
            { classNames: 'fd-row', description: 'flex-direction: row' },
            { classNames: 'fd-col', description: 'flex-direction: column' },
            { classNames: 'fd-row-rev', description: 'flex-direction: row-reverse' },
            { classNames: 'fd-col-rev', description: 'flex-direction: column-reverse' }
        ]},
        // { name: 'Flex Wrap', properties: [
        //     { classNames: 'fw-wrap', description: 'flex-wrap: wrap' },
        //     { classNames: 'fw-nowrap', description: 'flex-wrap: nowrap' }
        // ]},
        // { name: 'Flex Grow', properties: [
        //     { classNames: 'fg-0', description: 'flex-grow: 0' },
        //     { classNames: 'fg-1', description: 'flex-grow: 1' }
        // ]},
        { name: 'Justify Content', properties: [
            { classNames: 'jc-start', description: 'justify-content: flex-start' },
            { classNames: 'jc-center', description: 'justify-content: center' },
            { classNames: 'jc-end', description: 'justify-content: flex-end' },
            { classNames: 'jc-between', description: 'justify-content: space-between' },
            { classNames: 'jc-around', description: 'justify-content: space-around' },
            { classNames: 'jc-evenly', description: 'justify-content: space-evenly' }
        ]},
        { name: 'Justify Items', properties: [
            { classNames: 'ji-start', description: 'justify-items: start' },
            { classNames: 'ji-end', description: 'justify-items: end' },
            { classNames: 'ji-center', description: 'justify-items: center' }
        ]},
        { name: 'Align Content', properties: [
            { classNames: 'ac-start', description: 'align-content: flex-start' },
            { classNames: 'ac-center', description: 'align-content: center' },
            { classNames: 'ac-end', description: 'align-content: flex-end' },
            { classNames: 'ac-between', description: 'align-content: space-between' },
            { classNames: 'ac-around', description: 'align-content: space-around' },
            { classNames: 'ac-evenly', description: 'align-content: space-evenly' }
        ]},
        { name: 'Align Items', properties: [
            { classNames: 'ai-start', description: 'align-items: flex-start' },
            { classNames: 'ai-end', description: 'align-items: flex-end' },
            { classNames: 'ai-center', description: 'align-items: center' }
        ]},
        // { name: 'Flex Flow', properties: [
        //     { classNames: 'f-flow', description: 'flex-flow: row wrap' }
        // ]}
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Flexbox</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Simplify layout design with <strong className='fw-extrabold'>Flexbox</strong> utilities. 
                Begin by applying the class <strong className='fw-extrabold'>"display-f" to your element for "display: flex" functionality</strong>, then utilize additional flex classes to customize its layout and its child elements effortlessly. 
                Flexbox utilities helps you to create responsive and dynamic layouts, offering flexibility and control over your design.
            </p>
            {
                flexboxClasses.map((flexboxClass) => (
                    <div className="textGray4">
                        <h2 className="font-xl text-black-light-2 fw-bold mt-3">{flexboxClass.name !== 'Flex' && flexboxClass.name}</h2>
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={flexboxClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Flexbox;