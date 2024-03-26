import { Icon } from "@iconify-icon/react";

const Sidebar = ({topicList, isMobileMenuOpen, updateTopic}) => {

    return (
        <div className={"app-sidebar bg-green-light-3 "+ (isMobileMenuOpen? 'showOnMobile' : 'hideOnMobile')}>
            <div className="">
                {  topicList.map( (section, index) => {
                    const sectionHeadings = Object.keys(section);
                    return(
                            <div className="mb-1 pl-1" key={index}>
                                {
                                    sectionHeadings.map( (sectionName, index) => {
                                        
                                        return(
                                            <ul key={index} className="">
                                                <li
                                                  key={index} 
                                                  style={{display: section[sectionName].length < 2 ? 'none':''}}
                                                  className="display-b p-1 fw-extrabold"
                                                >
                                                    <Icon
                                                      icon={sectionName === 'Components'? 'iconamoon:component-fill': sectionName === 'Classes' ? 'eos-icons:product-classes': ''} 
                                                      style={{ marginRight: '5px', verticalAlign: 'text-bottom', marginLeft: '-5px' }}
                                                      width="20"
                                                      height="20" 
                                                    />
                                                    {sectionName}
                                                </li>

                                                {
                                                    section[sectionName].map(topicName => {
                                                        /* console.log('topicName: ', topicName.name + ' -- active: ', topicName.active) */
                                                        return(
                                                            <li
                                                              key={index} 
                                                              onClick={() => updateTopic(sectionName, topicName)} 
                                                              style= {{color: topicName.active ? 'green': '#0E1A11', borderLeft: topicName.active ? '5px solid green': '', backgroundColor: topicName.active ? 'white': ''}}
                                                              className="display-b bg-hover-green-light-8 fw-bold c-pointer p-1"
                                                            >
                                                                {topicName.name}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                
            </div>         
        </div>
    )
}

export default Sidebar;