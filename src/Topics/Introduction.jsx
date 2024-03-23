import CodeDemo from "../components/codeblocks/CodeDemo"

export const Introduction = () => {

    const linkCSS = `<link rel="stylesheet" href="https://yogesh-rai.github.io/pixelcss/dist/index.css" />`;
    const npmInstall = `$ npm install pixelcss`;
    const importCSSFile = `import "pixelcss/dist/index.css";`;

    return (
        <div className="container pt-4">
            <div className="text-gray-dark-2">
                <h1 className="font-xl text-black-light-2 fw-bold mb-2">Get started with PixelCSS</h1>
                <h3 className="font-md text-gray-dark-3 fw-bold lh-4 mb-2">
                Introducing <strong className="text-green-light-1 b-bottom">PixelCSS</strong>, your go-to utility-first CSS framework inspired by <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer noopener" className="text-green-light-1 b-bottom">TailwindCSS</a>&nbsp;
                for creating stylish and responsive web designs with ease. 
                PixelCSS offers a simple and intuitive way to build visually appealing websites. 
                With a wide range of components and utilities,
                you can customize your designs to suit your needs.
                PixelCSS empowers you to effortlessly craft modern websites directly within your HTML.
                </h3>
                <p className="lh-3 fw-medium mb-4">
                    <span className="text-green">PixelCSS</span> is a versatile CSS framework filled with handy classes like <strong className=" lh-1 fw-bold">display-f, pt-2, jc-center, and text-red.</strong>&nbsp;
                    You can easily  mix and match these classes to create any design you want right in your HTML code. Even if you use the same colors and sizes, 
                    you can make each project look completely different.
                </p>
            </div>
            <div className="mt-2 mb-4">
                <h3 className="font-xl fw-bold mb-2">Installation</h3>

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