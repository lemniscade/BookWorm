import React, { ReactNode } from "react";

type Data = {
    className?: string;
    columns?: number;
    children?: React.ReactNode;
    style?: string;
};

type CustomFragmentProps = {
    children: (data: Data) => ReactNode;
    data: Data;
    className?: string;
};

export default function CustomFragment({ children, data, className }: CustomFragmentProps) {
    const dataWithClassName = { ...data, className };
    return (
        <>
            {children(dataWithClassName)}
        </>
    );
}
