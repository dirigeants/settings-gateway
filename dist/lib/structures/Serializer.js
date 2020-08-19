"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
const klasa_1 = require("klasa");
class Serializer extends klasa_1.AliasPiece {
    /**
     * Resolve a value given directly from the {@link Settings#update} call.
     * @param data The data to resolve
     * @param context The context in which this serializer is called
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(data, _context) {
        return data;
    }
    /**
     * Resolve a value given directly from the {@link Settings#resolve} call.
     * @param data The data to resolve
     * @param context The context in which this serializer is called
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve(data, _context) {
        return data;
    }
    /**
     * The deserialize method to be overwritten in actual Serializers.
     * @param data The data to deserialize
     * @param context The context in which this serializer is called
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deserialize(data, _context) {
        return data;
    }
    /**
     * The serialize method to be overwritten in actual Serializers.
     * @param data The data to serialize
     */
    serialize(data) {
        return data;
    }
    /**
     * The stringify method to be overwritten in actual Serializers
     * @param data The data to stringify
     * @param guild The guild given for context in this call
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    stringify(data, _guild) {
        return String(data);
    }
    /**
     * Check the boundaries of a key's minimum or maximum.
     * @param value The value to check
     * @param entry The schema entry that manages the key
     * @param language The language that is used for this context
     */
    static minOrMax(value, { minimum, maximum, inclusive, key }, language) {
        if (minimum && maximum) {
            if ((value >= minimum && value <= maximum && inclusive) || (value > minimum && value < maximum && !inclusive))
                return true;
            if (minimum === maximum)
                throw new RangeError(language.get('RESOLVER_MINMAX_EXACTLY', { key, min: minimum, inclusive }));
            throw new RangeError(language.get('RESOLVER_MINMAX_BOTH', { key, min: minimum, max: maximum, inclusive }));
        }
        else if (minimum) {
            if ((value >= minimum && inclusive) || (value > minimum && !inclusive))
                return true;
            throw new RangeError(language.get('RESOLVER_MINMAX_MIN', { key, min: minimum, inclusive }));
        }
        else if (maximum) {
            if ((value <= maximum && inclusive) || (value < maximum && !inclusive))
                return true;
            throw new RangeError(language.get('RESOLVER_MINMAX_MAX', { key, max: maximum, inclusive }));
        }
        return true;
    }
}
exports.Serializer = Serializer;
/**
 * Standard regular expressions for matching mentions and snowflake ids
 */
Serializer.regex = klasa_1.constants.MENTION_REGEX;
//# sourceMappingURL=Serializer.js.map