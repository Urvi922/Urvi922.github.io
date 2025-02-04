const Arrow = ({ direction, size }) => {
    const isUp = direction === 'up';

    
    return (
    <div
        style={{
            display: 'inline-block',
            width: 0,
            height: 0,
            borderLeft: '${size}em solid transparent',
            borderRight: '${size}em solid transparent',
            borderTop: isUp ? `${size}em solid black` : 'none',
            borderBottom: !isUp ? `${size}em solid black` : 'none',
        }}
    />
)
};

export default Arrow;

