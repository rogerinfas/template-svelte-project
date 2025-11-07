<script lang="ts">
	import { Camera, BarChart, LayoutDashboard, Database, Bot, FileText, Folder, HelpCircle, Sun, List, AlertTriangle, Search, Settings, Users as UsersIcon, FileSpreadsheet, ClipboardList, Factory, Shirt, Package, Building2, Wallet, Landmark, Receipt, FileSignature, User, Users2, Key, Shield, Hammer } from "@lucide/svelte";
	
	// Alias para mantener compatibilidad con el código existente
	const CameraIcon = Camera;
	const ChartBarIcon = BarChart;
	const DashboardIcon = LayoutDashboard;
	const DatabaseIcon = Database;
	const FileAiIcon = Bot;
	const FileDescriptionIcon = FileText;
	const FileWordIcon = FileText;
	const FolderIcon = Folder;
	const HelpIcon = HelpCircle;
	const InnerShadowTopIcon = Sun;
	const ListDetailsIcon = List;
	const ReportIcon = AlertTriangle;
	const SearchIcon = Search;
	const SettingsIcon = Settings;
	// Íconos para la sección de Producción
	const OrdersIcon = FileSpreadsheet;
	const ProductionIcon = ClipboardList;
	const ManagementIcon = Factory;
	import NavDocuments from "./nav-documents.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/src/lib/assets/images/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Dashboard",
				url: "#",
				icon: DashboardIcon,
			}
		],
		navClouds: [
			{
				title: "Capture",
				icon: CameraIcon,
				isActive: true,
				url: "#",
				items: [
					{
						title: "Active Proposals",
						url: "#",
					},
					{
						title: "Archived",
						url: "#",
					},
				],
			},
			{
				title: "Proposal",
				icon: FileDescriptionIcon,
				url: "#",
				items: [
					{
						title: "Active Proposals",
						url: "#",
					},
					{
						title: "Archived",
						url: "#",
					},
				],
			},
			{
				title: "Prompts",
				icon: FileAiIcon,
				url: "#",
				items: [
					{
						title: "Active Proposals",
						url: "#",
					},
					{
						title: "Archived",
						url: "#",
					},
				],
			},
		],
		navSecondary: [],
		documents: [
			{
				name: "Data Library",
				url: "#",
				icon: DatabaseIcon,
			},
			{
				name: "Reports",
				url: "#",
				icon: ReportIcon,
			},
			{
				name: "Word Assistant",
				url: "#",
				icon: FileWordIcon,
			},
		],
	};

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
					{#snippet child({ props })}
						<a href="##" {...props} class="flex items-center justify-center w-full">
							<img src="/logos/logo.svg" alt="Logo" class="h-8 w-auto" />
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		
		<!-- Sección de Producción y pedidos -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>PRODUCCIÓN Y PEDIDOS</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Órdenes y cotizaciones">
							<OrdersIcon class="w-4 h-4" />
							<span>Órdenes y cotizaciones</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Gestión de producción">
							<ManagementIcon class="w-4 h-4" />
							<span>Gestión de producción</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<!-- Sección de Preparación de prenda -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>PREPARACIÓN DE PRENDA</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Plantillas por prenda">
							<Shirt class="w-4 h-4" />
							<span>Plantillas por prenda</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Insumos">
							<Package class="w-4 h-4" />
							<span>Insumos</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Mano de obra">
							<Hammer class="w-4 h-4" />
							<span>Mano de obra</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<!-- Sección de Gestión de talleres y pagos -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>GESTIÓN DE TALLERES Y PAGOS</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Talleres">
							<Building2 class="w-4 h-4" />
							<span>Talleres</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Pagos a trabajadores">
							<Wallet class="w-4 h-4" />
							<span>Pagos a trabajadores</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<!-- Sección de Caja -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>CAJA</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Cuentas por cobrar">
							<Landmark class="w-4 h-4" />
							<span>Cuentas por cobrar</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Cuentas por pagar">
							<Receipt class="w-4 h-4" />
							<span>Cuentas por pagar</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Letras">
							<FileSignature class="w-4 h-4" />
							<span>Letras</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<!-- Sección de Clientes y Proveedores -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>CLIENTES Y PROVEEDORES</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Clientes">
							<User class="w-4 h-4" />
							<span>Clientes</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Proveedores">
							<Users2 class="w-4 h-4" />
							<span>Proveedores</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<!-- Sección de Configuración General -->
		<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
			<Sidebar.GroupLabel>CONFIGURACIÓN GENERAL</Sidebar.GroupLabel>
			<Sidebar.GroupContent class="flex flex-col gap-2">
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Usuarios">
							<Users2 class="w-4 h-4" />
							<span>Usuarios</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton tooltipContent="Roles y permisos">
							<Shield class="w-4 h-4" />
							<span>Roles y permisos</span>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
