export const RoutesApplication = {
    UrlNotFound: '/*',
    BaseUrl: '/',
    Login: '/inicio-sesion',
    Menu: '/menu',
    MenuIcons: {
        Users: '/menu/usuarios',
        Inventory: '/menu/inventario',
        Sales: '/menu/ventas',
        Payroll: '/menu/nomina',
        Bills: '/menu/facturacion',
        Configuration: '/menu/configuracion',
    },
    Inventory: '/menu/inventario/*',
    MenuInventory: {
        Entrance: '/menu/inventario/entrada',
        Exit: '/menu/inventario/salida',
        Products: '/menu/inventario/productos',
        Categories: '/menu/inventario/categorias',
        Providers: '/menu/inventario/proveedores',
        Inventory: '/menu/inventario/inventario',
    },
    InventoryEntrance: {
        Register: '/menu/inventario/entrada/registrar',
        List: '/menu/inventario/entrada/listar',
    },
};
