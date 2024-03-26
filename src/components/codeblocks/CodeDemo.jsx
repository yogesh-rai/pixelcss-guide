import React, {useState, useEffect} from 'react';
import CodeSnippet from './CodeSnippet';
import { Icon } from '@iconify-icon/react';
// import CodePreview from './CodePreview'

const CodeDemo = ({ code, codeTitle, codeActions, language = "html" }) => {

    const [previewEnabled, setPreview] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if(!codeActions){
            setPreview(false)
        }
    }, [codeActions])


    function toggleCopiedSuccess() {
        setIsCopied(!isCopied);
        if (!isCopied) {
          setTimeout(() => {
            setIsCopied(false);
          }, 1000); // Hide the success icon after 1 seconds (1000 milliseconds)
        }
    };


    function showPreview(isPreviewSelected){
        setPreview(isPreviewSelected)
    }


    function copyText(){
        navigator.clipboard.writeText(code).then(toggleCopiedSuccess);
    }

    return (
        
        <div className="mt-1 mb-1 border-solid bc-gray bw-thin">
            <div className="p-1 pb-0 pt-0 display-f ai-center jc-between">
                <h4 className="text-gray-dark-2">{codeTitle}</h4>
                <div className="display-f fw-wrap" style={{justifySelf: 'flex-end'}}>
                    {
                        codeActions ? (
                            <div className="">
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
                        { !isCopied ? <Icon icon="fa-solid:copy" width="1rem" height="1rem" /> : <Icon icon="ooui:success" width="1rem" height="1rem" />}
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