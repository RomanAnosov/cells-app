import { v4 as uuidv4 } from 'uuid';
import { Type } from '../../constants/type';
import { CellCard } from '../../types/CellCard';

export type CellCardFactory = () => CellCard;

export const createCard = (type: Type): CellCard => ({
    id: uuidv4(),
    type
});

export const rndCellCardFactory = () => createCard(Math.random() > 0.5 ? Type.ALIVE : Type.DEAD);
