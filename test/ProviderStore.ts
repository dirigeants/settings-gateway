import unknownTest, { TestInterface } from 'ava';
import { createClient } from './lib/MockClient';
import { Client, ProviderStore, Provider } from '../dist';

const ava = unknownTest as TestInterface<{
	client: Client
}>;

ava.beforeEach(async (test): Promise<void> => {
	test.context = {
		client: createClient()
	};
});

ava('providerstore-properties', (test): void => {
	test.plan(6);

	const { providers } = test.context.client;

	// Test the store's properties
	test.true(providers instanceof ProviderStore);
	test.is(providers.client as unknown as Client, test.context.client);
	test.is(providers.holds, Provider);
	test.is(providers.name, 'providers');

	// Mock provider from tests
	test.is(providers.size, 1);
	test.true(providers.has('Mock'));
});

ava('providerstore-default', (test): void => {
	test.plan(2);

	const { providers } = test.context.client;

	test.context.client.options.providers.default = 'Mock';
	test.is(providers.default, providers.get('Mock'));
	providers.clear();
	test.is(providers.default, null);
});

ava('providerstore-clear', (test): void => {
	test.plan(2);

	const { providers } = test.context.client;

	test.is(providers.size, 1);
	providers.clear();
	test.is(providers.size, 0);
});

ava('providerstore-delete-from-name', (test): void => {
	test.plan(2);

	const { providers } = test.context.client;

	test.true(providers.delete('Mock'));
	test.is(providers.size, 0);
});

ava('providerstore-delete-from-instance', (test): void => {
	test.plan(2);

	const { providers } = test.context.client;

	test.true(providers.delete(providers.get('Mock') as Provider));
	test.is(providers.size, 0);
});

ava('providerstore-delete-invalid', (test): void => {
	test.plan(2);

	const { providers } = test.context.client;

	test.false(providers.delete('DoesNotExist'));
	test.is(providers.size, 1);
});
