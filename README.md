<a name="readme-top"></a>

<div align="center">

<a href="https://github.com/EstebanSa25/JukaSportFront.git">
  <img width="100px" src="https://imgur.com/vtrXGWQ.png" alt="Logo" width="800" />
</a>

## Sistema **ERP** para Juka Sport

El proyecto ERP de Juka Sport transformará la gestión empresarial al integrar tareas operativas de distintos departamentos en una sola plataforma segura y eficiente.\
[Diseño de Figma](https://www.figma.com/design/q2Wmi4Ymiswz6XTd1mN9vu/Juka-Sport?node-id=17%3A180&t=EJ1MfL6nnu7JuYKz-1)

</div>

<details>
<summary>Tabla de contenidos</summary>

-   [Sistema **ERP** para Juka Sport](#sistema-erp-para-juka-sport)
-   [Para empezar](#para-empezar)
    -   [Prerequisitos](#prerequisitos)
    -   [Instalación](#instalación)
-   [🛠️ Stack](#️-stack)
</details>

## Para empezar

### Prerequisitos

-   NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

    ```sh
    nvm use
    # o
    nvm use <version>
    ```

    > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- En Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

-   En Windows:

    ```powershell
    # $PROFILE
    function Change-Node-Version {
    	param($path)
    	& Set-Location $path
    	$pwd = pwd
    	if ( Test-Path "$pwd\\.nvmrc" ) {
    		$version = Get-Content .nvmrc
    		nvm use $version
    	}
    }
    New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
    ```

    </details>

-   yarn (recomendación por su eficiencia y rapidez)

    ```sh
    npm install --global yarn

    ```

-   o NPM

    ```sh
    npm install npm@latest -g
    ```

### Instalación

1.  Clona el repositorio

    ```sh
    git clone https://github.com/EstebanSa25/JukaSportFront.git
    ```

2.  Instala los paquetes de NPM

        ```sh
        yarn install
        ```

    > [!WARNING]
    > Tener ejecutando el proyecto WebApi antes

3.  Ejecuta el proyecto

    ```sh
    yarn dev
    ```

> [!NOTE] Generar archivos de producción
> `yarn build`

 <p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

-   [![Vite][vite-badge]][vite-url] - Es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.
-   [![React][react-badge]][react-url] - La biblioteca para interfaces de usuario web y nativas.
-   [![Typescript][typescript-badge]][typescript-url] - JavaScript con sintaxis para Tipado.
-   [![Tailwind CSS][tailwind-badge]][tailwind-url] - Un marco CSS de utilidad para crear rápidamente diseños personalizados..

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[vite-url]: https://vitejs.dev/
[react-url]: https://es.react.dev/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=for-the-badge
[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
