const rectangular = state => {
    return {
        are: () => {
            return state.height * state.width;
        },
    };
};

const openable = state => {
    return {
        toggleOpen: () => {
            state.open = !state.open;
        },
    };
};

const buildRectangleWindow = state => {
    return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
    height: 20,
    width: 20,
    open: false,
});

console.log(rectangleWindow.open);
rectangleWindow.toggleOpen()
console.log(rectangleWindow.open);