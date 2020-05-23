export type DeepReadonly<T extends object> = {
	readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
}

export type KeyedObject = Record<PropertyKey, unknown>;
export type ReadonlyKeyedObject = DeepReadonly<KeyedObject>;

export interface BaseLanguage {
	get(term: string, ...args: readonly unknown[]): unknown;
}

export interface BaseGuild {
	language: BaseLanguage;
}
