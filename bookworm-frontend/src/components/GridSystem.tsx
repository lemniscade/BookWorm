import React from "react";
import '../component_styles/GridSystem.scss';

type GridSystemProps = {
    children: React.ReactNode; // GridRow ve GridColumn componentlerini almak için
};

function GridSystem({ children }: GridSystemProps) {
    return (
        <div style={{ width: '100vw' }}>{children}</div>
    );
}

export default GridSystem;
