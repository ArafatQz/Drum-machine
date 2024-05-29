
import './drum_style.css';

const Screen = ({ text }) => {


    return (
        <div className="mini-screen" id="display">
            <div className="screen-content">
                <p className='text'>{text}</p>
            </div>
        </div>
    );
};

export default Screen;
