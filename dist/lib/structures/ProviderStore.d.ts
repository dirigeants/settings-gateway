import { Store } from 'klasa';
import type { Client } from '../types';
import { Provider } from './Provider';
export declare class ProviderStore extends Store<string, Provider> {
    /**
     * Constructs our ProviderStore for use in Klasa.
     * @param client The client that instantiates this store
     */
    constructor(client: Client);
    /**
     * The default provider set in ClientOptions.providers
     */
    get default(): Provider | null;
    /**
     * Clears the providers from the store and waits for them to shutdown.
     */
    clear(): void;
    /**
     * Deletes a provider from the store.
     * @param name The Provider instance or its name
     */
    delete(name: string | Provider): boolean;
}
//# sourceMappingURL=ProviderStore.d.ts.map