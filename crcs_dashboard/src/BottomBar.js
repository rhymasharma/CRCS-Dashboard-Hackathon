import './BottomBar.css';

const BottomBar = () => {
    const openFeedbackPage = () => {
        window.open("https://cooperation.gov.in/feedback-suggestions", "_blank");
    };

    return (
        <div className="bottom-bar-container">
            <div className="bottom-content">
                <div className='heading'>GET IN TOUCH</div>
                <div>
                    <div>Ministry of Cooperation</div>
                    <div>Atal Akshay Urja Bhawan</div>
                    <div>CGO Complex, Lodhi Road</div>
                    <div>Behind NIA Building</div>
                    <div>New Delhi - 110003</div>
                </div>
            </div>
            <div className="bottom-content">
                <div className='heading'>NATIONAL COOPERATIVES</div>
                <div>
                    <div>NFCSF</div>
                    <div>KRIBHCO</div>
                    <div>TRIFED</div>
                    <div>NABARD</div>
                    <div>NAFED</div>
                    <div>IFFCO</div>
                    <div>NCUI</div>
                </div>
            </div>
            <div className='bottom-content'>
                <button className='feedback' onClick={openFeedbackPage}>Feedback/Suggestions</button>
                <img src={require("./images/bottom-bar-icons.png")}></img>
            </div>
        </div>
    );
};

export default BottomBar;
