import React from 'react';

import './Grid.css';

interface GridItemProps {
    content: string
}

interface GridProps {
    items: GridItemProps[]
}

const GridItem: React.FC<GridItemProps> = ({content}) => {
    return <div className="grid-item">{content}</div>;
}

const Grid: React.FC<GridProps> = ({items}) => {
    const gridItems = items.map(item => <GridItem content={item.content} />)
    return (<div className="grid-container">
        {gridItems}
    </div>);
}

export default Grid;
