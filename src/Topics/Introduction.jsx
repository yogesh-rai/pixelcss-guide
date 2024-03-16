// import React from 'react'
// import CodeDemo from '../CodeDemo'

import CodeDemo from "../components/codeblocks/CodeDemo"

export const Introduction = () => {

    const linkCSS = `<link rel="stylesheet" href="https://yogesh-rai.github.io/pixelcss/dist/index.css" />`;
    const npmInstall = `$ npm install pixelcss`;
    const importCSSFile = `import "pixelcss/dist/index.css";`;
    // const featureCard = 
    // `<div class="displayFlex p2 bgWhite rounded border borderGray2 shadowMdGray2">
    //     <img src="./joey.jpg" class="w24 roundedFull mr3" alt="user"/>
    //     <div class="displayFlex flexCol">
    //         <p class='fontBold lineHeightMd'>Joey Tribbiani</p>
    //         <small class='mb1 fontSemiBold'>Actor</small>
    //         <em class="mb2 textXs textGray5">Previously: Cologne sampler, Acting Teacher, Waiter</em>
    //         <small class=''>Email: joeytribbiani@joey.com</small>
    //     </div>
    // </div>`;

    return (
        <div className="container pt-4">
            <div className="text-gray-dark-2">
                <h1 className="font-xl text-black-light-2 fw-bold mb-2">Get started with PixelCSS</h1>
                <h3 className="font-md text-gray-dark-3 fw-bold lh-4 mb-2">
                    {/* A CSS framework inspired by <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer noopener" className="textTeal4">TailwindCSS</a> 
                    &nbsp;which allows you to rapidly build modern websites without ever leaving your HTML. */}
                    Streamline Your Web Development with an Innovative CSS Framework Inspired by <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer noopener" className="text-blue-light-6">TailwindCSS</a>
                    &nbsp;Effortlessly Craft Modern Websites Directly within Your HTML!
                </h3>
                <p className="lh-3 fw-medium mb-4">
                    <span className="text-primary">PixelCSS</span> is utility-first CSS framework packed with classes like <span className=" lh-1 fw-bold">display-f, pt-2, jc-center, text-red</span> etc that can be composed to build any design, directly in your markup.
                     Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
                </p>
            </div>
            <div className="mt-2 mb-4">
                <h3 className="font-xl fw-bold mb-2">Installation</h3>
                {/* <small className="textRg textGray4">Learn how to get Mint-UI up and running in your project.</small> */}

                <h2 className="mt-1 mb-1">Using Link</h2>
                <p className="lh-3">You can directly import the CSS file in your html using the following link tag.</p>

                <CodeDemo code={linkCSS} codeTitle={'Link PixelCSS in your HTML'} codeActions={false}/>

                <h2 className="mt-3 mb-1">Using npm</h2>
                <p className="lh-3">You can also use npm to install pixelcss and import the index.css file in your App</p>

                <CodeDemo code={npmInstall} codeTitle={'Install PixelCSS with npm'} codeActions={false}/>
                <br />
                <CodeDemo code={importCSSFile} codeTitle={'Import index.css file in your app.js'} codeActions={false}/>

                <p className="p-1 border-solid bw-thin bc-orange bg-info-light-5 text-info-dark-5 br-xs mt-3 mb-4 lh-3">
                    <strong>Note:</strong> Import your own css styles after you import pixelcss. This way, you can easily override pixelcss classes whenever necessary.
                </p>
            </div>
        </div>
    )
}