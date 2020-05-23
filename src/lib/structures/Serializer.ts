import type { SchemaEntry } from '../schema/SchemaEntry';
import { BaseLanguage, BaseGuild } from '../types';

export interface Serializer {

	/**
	 * Resolve a value given directly from the {@link Settings#update} call.
	 * @param data The data to resolve
	 * @param context The context in which this serializer is called
	 */
	validate(data: unknown, context: SerializerUpdateContext): unknown;

	/**
	 * Resolve a value given directly from the {@link Settings#resolve} call.
	 * @param data The data to resolve
	 * @param context The context in which this serializer is called
	 */
	resolve(data: unknown, context: SerializerUpdateContext): unknown;

	/**
	 * The deserialize method to be overwritten in actual Serializers.
	 * @param data The data to deserialize
	 * @param context The context in which this serializer is called
	 */
	deserialize(data: unknown, context: SerializerUpdateContext): unknown;

	/**
	 * The serialize method to be overwritten in actual Serializers.
	 * @param data The data to serialize
	 */
	serialize(data: unknown): unknown;

	/**
	 * The stringify method to be overwritten in actual Serializers.
	 * @param data The data to stringify
	 * @param guild The guild given for context in this call
	 */
	stringify(data: unknown, guild?: BaseGuild | null): string;

}

export interface SerializerUpdateContext {
	entry: SchemaEntry;
	language: BaseLanguage;
	guild: BaseGuild | null;
	extra: unknown;
}
