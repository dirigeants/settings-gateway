import { Language, LanguageStore } from 'klasa';
import type { SchemaEntry } from '../../src';

export class MockLanguage extends Language {
	public constructor(store: LanguageStore, file: string[], directory: string) {
		super(store, file, directory, { name: 'en-US' });
		this.language = {
			DEFAULT: (key: string, ...args: unknown[]): string => `[DEFAULT]: ${key} ${args.join(' ')}`,
			SETTING_GATEWAY_KEY_NOEXT: ({ key: path }: { key: string }): string => `[SETTING_GATEWAY_KEY_NOEXT]: ${path}`,
			SETTING_GATEWAY_CHOOSE_KEY: ({ keys }: { keys: string[] }): string => `[SETTING_GATEWAY_CHOOSE_KEY]: ${keys.join(' ')}`,
			SETTING_GATEWAY_UNCONFIGURABLE_FOLDER: '[SETTING_GATEWAY_UNCONFIGURABLE_FOLDER]',
			SETTING_GATEWAY_UNCONFIGURABLE_KEY: ({ key: path }: { key: string }): string => `[SETTING_GATEWAY_UNCONFIGURABLE_KEY]: ${path}`,
			SETTING_GATEWAY_MISSING_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_MISSING_VALUE]: ${entry.path} ${value}`,
			SETTING_GATEWAY_DUPLICATE_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_DUPLICATE_VALUE]: ${entry.path} ${value}`,
			SETTING_GATEWAY_INVALID_FILTERED_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_INVALID_FILTERED_VALUE]: ${entry.path} ${value}`,
			RESOLVER_MINMAX_EXACTLY: ({ key, min, inclusive }: { key: string; min: number; inclusive: boolean }): string =>
				`[RESOLVER_MINMAX_EXACTLY]: ${key} ${min} ${inclusive}`,
			RESOLVER_MINMAX_BOTH: ({ key, min, max, inclusive }: { key: string; min: number; max: number; inclusive: boolean }): string =>
				`[RESOLVER_MINMAX_BOTH]: ${key} ${min} ${max} ${inclusive}`,
			RESOLVER_MINMAX_MIN: ({ key, min, inclusive }: { key: string; min: number; inclusive: number }): string =>
				`[RESOLVER_MINMAX_MIN]: ${key} ${min} ${inclusive}`,
			RESOLVER_MINMAX_MAX: ({ key, max, inclusive }: { key: string; max: number; inclusive: number }): string =>
				`[RESOLVER_MINMAX_MAX]: ${key} ${max} ${inclusive}`
		};
	}
}
