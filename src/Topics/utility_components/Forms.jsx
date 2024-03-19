import CodeDemo from '../../components/codeblocks/CodeDemo';
import CodePreview from '../../components/codeblocks/CodePreview';

const Forms = () => {
  
    const stackedFormCode = 
    `
    <div>

        <!-- simple stacked form -->
        <div class="form-container">
            <form class="form">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label for="password" class="w-full">Password:</label>
                <input type="password" id="password" placeholder="Enter your Password">
              </div>
              <button type="submit" class="btn-primary text-white fw-bold w-full br-sm">Login</button>
            </form>
        </div>

    </div>
    `;
    
    const gridFormCode = 
    `
    <div>

        <!-- form using grid -->
        <div class="form-container">
            <form class="form">
              <div class="display-g col-2-md gap-1">
                <div class="form-group">
                    <label for="firstname">First Name:</label>
                    <input type="text" id="firstname" name="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="name" placeholder="Enter your name">
                </div>
              </div>
              <div class="form-group">
                <label for="email-2">Email:</label>
                <input type="email" id="email-2" name="email" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Enter your message"></textarea>
              </div>
              <div class="display-g col-2-md gap-1">
                    <div class="form-group">
                        <label for="password-2" class="w-full">Password:</label>
                        <input type="password" id="password-2" placeholder="Enter your Password">
                    </div>
                    <div class="form-group">
                        <label for="department">Department:</label>
                        <select id="department" name="department">
                            <option value="sales">Sales</option>
                            <option value="marketing">Marketing</option>
                            <option value="finance">Finance</option>
                            <option value="hr">HR</option>
                        </select>
                      </div>
              </div>
              <button type="submit" class="btn-primary text-white fw-bold w-full br-sm">Submit</button>
            </form>
        </div>

    </div>
    `;

    const errorFormCode = 
    `
    <div>

        <!-- Form with error state fields -->
        <div class="form-container">
            <form class="form">
              <div class="form-group">
                <label for="email-3">Email:</label>
                <input type="email" id="email-3" name="email" placeholder="Enter your email" class="bc-red">
                <small class="font-sm text-red">Please enter a valid email id.</small>
              </div>
              <div class="form-group">
                <label for="password-3" class="w-full">Password:</label>
                <input type="password" id="password-3" placeholder="Enter your Password" class="bc-red">
                <small class="font-sm text-red">Please enter a valid password.</small>
              </div>
              <button type="submit" class="btn-primary text-white fw-bold w-full br-sm">Login</button>
            </form>
        </div>

    </div>
    `;


    return (
        <div className="container pt-4 pb-4">
            <div className="text-gray-dark-2">
                <h2 className="font-xl text-black-light-2 fw-bold mb-2">Forms</h2>
                <p className="font-md text-gray-dark-3 fw-bold lh-3 mb-2">
                    Simplify the process of collecting user input with our intuitive and customizable form elements. 
                    From text inputs to dropdown selects, With a range of styling options and validation features, 
                    PixelCSS <strong className='fw-extrabold'>Forms</strong> offer a seamless way to create engaging and interactive user experiences. 
                </p>
            </div>

            <div className="mt-2 mb-3">
                <h3 className="mt-1 mb-1">Stacked Form</h3>
                <CodePreview code={stackedFormCode} />
                <CodeDemo code={stackedFormCode} codeTitle={'Simple stacked form'} codeActions={false} />
            </div>
            <div className="mb-3">
                <h3 className="mt-1 mb-1">Form using grid</h3>
                <CodePreview code={gridFormCode} />
                <CodeDemo code={gridFormCode} codeTitle={'Form using grid'} codeActions={false} />
            </div>

            <div className="mb-3">
                <h3 className="mt-1 mb-1">Form with error state fields</h3>
                <CodePreview code={errorFormCode} />
                <CodeDemo code={errorFormCode} codeTitle={'Form with error state fields'} codeActions={false} />
            </div>

        </div>
    )

}

export default Forms;