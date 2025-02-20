
const Line = ({ width, height, color, top, right, left }) => (
    <div
        style={{
            width: `${width}rem`,
            height: `${height}rem`,
            backgroundColor: color,
            position: 'absolute',
            top: `${top}rem`,
            right: `${right}rem`,
            left: `${left}rem`,
            zIndex: 1000
        }}
    />
);

export default Line;