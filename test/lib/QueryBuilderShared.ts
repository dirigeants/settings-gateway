import { Schema, constants } from '../../src';

export const sharedSchema = new Schema()
	.add('string19', 'string', { maximum: 19 })
	.add('integerLarge', 'integer', { maximum: 2 ** 40 });

for (const [key] of constants.DATATYPES) {
	sharedSchema.add(key, key);
}
