import './main.scss';

import {Cards} from '../cards/Cards'
import laitbox1 from "../../img/laitbox_1.jpg"
import {useState} from "react";

export const Main = () => {
    return (
        <div className='Main'>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>

            <Cards img={laitbox1} like={false} text={"Lorem ipsum."} ></Cards>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>
            <Cards img={laitbox1} like={false} text={"Lorem ipsum."}></Cards>
        </div>
    );
}