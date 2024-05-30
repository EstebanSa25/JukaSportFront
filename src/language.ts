// Archivo de configuración de texto de la aplicación
export const esCompany = {
    name: 'Juka Sport',
};

export const ButtonDownload = {
    content: 'Descargar aplicación',
    children: 'Instalar',
};
export const ButtonThemeMode = {
    content: 'Cambiar tema a',
    dark: 'oscuro',
    light: 'claro',
};

export const esFormLogin = {
    form: {
        title: 'Ingresa a tu cuenta',
        email: {
            label: 'Correo electrónico',
            placeholder: 'Ingrese su correo electrónico',
        },
        password: {
            label: 'Contraseña',
            placeholder: 'Ingrese su contraseña',
        },
        button: {
            children: 'Iniciar sesión',
        },
        forgotButton: {
            children: '¿Olvidaste tu contraseña?',
        },
    },
};

export const esNotFoundPage = {
    title: '404',
    message: 'No se pudo encontrar esta página.',
    button: 'Regresar',
};

export const esModalForgot = {
    title: 'Restablecer contraseña',
    form: {
        email: {
            placeholder: 'Ingrese su correo electrónico',
        },
        label: 'Correo electrónico',
        button: 'Restablecer contraseña',
    },
};

export const esIconsMenu = {
    Users: {
        title: 'Usuarios',
        description: 'Administra los usuarios de la aplicación',
    },
    Inventory: {
        title: 'Inventario',
        description: 'Administra el inventario de la empresa',
    },
    Sales: {
        title: 'Ventas',
        description: 'Administra las ventas de la empresa',
    },
    Payroll: {
        title: 'Nómina',
        description: 'Administra la nómina de la empresa',
    },
    Bills: {
        title: 'Facturas',
        description: 'Administra las facturas de la empresa',
    },
    Configuration: {
        title: 'Configuración',
        description: 'Administra la configuración de la empresa',
    },
};
export const esUserButton = {
    children: 'Bienvenido',
    Settings: 'Configuración',
    Logout: 'Cerrar sesión',
};

export const esMenuTitlePage = 'Menú principal';

export const esModalTwoFactor = {
    tooltip:
        'El codigo de autenticación es un código de 6 dígitos que se genera en su aplicación de autenticación de dos factores',
    title: 'Código de autenticación',
    form: {
        input: {
            placeholder: 'XXXXXX',
        },
        button: 'Verificar',
    },
    description:
        'Abra su aplicación o extensión del navegador (TOTP) de autenticador de dos factores para ver su código de autenticación.',
};
