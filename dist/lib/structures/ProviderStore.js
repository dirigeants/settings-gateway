"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderStore = void 0;
const klasa_1 = require("klasa");
const Provider_1 = require("./Provider");
class ProviderStore extends klasa_1.Store {
    /**
     * Constructs our ProviderStore for use in Klasa.
     * @param client The client that instantiates this store
     */
    constructor(client) {
        // @ts-ignore 2345
        super(client, 'providers', Provider_1.Provider);
    }
    /**
     * The default provider set in ClientOptions.providers
     */
    get default() {
        return this.get(this.client.options.providers.default) || null;
    }
    /**
     * Clears the providers from the store and waits for them to shutdown.
     */
    clear() {
        for (const provider of this.values())
            this.delete(provider);
    }
    /**
     * Deletes a provider from the store.
     * @param name The Provider instance or its name
     */
    delete(name) {
        const provider = this.resolve(name);
        if (!provider)
            return false;
        /* istanbul ignore next: Hard to coverage test the catch */
        Promise.resolve(provider.shutdown()).catch((error) => this.client.emit('wtf', error));
        return super.delete(provider);
    }
}
exports.ProviderStore = ProviderStore;
//# sourceMappingURL=ProviderStore.js.map