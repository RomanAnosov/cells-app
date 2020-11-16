import { CellCard } from '../types/CellCard';
import { updateLife } from './life-engine/engine';
import { rndCellCardFactory } from './life-engine/factory';
import { updWithLastNAlive, updWithLastNDead } from './life-engine/strategies/lastNStrategy/lastNStrategy';

const updDead = (state: CellCard[]) => updWithLastNDead(state, 3);

const updAlive = (state: CellCard[]) => updWithLastNAlive(state, 3);

const updLife = (state: CellCard[]) => updateLife(state, rndCellCardFactory, updDead, updAlive);

export default updLife;
