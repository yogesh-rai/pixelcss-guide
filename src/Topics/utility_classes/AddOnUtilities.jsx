import PropertiesTable from '../../components/PropertiesTable';

const AddOnUtilities = () => {

    const AddOnUtilitiesClasses  = [
        { name: 'Add-on Utilities', properties: [
            { classNames: 'container', description: 'a container with equal margin from left and right' },
            { classNames: 'display-n', description: 'display: none' },
            { classNames: 'display-b', description: 'display: block' },
            { classNames: 'display-i', description: 'display: inline' },
            { classNames: 'display-ib', description: 'display: inline-block' },
            { classNames: 'c-pointer', description: 'cursor: pointer' },
            { classNames: 'c-not-allowed', description: 'cursor: not-allowed' },
        ]},
    ];

    return (
        <div className="container pt-4 pb-4">
            <h2 className="font-xl text-black-light-2 fw-bold mb-2">Add-on Utilities</h2>
            <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                Add-on Utilities Classes which can be helpful in certain cases.
            </p>
            {
                AddOnUtilitiesClasses .map((AddOnUtilitiesClass) => (
                    <div className="textGray4">
                        <div className="mt-2">
                            <div>
                                <PropertiesTable data={AddOnUtilitiesClass.properties} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AddOnUtilities;