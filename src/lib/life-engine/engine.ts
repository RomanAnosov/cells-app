import { Type } from '../../constants/type';
import { CellCard } from '../../types/CellCard';
import { CellCardFactory } from '../life-engine/factory';

export type updateFn = (state: CellCard[]) => CellCard[];

export const updateLife = (
    state: CellCard[],
    getNewCell: CellCardFactory,
    updDeadStrategy: updateFn,
    updAliveStrategy: updateFn
) => {
    const newState = [...state, getNewCell()];

    return newState[newState.length - 1].type === Type.DEAD ? updDeadStrategy(newState) : updAliveStrategy(newState);
};
