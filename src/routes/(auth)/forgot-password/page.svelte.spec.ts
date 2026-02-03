import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ForgotPasswordPage from './+page.svelte';

describe('Auth /forgot-password page', () => {
	it('renders reset password title', async () => {
		render(ForgotPasswordPage);

		const heading = page.getByText('Restablecer contraseña');
		await expect.element(heading).toBeInTheDocument();
	});
});
