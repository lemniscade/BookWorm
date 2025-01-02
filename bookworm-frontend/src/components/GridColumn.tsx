import React, { ReactNode } from "react";
import '../component_styles/GridColumn.scss'
import CustomFragment from "./CustomFragment";

type GridColumnProps = {
    children?: ReactNode;
    style?: string;
};

function GridColumn({ children, style }: GridColumnProps) {
    const data = { children, style }
    return <CustomFragment data={data} className={
        React.isValidElement(data.children) && data.children.type == GridColumn
            ? ""
            : `${data.style}`
    }>
        {(data) => (
            React.isValidElement(data.children) && data.children.type == GridColumn ? (
                < >{data.children}</>
            ) : <div className={`${data.style}`}>{data.children}</div>
        )}
    </CustomFragment>;
}

export default GridColumn;
