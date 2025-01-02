import React from "react";
import GridColumn from "./GridColumn";
import '../component_styles/GridRow.scss'
import CustomFragment from "./CustomFragment";

type GridRowProps = {
    columns: number;
    children: React.ReactNode;
    style?: string;
};

function GridRow({ columns, children, style }: GridRowProps) {
    const data = { columns, children }

    return (
        <CustomFragment data={data} >
            {(data) => (
                <div className={`grid-row cols-${data.columns} ${style}`}>

                    {React.Children.map(data.children, (child, index) => (
                        <GridColumn key={index}>{child}</GridColumn>
                    ))}
                </div>
            )
            }
        </CustomFragment >
    );
}

export default GridRow;
