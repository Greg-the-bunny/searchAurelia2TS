let Missing = /** @class */ (() => {
    class Missing {
        enter(parameters) {
            this.missingComponent = parameters.id;
        }
    }
    Missing.parameters = ['id'];
    return Missing;
})();
export { Missing };
