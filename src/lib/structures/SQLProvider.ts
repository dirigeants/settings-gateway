import { objectToTuples } from '@klasa/utils';
import type { Provider } from './Provider';
import type { QueryBuilder } from '../QueryBuilder';
import type { SettingsUpdateResults } from '../settings/SettingsFolder';

export interface SQLProvider extends Provider {

	/**
	 * The QueryBuilder instance for this SQL provider
	 */
	qb: QueryBuilder;

}

export function parse(changes: object | SettingsUpdateResults): SqlProviderParsedTupleUpdateInput {
	const keys: string[] = [];
	const values: unknown[] = [];

	if (Array.isArray(changes)) {
		for (const change of changes as SettingsUpdateResults) {
			keys.push(change.entry.path);
			values.push(change.next);
		}
	} else {
		for (const [key, value] of objectToTuples(changes as Record<PropertyKey, unknown>)) {
			keys.push(key);
			values.push(value);
		}
	}

	return { keys, values };
}

export interface SqlProviderParsedTupleUpdateInput {
	keys: string[];
	values: unknown[];
}
