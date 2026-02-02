import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('Home +page.svelte', () => {
	it('renders main heading', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
	});

	it('renders submit button', async () => {
		render(Page);

		const submit = page.getByRole('button', { name: /Iniciar Sesión/i });
		await expect.element(submit).toBeInTheDocument();
	});
});
