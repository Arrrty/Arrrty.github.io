import React from 'react';

function Main(props) {
    return (
        <main>
            <h1>Каршеринг</h1>
            <h1>Need for drive</h1>
            <p>Поминутная аренда авто твоего города</p>
            <button onClick={props.onClick}>Забронировать</button>
        </main>
      );
}

export default Main;