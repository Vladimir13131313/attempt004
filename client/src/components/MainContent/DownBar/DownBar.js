import React from 'react';
import './DownBar.scss';
import {Button} from "../../Button/Button";


export const DownBar = ({quantity, storeId}) => {

    function deleteSelected () {
        let listOfAll = JSON.parse(localStorage.getItem("warehouses"));
        listOfAll[storeId].products = listOfAll[storeId].products.filter((item) => !item.checked)
        localStorage.setItem("warehouses", JSON.stringify(listOfAll));
    }

    return (
        <div className="down_bar" id="down_bar">
            <div className="down_bar_content">
                <div className="information">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.2857 0H1.71428C0.767511 0 0 0.767511 0 1.71428V14.2857C0 15.2325 0.767511 16 1.71428 16H14.2857C15.2325 16 16 15.2325 16 14.2857V1.71428C16 0.767511 15.2325 0 14.2857 0ZM5.14285 12.5714H3.42857C3.11297 12.5714 2.85713 12.3156 2.85713 12C2.85713 11.6844 3.11297 11.4286 3.42857 11.4286H5.14285C5.45846 11.4286 5.71429 11.6844 5.71429 12C5.71429 12.3156 5.45846 12.5714 5.14285 12.5714ZM5.14285 8.57142H3.42857C3.11297 8.57142 2.85713 8.31559 2.85713 7.99998C2.85713 7.68438 3.11297 7.42854 3.42857 7.42854H5.14285C5.45846 7.42854 5.71429 7.68438 5.71429 7.99998C5.71429 8.31559 5.45846 8.57142 5.14285 8.57142ZM5.14285 4.57141H3.42857C3.11297 4.57141 2.85713 4.31558 2.85713 3.99997C2.85713 3.68437 3.11297 3.42857 3.42857 3.42857H5.14285C5.45846 3.42857 5.71429 3.68441 5.71429 4.00001C5.71429 4.31561 5.45846 4.57141 5.14285 4.57141ZM12.5714 12.5714H7.42858C7.11298 12.5714 6.85714 12.3156 6.85714 12C6.85714 11.6844 7.11298 11.4286 7.42858 11.4286H12.5714C12.887 11.4286 13.1429 11.6844 13.1429 12C13.1429 12.3156 12.887 12.5714 12.5714 12.5714ZM12.5714 8.57142H7.42858C7.11298 8.57142 6.85714 8.31559 6.85714 7.99998C6.85714 7.68438 7.11298 7.42854 7.42858 7.42854H12.5714C12.887 7.42854 13.1429 7.68438 13.1429 7.99998C13.1429 8.31559 12.887 8.57142 12.5714 8.57142ZM12.5714 4.57141H7.42858C7.11298 4.57141 6.85714 4.31558 6.85714 3.99997C6.85714 3.68437 7.11298 3.42854 7.42858 3.42854H12.5714C12.887 3.42854 13.1429 3.68437 13.1429 3.99997C13.1429 4.31558 12.887 4.57141 12.5714 4.57141Z"
                            fill="#3E4C59"/>
                    </svg>
                    <div className="selected">Selected:</div>
                    <div className="selected" id="selected">{quantity}</div>
                </div>
                <div className="buttons">
                    <Button style="delete_button" name="Delete" func={deleteSelected}/>

                    <button className="common_button move_button" id="move_button">
                        Move&nbsp;&nbsp;&nbsp;&nbsp;
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.5L13 2.5M1 2.5L2.71875 1M1 2.5L2.71875 4" stroke="white" strokeWidth="1.2"
                                  strokeLinecap="round"/>
                            <path d="M13 7.5L1 7.5M13 7.5L11.2812 6M13 7.5L11.2812 9" stroke="white" strokeWidth="1.2"
                                  strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};