import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Images = () => {
  
    const standardImage = 
    `
    <div>

        <!-- standard image -->
        <figure class="standard-img">
            <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="std-img">
        </figure>

    </div>
    `;

    const cardImage = 
    `
    <div>

        <!-- card image -->
        <div class="card">
            <figure class="card-img">
                <img src="https://images.pexels.com/photos/3037435/pexels-photo-3037435.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card-img">
            </figure>
        </div>

    </div>
    `;

    const animatedImage = 
    `
    <div>

        <!-- image with hover effect -->
        <div class="card">
            <figure class="animated-img">
                <img src="https://images.pexels.com/photos/1786306/pexels-photo-1786306.jpeg?auto=compress&cs=tinysrgb&w=600" alt="animated-img">
            </figure>
        </div>

    </div>
    `;
    

    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Images</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    From stunning photos to informative graphics, 
                    PixelCSS <strong className='fw-extrabold'>Images</strong> offer flexibility and clarity to showcase your media. With customizable sizing, borders, and effects, 
                    you can effortlessly integrate images into your design.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Standard Image</h3>
                <CodePreview code={standardImage} />
                <CodeDemo code={standardImage} codeTitle={'Standard Image'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Card Image</h3>
                <CodePreview code={cardImage} />
                <CodeDemo code={cardImage} codeTitle={'Card Image'} codeActions={false} />
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Image with hover effect</h3>
                <CodePreview code={animatedImage} />
                <CodeDemo code={animatedImage} codeTitle={'Image with hover effect'} codeActions={false} />
            </div>
        </div>
    )

}

export default Images;