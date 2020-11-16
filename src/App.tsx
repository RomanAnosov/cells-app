import React, { useLayoutEffect, useRef, useState } from 'react';
import { createCn } from 'bem-react-classname';
import './App.scss';
import Card from './components/Card';
import updateLife from './lib/get-engine';
import { CellCard } from './types/CellCard';

const cn = createCn('app');

function App() {
    const [cards, setCards] = useState<CellCard[]>([]);

    const cardListRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        cardListRef.current?.scrollTo({top: cardListRef.current?.scrollHeight});
    }, [cards]);

    const handleAddBtnClick = () => {
        setCards((lst) => updateLife(lst));
    };

    return (
        <div className={cn()}>
            <header className={cn('header')}>
                <h6>Клеточное наполнение</h6>
            </header>
            <div ref={cardListRef} className={cn('card-list')}>
                {cards.map((card) => (
                    <Card type={card.type} key={card.id} />
                ))}
            </div>

            <button onClick={handleAddBtnClick} className={cn('add-btn')}>
                сотворить
            </button>
        </div>
    );
}

export default App;
