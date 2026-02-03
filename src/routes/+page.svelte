	<script lang="ts">
		import { Button } from '$lib/components/ui/button/index.js';
		import { Input } from '$lib/components/ui/input/index.js';
		import { Label } from '$lib/components/ui/label/index.js';
		import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
		import { Switch } from '$lib/components/ui/switch/index.js';

		// Ruta al logo e imagen de fondo
		const logoPath = '/logos/logo.svg';
		const backgroundImagePath = '/images/auth-background.png';

		let email = '';
		let password = '';
		let rememberMe = false;
		let isLoading = false;

		async function handleSubmit(event: Event) {
			event.preventDefault();
			isLoading = true;

			// Simula una llamada a API
			setTimeout(() => {
				console.log('Login attempt:', { email, password });
				alert(`Intentando login con: ${email}`);
				isLoading = false;
			}, 1500);
		}
	</script>

	<div class="min-h-screen flex flex-row-reverse">
		<!-- Sección de imagen (derecha) -->
		<div class="hidden lg:flex w-3/5 bg-gray-100 relative">
			<div 
				class="absolute inset-0 bg-cover bg-center" 
				style={`background-image: url('${backgroundImagePath}');`}
			></div>
		</div>

		<!-- Sección del formulario (izquierda) -->
		<div class="w-full lg:w-2/5 flex flex-col justify-center p-8 sm:p-8 lg:p-12 relative">
			<!-- Logo en esquina superior izquierda -->
			<div class="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8">
				<img 
					src={logoPath} 
					alt="Logo de la empresa" 
					class="h-12 w-auto sm:h-14 lg:h-16"
				/>
			</div>

			<div class="max-w-md w-full mx-auto">
				<Card class="border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl bg-white dark:bg-gray-800">
					<CardHeader class="space-y-1 p-6 pb-2">
						<CardTitle class="text-2xl font-bold text-gray-900 dark:text-white">Hola! Bienvenidos</CardTitle>
						<CardDescription class="text-gray-600 dark:text-gray-300">
							Bienvenidos a la plataforma. Todos empieza ahora.
						</CardDescription>
					</CardHeader>
					
					<form on:submit={handleSubmit}>
						<CardContent class="space-y-6 p-6 pt-0">
							<div class="space-y-2">
								<Label for="email" class="text-sm font-medium text-gray-700">Correo electrónico</Label>
								<Input 
									id="email" 
									type="email" 
									placeholder="tu@ejemplo.com"
									bind:value={email}
									required
									class="h-11 px-4 py-3 text-base"
								/>
							</div>
							
							<div class="space-y-2">
								<Label for="password" class="text-sm font-medium text-gray-700">Contraseña</Label>
								<Input 
									id="password" 
									type="password" 
									placeholder="••••••••"
									bind:value={password}
									required
									class="h-11 px-4 py-3 text-base"
								/>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-2">
									<Switch id="remember-me" bind:checked={rememberMe} />
									<Label for="remember-me" class="text-sm font-medium text-gray-700 dark:text-gray-300">
										Recordar mi cuenta
									</Label>
								</div>
								<a href="/forgot-password" class="text-sm font-medium text-primary hover:underline">
									¿Olvidaste tu contraseña?
								</a>
							</div>
						</CardContent>

						<CardFooter class="flex flex-col space-y-4 p-6 pt-0">
							<Button 
								type="submit" 
								class="w-full h-11 text-base font-medium"
								disabled={isLoading}
							>
								{#if isLoading}
									Iniciando sesión...
								{:else}
									Iniciar Sesión
								{/if}
							</Button>

							<p class="text-center text-sm text-gray-600">
								¿No puedes iniciar sesión?{' '}
								<a href="/contacto" class="font-semibold text-primary hover:underline">
									Contáctanos
								</a>
							</p>
						</CardFooter>
					</form>
				</Card>
			</div>
		</div>
	</div>

	<style>
		/* Asegurar que el contenedor ocupe al menos toda la altura de la pantalla */
		:global(html, body) {
			height: 100%;
		}
		
		:global(body) {
			margin: 0;
		}
	</style>