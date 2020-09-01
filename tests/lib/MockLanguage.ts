import { Language, LanguageStore } from 'klasa';

export class MockLanguage extends Language {
	public constructor(store: LanguageStore, file: string[], directory: string) {
		super(store, file, directory, { name: 'en-US' });
		this.language = {
			default: (key: string, ...args: unknown[]): string => `[DEFAULT]: ${key} ${args.join(' ')}`,
			settingGatewayKeyNoext: ({ key: path }: { key: string }): string => `[settingGatewayKeyNoext]: ${path}`,
			settingGatewayChooseKey: ({ keys }: { keys: string }): string => `[settingGatewayChooseKey]: ${keys}`,
			settingGatewayUnconfigurableFolder: '[settingGatewayUnconfigurableFolder]',
			settingGatewayUnconfigurableKey: ({ key: path }: { key: string }): string => `[settingGatewayUnconfigurableKey]: ${path}`,
			settingGatewayMissingValue: ({ path, value }: { path: string; value: string }): string =>
				`[settingGatewayMissingValue]: ${path} ${value}`,
			settingGatewayDuplicateValue: ({ path, value }: { path: string; value: string }): string =>
				`[settingGatewayDuplicateValue]: ${path} ${value}`,
			settingGatewayInvalidFilteredValue: ({ path, value }: { path: string; value: string }): string =>
				`[settingGatewayInvalidFilteredValue]: ${path} ${value}`,
			resolverMinmaxExactly: ({ key, min, inclusive }: { key: string; min: number; inclusive: boolean }): string =>
				`[resolverMinmaxExactly]: ${key} ${min} ${inclusive}`,
			resolverMinmaxBoth: ({ key, min, max, inclusive }: { key: string; min: number; max: number; inclusive: boolean }): string =>
				`[resolverMinmaxBoth]: ${key} ${min} ${max} ${inclusive}`,
			resolverMinmaxMin: ({ key, min, inclusive }: { key: string; min: number; inclusive: number }): string =>
				`[resolverMinmaxMin]: ${key} ${min} ${inclusive}`,
			resolverMinmaxMax: ({ key, max, inclusive }: { key: string; max: number; inclusive: number }): string =>
				`[resolverMinmaxMax]: ${key} ${max} ${inclusive}`
		};
	}
}
