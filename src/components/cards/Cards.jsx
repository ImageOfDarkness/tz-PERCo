import './cards.scss';
import Like from "../../img/like.svg"
import {useState} from "react";


export function Cards({img, like, text}) {
    const [_like, _setLike] = useState(like)
    const [_modal, _setModal] = useState()
    const [value, setValue] = useState('')

    function togleLike(e) {
        e.stopPropagation()
        _setLike(!_like)
    }

    function togleModal() {
        _setModal(!_modal)
        console.log(_modal)
    }

    function setCommit(e) {
        setValue(e.target.value);
    }

    return (
        <div className='Cards'>
            <div onClick={togleModal} className='Cards__img-wrapper'>
                <picture>
                    <img id='myImg' src={img} alt="" className="Cards__img"/>
                </picture>
                <button onClick={togleLike}  className="cards__button-like">
                    <svg className={`cards__like ${_like && "active"}`} width="46" height="46" viewBox="0 0 46 46"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.7812 2.69531C31.2851 2.69531 28.9966 3.4863 26.9794 5.04634C25.0456 6.54197 23.758 8.44693 23 9.83214C22.242 8.44684 20.9544 6.54197 19.0206 5.04634C17.0034 3.4863 14.7149 2.69531 12.2188 2.69531C5.25298 2.69531 0 8.39293 0 15.9485C0 24.1112 6.55347 29.696 16.4746 38.1505C18.1593 39.5863 20.0689 41.2138 22.0538 42.9494C22.3154 43.1785 22.6514 43.3047 23 43.3047C23.3486 43.3047 23.6846 43.1785 23.9462 42.9495C25.9312 41.2136 27.8408 39.5862 29.5265 38.1496C39.4465 29.696 46 24.1112 46 15.9485C46 8.39293 40.747 2.69531 33.7812 2.69531Z"
                            fill="white"/>
                    </svg>
                </button>
            </div>
            {/*modal*/}
            <div id="myModal" onClick={togleModal} className={`modal ${_modal && "active"}`}>
                <span onClick={togleModal} className="close">×</span>
                <div onClick={e=>{e.stopPropagation()}} className='modal-wrapper'>
                    <img src={img} className="modal-content" id="img01"/>
                    <textarea value={value} onChange={setCommit} id="caption"></textarea>
                </div>
            </div>
            {/*modal close*/}
            <div className="Cards__discription" >{value}</div>
        </div>
    );
}