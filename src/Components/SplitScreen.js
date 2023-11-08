export const SplitScreen = ({
    left: Left,
    right: Right,
}) => {
    return (
        <div className="flex border-2 border-cyan bg-hero-bubbles">
            <div className="flex-1">
                <Left />
            </div>
            <div className="flex-1">
                <Right />
            </div>
        </div>
    )
}