import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Cards = () => {
  
    const textCardCode = 
    `
    <div>

        <!-- simple text card with a link -->
        <div class="card bg-white">
            <div class="card-body">
                <div class="card-title">Heading 1</div>
                <p class="lh-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum iste assumenda.
                </p>
                <div class="mt-1 fw-bold">
                    <a href="www.google.com">LEARN MORE</a>
                </div>
            </div>
        </div>

    </div>
    `;
    
    const imageCardCode = 
    `
    <div>

        <!-- card with an image and a button -->
        <div class="card bg-white">
            <figure class="card-img">
                <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img-1">
            </figure>
            <div class="card-body">
                <div class="card-title">Heading 1</div>
                <p class="lh-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum iste assumenda.
                </p>
                <button class="btn-primary mt-2 text-white fw-bold w-full br-sm">Sign Up</button>
            </div>
        </div>

    </div>
    `;

    const animatedimageCardCode = 
    `
    <div>

        <!-- card with hover image effect -->
        <div class="card bg-white">
            <figure class="card-img animated-img">
                <img src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hover-img">
            </figure>
            <div class="card-body">
                <div class="card-title">Heading 1</div>
                <p class="lh-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum iste assumenda.
                </p>
            </div>
        </div>

    </div>
    `;


    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Cards</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    PixelCSS <strong className='fw-extrabold'>Cards</strong> offer a simple yet powerful way to organize and present your content. 
                    With a variety of styles and customizable options, 
                    you can easily create visually appealing containers for your information or products. 
                    From showcasing images to displaying text, PixelCSS Cards provide the flexibility you need to make your designs shine.
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Text only card</h3>
                <CodePreview code={textCardCode} />
                <CodeDemo code={textCardCode} codeTitle={'Text only card with a link'} codeActions={false} />
            </div>
            <div className="mb-3">
                <h3 className="mt-1 mb-1">Card with image</h3>
                <CodePreview code={imageCardCode} />
                <CodeDemo code={imageCardCode} codeTitle={'Card with an image and a button'} codeActions={false} />
            </div>

            <div className="mb-3">
                <h3 className="mt-1 mb-1">Card with image hover effect</h3>
                <CodePreview code={animatedimageCardCode} />
                <CodeDemo code={animatedimageCardCode} codeTitle={'Card with image hover effect'} codeActions={false} />
            </div>

        </div>
    )

}

export default Cards;