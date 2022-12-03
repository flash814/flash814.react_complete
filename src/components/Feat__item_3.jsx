import React, { useState } from "react"; 
import feat_3 from '../img/feat_3.png';
import Feat__popup from "./popup__items/feat__popup";
function Feat__item_3 () {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <><div className="feat__item" onClick={() => setButtonPopup(true)}>
            <div className="feat__item-img"><img src={feat_3} alt="" srcSet="" /><button>From GBP  3600</button></div>
            <div className="feat__item-description">
                <div className="feat__description-title">Ontario Tower , LONDON</div>
                <div className="feat__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="feat__description-complete">
                        <div className="feat__complete"><progress value="10" max="100"></progress></div>
                        <div className="feat__remaining">
                            <div className="feat__complete-percent">10% Funded</div>
                            <div className="feat__remaining-time">8 Days Left</div>
                    </div>
                </div>
                <div className="feat__details">See Project Details</div>
            </div>
        </div>
        <Feat__popup trigger={buttonPopup} setTrigger=
        {setButtonPopup}>
            <div className="feat__popup">
                <div className="feat__content">
                    
                    <div className="feat__item-img">
                        <img src={feat_3} alt="" srcSet="" />
                    </div>
                    <div className="feat__item-description">
                        <div className="feat__description-title">Ontario Tower , LONDON</div>
                        <div className="feat__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button className="btn__price">From GBP  3600</button>
                        <div className="feat__description-complete">
                            <div className="feat__complete">
                                <progress value="10" max="100"></progress>
                            </div>
                            <div className="feat__remaining">
                                <div className="feat__complete-percent">10% Funded</div>
                                <div className="feat__remaining-time">8 Days Left</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Feat__popup>      
        </>
    );
}


export default Feat__item_3