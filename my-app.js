import { Button } from '@material/mwc-button';
export class MaterialUI {
    register(container, ...params) {
    }
    static config(config) {
        const instance = new MaterialUI();
        config && config(instance);
        return instance;
    }
}
export class MyApp {
    constructor() {
        this.message = 'Hello World!';
    }
}
export { Button };
