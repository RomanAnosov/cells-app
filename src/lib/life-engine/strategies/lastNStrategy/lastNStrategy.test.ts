import { Type } from '../../../../constants/type';
import { CellCard } from '../../../../types/CellCard';
import { updWithLastNAlive, updWithLastNDead } from './lastNStrategy';

test('Should update array of cards alive case', () => {
    const cards: CellCard[] = [
        { id: '1', type: Type.ALIVE },
        { id: '2', type: Type.ALIVE },
        { id: '3', type: Type.ALIVE },
    ];
    const actual = updWithLastNAlive(cards, 3);
    expect(actual.length).toEqual(4);
    expect(actual[3].type).toBe(Type.LIFE);
});

test('Should update array of cards dead case', () => {
    const deadCards = [
        { id: '1', type: Type.DEAD },
        { id: '2', type: Type.DEAD },
        { id: '3', type: Type.DEAD },
    ];
    
    const cards: CellCard[] = [
        { id: '0', type: Type.LIFE },
        ...deadCards
    ];
    const actual = updWithLastNDead(cards, 3);
    expect(actual.length).toEqual(3);
    expect(actual).toEqual(deadCards);
});
