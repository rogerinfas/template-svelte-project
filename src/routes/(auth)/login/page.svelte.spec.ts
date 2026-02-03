import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LoginPage from './+page.svelte';

describe('Auth /login page', () => {
	it('renders login title', async () => {
		render(LoginPage);

		const heading = page.getByText('Hola! Bienvenidos');
		await expect.element(heading).toBeInTheDocument();
	});

	it('has email and password inputs', async () => {
		render(LoginPage);

		const emailInput = page.getByLabelText('Correo electrónico');
		const passwordInput = page.getByLabelText('Contraseña');
		await expect.element(emailInput).toBeInTheDocument();
		await expect.element(passwordInput).toBeInTheDocument();
	});
});
