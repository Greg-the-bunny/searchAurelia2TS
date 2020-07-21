import { Button } from '@material/mwc-button';
import { IRegistry, IContainer, IResolver } from 'aurelia';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MaterialUIConfig {
}
export class MaterialUI implements IRegistry, MaterialUIConfig {
    register(container: IContainer, ...params: unknown[]): void | IContainer | IResolver<any> {
    }
    static config(config?: (config: MaterialUIConfig) => void): MaterialUI {
        const instance = new MaterialUI();
        config && config(instance);
        return instance;
    }

}

export class MyApp {
  public message = 'Hello World!';

}

export { Button };

