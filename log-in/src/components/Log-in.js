import { FaMicrosoft, FaGoogle, FaApple } from 'react-icons/fa';
const LogIn = () => {
    return (
        <div className='container-col align-center border-sm margin-top-lg '>
            <h3>Log In</h3>
            <div className='underline-sm white margin-top-sm' />
            <input type='email' name='' value='' placeholder='Enter email' className='margin-top-sm' />
            <input type='password' name='' value='' placeholder='Enter password' />
            <button type='' className='log-in'>
                Log In
            </button>
            <h4>OR</h4>
            <div className='login align-center border-sm center'>
                <FaGoogle />
                <p className='margin-left-vsm'>Continue with Google</p>
            </div>
            <div className='login align-center border-sm center'>
                <FaMicrosoft />
                <p className='margin-left-vsm'>Continue with Microsoft</p>
            </div>
            <div className='login align-center border-sm center'>
                <FaApple />
                <p className='margin-left-vsm'>Continue with Apple</p>
            </div>
            <div className='container-row space-lg resize-fill '>
                <div>
                    <a href='#' className='font-very-sm fc-light '>
                        Can't log in?
                    </a>
                </div>
                /
                <div>
                    <a href='#' className='font-very-sm fc-light'>
                        Already have an account?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
