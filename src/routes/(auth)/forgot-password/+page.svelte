<script lang="ts">
    import { Button } from '$lib/components/ui/button/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

    // Ruta al logo e imagen de fondo
    const logoPath = '/logos/logo.svg';
    const backgroundImagePath = '/images/auth-background.png';

    let email = '';
    let isLoading = false;
    let isSubmitted = false;

    async function handleSubmit(event: Event) {
        event.preventDefault();
        if (isSubmitted) return;
        
        isLoading = true;
        
        // Simula el envío del formulario
        setTimeout(() => {
            console.log('Password reset requested for:', email);
            isLoading = false;
            isSubmitted = true;
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
            <Card class="border border-gray-200 shadow-sm rounded-xl bg-white">
                <CardHeader class="space-y-1 p-6 pb-2">
                    <CardTitle class="text-2xl font-bold text-gray-900">Restablecer contraseña</CardTitle>
                    <CardDescription class="text-gray-600">
                        {#if isSubmitted}
                            Revisa tu correo electrónico para continuar con el restablecimiento.
                        {:else}
                            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                        {/if}
                    </CardDescription>
                </CardHeader>

                {#if !isSubmitted}
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
                        </CardContent>
                        <CardFooter class="flex flex-col space-y-4 p-6 pt-0">
                            <Button 
                                type="submit" 
                                class="w-full h-11 text-base font-medium"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar enlace'}
                            </Button>

                            <p class="text-center text-sm text-gray-600">
                                ¿Recordaste tu contraseña?{' '}
                                <a href="/login" class="font-semibold text-primary hover:underline">
                                    Iniciar sesión
                                </a>
                            </p>
                        </CardFooter>
                    </form>
                {:else}
                    <CardFooter class="p-6 pt-0">
                        <div class="w-full text-center space-y-4">
                            <div class="p-4 bg-green-50 text-green-700 rounded-lg">
                                <p>Hemos enviado un correo a <span class="font-semibold">{email}</span> con las instrucciones para restablecer tu contraseña.</p>
                            </div>
                            <p class="text-sm text-gray-600">
                                ¿No recibiste el correo?{' '}
                                <button 
                                    on:click={() => isSubmitted = false}
                                    class="font-semibold text-primary hover:underline cursor-pointer"
                                >
                                    Reenviar enlace
                                </button>
                            </p>
                        </div>
                    </CardFooter>
                {/if}
            </Card>
        </div>
    </div>
</div>

<style>
    :global(html, body) {
        height: 100%;
    }
    
    :global(body) {
        margin: 0;
    }
</style>
