import React, { FC } from 'react';
import { createCn } from 'bem-react-classname';
import { Type } from '../../constants/type';

const cn = createCn('icon');

export interface CardProps {
    type: Type;
}

const Icon: FC<CardProps> = ({ type }: CardProps) => {
    return (
        <div className={cn({type})} />
    );
};

export default Icon;
