import { Type } from "../../../../constants/type";
import { CellCard } from "../../../../types/CellCard";
import { createCard } from "../../factory";

export const updWithLastNDead = (state: CellCard[], countOfLastDead: number) => {
    
    const VICTIM_COUNT = 1;
    
    const tailLength = countOfLastDead + VICTIM_COUNT;
    
    if (state.length < tailLength) {
        return state;
    }

    const stateCopy = [...state];

    const [victim, ...probablyDeathCells] = stateCopy.splice(-tailLength);

    const isDeadTail = probablyDeathCells.every((card) => card.type === Type.DEAD);

    if (isDeadTail && victim.type === Type.LIFE) {
        return [...stateCopy, ...probablyDeathCells];
    }

    return state;
};

export const updWithLastNAlive = (state: CellCard[], countOfLastAlive: number) => {
    if (state.length < countOfLastAlive) {
        return state;
    }

    const isTailAlive = state.slice(-countOfLastAlive).every((card) => card.type === Type.ALIVE);

    return isTailAlive ? [...state, createCard(Type.LIFE)] : [...state];
};