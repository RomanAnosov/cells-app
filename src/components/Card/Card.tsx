import React, { FC } from 'react';
import { createCn } from 'bem-react-classname';
import { Type, typeInfoMap } from '../../constants/type';
import Icon from '../Icon';

const cn = createCn('card');

export interface CardProps {
    type: Type;
}

const Card: FC<CardProps> = ({ type }: CardProps) => {
    const { name, info } = typeInfoMap[type];

    return (
        <div className={cn()}>
            <div className={cn('icon')}>
                <Icon type={type} />
            </div>
            <div>
                <h6 className={cn('name')}>{name}</h6>
                <label className={cn('info')}>{info}</label>
            </div>
        </div>
    );
};

export default Card;
