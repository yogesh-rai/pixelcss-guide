import React, {useRef, useEffect} from 'react'

const CodePreview = ({code}) => {
    const previewBox = useRef(null)
    useEffect(() => {
        previewBox.current.innerHTML = code 
        // return () => {
        //     previewBox.innerHTML = ''
        // }
    }, [code])

    return (
        <div className="mt-1 mb-1 pt-1 pb-1"
            ref={previewBox}>
        </div>
    )
}

export default CodePreview;