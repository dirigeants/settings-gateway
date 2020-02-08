import { Provider } from './Provider';
import { SchemaFolder } from '../schema/SchemaFolder';
import { SchemaEntry } from '../schema/SchemaEntry';
import { QueryBuilder } from '@klasa/querybuilder';
import { objectToTuples } from '@klasa/utils';

export abstract class SQLProvider extends Provider {

	/**
	 * The QueryBuilder instance for this SQL provider
	 */
	public abstract qb: QueryBuilder;

	/**
	 * Inserts or creates a table in the database.
	 * @param table The table to check against
	 * @param rows The rows to insert
	 */
	public abstract createTable(table: string, rows?: readonly [string, string][]): Promise<unknown>;

	/**
	 * Deletes or drops a table from the database.
	 * @param table The table to check against
	 */
	public abstract deleteTable(table: string): Promise<unknown>;

	/**
	 * Checks if a table exists in the database.
	 * @param table The table to check against
	 */
	public abstract hasTable(table: string): Promise<boolean>;

	/**
	 * Inserts new entry into a table.
	 * @param table The table to update
	 * @param entry The entry's ID to create
	 * @param data The data to insert
	 */
	public abstract create(table: string, entry: string, data: object): Promise<unknown>;

	/**
	 * Removes entries from a table.
	 * @param table The table to update
	 * @param entry The ID of the entry to delete
	 */
	public abstract delete(table: string, entry: string): Promise<unknown>;

	/**
	 * Retrieve a single entry from a table.
	 * @param table The table to query
	 * @param entry The ID of the entry to retrieve
	 */
	public abstract get(table: string, entry: string): Promise<object | null>;

	/**
	 * Retrieve all entries from a table.
	 * @param table The table to query
	 * @param entries The ids to retrieve from the table
	 */
	public abstract getAll(table: string, entries?: readonly string[]): Promise<object[]>;

	/**
	 * Retrieves all entries' keys from a table.
	 * @param table The table to query
	 */
	public abstract getKeys(table: string): Promise<string[]>;

	/**
	 * Check if an entry exists in a table.
	 * @param table The table to update
	 * @param entry The entry's ID to check against
	 */
	public abstract has(table: string, entry: string): Promise<boolean>;

	/**
	 * Updates an entry from a table.
	 * @param table The table to update
	 * @param entry The entry's ID to update
	 * @param data The data to update
	 */
	public abstract update(table: string, entry: string, data: object): Promise<unknown>;

	/**
	 * Overwrites the data from an entry in a table.
	 * @param table The table to update
	 * @param entry The entry's ID to update
	 * @param data The new data for the entry
	 */
	public abstract replace(table: string, entry: string, data: object): Promise<unknown>;

	/**
	 * The addColumn method which inserts/creates a new table to the database.
	 * @param table The table to check against
	 * @param entry The SchemaFolder or SchemaEntry added to the schema
	 */
	public abstract addColumn(table: string, entry: SchemaFolder | SchemaEntry): Promise<unknown>;

	/**
	 * The removeColumn method which inserts/creates a new table to the database.
	 * @since 0.5.0
	 * @param table The table to check against
	 * @param columns The column names to remove
	 */
	public abstract removeColumn(table: string, columns: readonly string[]): Promise<unknown>;

	/**
	 * The updateColumn method which alters the datatype from a column.
	 * @param table The table to check against
	 * @param entry The modified SchemaEntry
	 */
	public abstract updateColumn(table: string, entry: SchemaEntry): Promise<unknown>;

	/**
	 * The getColumns method which gets the name of all columns.
	 * @param table The table to check against
	 */
	public abstract getColumns(table: string): Promise<string[]>;

	/**
	 * The query builder debug check for errors in the QueryBuilder, if one exists in the extended SQLProvider instance
	 */
	public async init(): Promise<void> {
		if (!this.qb) return;
		const errors = this.qb.debug();
		if (errors) throw new Error(errors);
	}

	/**
	 * Parse the input from SettingsGateway for this
	 * @param changes The data that has been updated
	 */
	protected parseTupleUpdateInput(changes: object): SqlProviderParsedTupleUpdateInput {
		const keys: string[] = [];
		const values: unknown[] = [];

		for (const [key, value] of objectToTuples(changes as Record<PropertyKey, unknown>)) {
			keys.push(key);
			values.push(value);
		}

		return { keys, values };
	}

}

export interface SqlProviderParsedTupleUpdateInput {
	keys: string[];
	values: unknown[];
}
