export enum Type {
    DEAD = 'dead',
    ALIVE = 'alive',
    LIFE = 'life'
}

export const typeInfoMap = {
    [Type.DEAD]: {
        name: 'Мертвая',
        info: 'или прикидывается'
    },
    [Type.ALIVE]: {
        name: 'Живая',
        info: 'и шевелится!'
    },
    [Type.LIFE]: {
        name: 'Жизнь',
        info: 'Ку-ку!'
    }
};
