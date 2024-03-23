
const PropertiesTable = ({ data }) => {
    return (
        <div className="border-solid bc-gray" style={{ maxWidth:'900px', minWidth: '170px' }}>
            <table className="w-full ta-left" style={{overflowX: 'auto'}}>
                <thead className="bg-green-light-3">
                    <tr>
                        <th className="p-1 fw-extrabold">Class</th>
                        <th className="p-1 pl-2 fw-extrabold">Properties</th>
                    </tr>
                </thead>
                <tbody className="">
                    {data.map((item, index) => (
                        <tr key={index} className={(index % 2 !== 0 ? 'bg-green-light-7' : '')}>
                            <td className="p-1 fw-bold text-gray-dark-2 lh-3">{item.classNames}</td>
                            <td className="p-1 fw-bold text-gray-dark-2 lh-3 display-f jc-between">
                                {item.description}
                                &nbsp;&nbsp;
                                {
                                item.classNames.includes('bg-') ?
                                <span className={`bg-${item?.color} pl-1 pr-1 border-solid bc-${item?.color} br-xs`}>{''}</span>
                                :
                                item.classNames.includes('text-') ?
                                <span className={`text-${item?.color} fw-extrabold`}>{item?.color}</span>
                                :
                                item.classNames.includes('bc-') ?
                                <span className={`pl-1 pr-1 border-solid bc-${item?.color} br-xs`}>{''}</span>
                                :
                                ''
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PropertiesTable;