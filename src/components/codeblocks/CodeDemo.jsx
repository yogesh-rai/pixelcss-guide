import React, {useState, useEffect} from 'react';
import CodeSnippet from './CodeSnippet';
import { Icon } from '@iconify-icon/react';
// import CodePreview from './CodePreview'

const CodeDemo = ({ code, codeTitle, codeActions, language = "html" }) => {

    const [previewEnabled, setPreview] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if(!codeActions){
            setPreview(false)
        }
    }, [codeActions])


    function toggleTooltip() {
        setShowTooltip(!showTooltip);
        if (!showTooltip) {
          setTimeout(() => {
            setShowTooltip(false);
          }, 2000); // Hide the tooltip after 2 seconds (2000 milliseconds)
        }
    };


    function showPreview(isPreviewSelected){
        setPreview(isPreviewSelected)
    }


    function copyText(){
        navigator.clipboard.writeText(code).then(toggleTooltip);
    }

    return (
        
        <div className="mt-1 mb-1 border-solid bc-gray bw-thin">
            <div className="p-1 pb-0 pt-0 display-f ai-center jc-between">
                <h4 className="text-gray-dark-2">{codeTitle}</h4>
                <div className="display-f fw-wrap" style={{justifySelf: 'flex-end'}}>
                    {
                        codeActions ? (
                            <div className="">
                                {/* <button 
                                  onClick={()=> showPreview(true)} 
                                  style={{background: previewEnabled?'': 'transparent'}} 
                                  className="pl4 pr4 pt2 pb2 borderNone hover:bgGray3"
                                >
                                    <i className="far fa-eye mr1 textRg"></i>
                                </button> */}
                                <button
                                  onClick={()=> showPreview(false)} 
                                  style={{ background: !previewEnabled ? '': 'transparent' }} 
                                  className="p-1 border-none bg-hover-gray c-pointer"
                                >
                                    <Icon icon="iconoir:code" width="1rem" height="1rem" />
                                </button>
                            </div>
                        ): null
                    }
                    <button 
                      onClick={copyText}  
                      className="p-1 border-none bg-white bg-hover-gray-light-5 c-pointer"
                      style={{ position: 'relative' }}
                    >
                        { showTooltip && <div className="tooltip">copied</div> }
                        <Icon icon="fa-solid:copy" width="1rem" height="1rem" />
                    </button>
                </div>                

            </div>

            {
                previewEnabled ? 
                (
                    // <CodePreview code={code} />
                    null
                )
                :
                (
                    !previewEnabled && <CodeSnippet code={code} language={language} />
                )
            }

        </div>
    )
}

export default CodeDemo;