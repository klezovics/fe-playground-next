import { z } from 'zod';
import { info } from "console";

// Define the schema
const personSchema = z.object({
    name: z.string(),
    age: z.number().min(0).max(31),
});

describe('Zod schema validation', () => {
    it('should validate a valid person object', () => {
        const validPerson = {
            name: 'John',
            age: 30,
        };

        // Validate the valid person object against the schema
        const result = personSchema.safeParse(validPerson);

        // Assert that the validation succeeds
        info(result);
        expect(result.success).toBe(true);
    });

    it('should fail validation for an invalid person object', () => {
        const invalidPerson = {
            name: 'Alice',
            age: -5, // Age is negative, which is invalid
        };

        // Validate the invalid person object against the schema
        const result = personSchema.safeParse(invalidPerson);

        // Assert that the validation fails
        expect(result.success).toBe(false);
    });
});
