import React from 'react';
import './ListItems.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import FlipMove from 'react-flip-move';

export default function ListItems(props) {
    const items = props.items;
    const listItems = items ? items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input type="text"
                        id={item.key}
                        value={item.text}
                        onChange={
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                        }
                    />
                    <i className="fa fa-trash icon" onClick={() => props.deleteItem(item.key)} />
                </p>
            </div>
        )
    }) :
        null;
    return (
        <div>
            <FlipMove duration={500} easing="ease-out">
                {listItems}
            </FlipMove>
        </div>
    );
}