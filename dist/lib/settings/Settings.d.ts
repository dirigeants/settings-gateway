import type { Gateway } from '../gateway/Gateway';
import { SettingsExistenceStatus, SettingsFolder } from './SettingsFolder';
export declare class Settings extends SettingsFolder {
    /**
     * The ID of the database entry this instance manages.
     */
    readonly id: string;
    /**
     * The gateway that manages this instance.
     */
    readonly gateway: Gateway;
    /**
     * The holder of this instance.
     */
    readonly target: unknown;
    /**
     * The existence status of this entry.
     * @internal
     */
    existenceStatus: SettingsExistenceStatus;
    constructor(gateway: Gateway, target: unknown, id: string);
    /**
     * Creates a clone of this instance.
     */
    clone(): Settings;
    /**
     * Sync the data from the database with the cache.
     * @param force Whether or not this should force a database synchronization
     */
    sync(force?: boolean): Promise<this>;
    /**
     * Delete this entry from the database and clean all the values to their defaults.
     */
    destroy(): Promise<this>;
}
//# sourceMappingURL=Settings.d.ts.map