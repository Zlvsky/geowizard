import React from 'react';

interface IProps {
    title: string;
    description: string;
}

function StepDescription({ title, description }: IProps) {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-black dark:text-white text-3xl'>{title}</h1>
            <p className='text-xl text-slate-text'>{description}</p>
        </div>
    );
}

export default StepDescription;