import {test, expect} from '@playwright/test';
import * as fs from 'fs';

//Crear carpeta para evidencias si no existe
test.beforeAll(() => {
    if (!fs.existsSync('./evidencias')) {
        fs.mkdirSync('./evidencias');
    }
});

test.describe('Clase 03 - Locator en demoblaze', () => {
     test('Locator por texto: verificar elementos del menú', async ({page}) => {
        await page.goto('/');

        const nav = page.locator ('#navbarExample');
        await expect (nav.getByText('Home')).toBeVisible();
        await expect(nav.getByText('Contact')).toBeVisible();
        await expect(nav.getByText('About us')).toBeVisible();

        await expect(nav.getByText('Cart', {exact: true })).toBeVisible();
    });



test('Locatorpor CSS: Productos en la pagina principal', async ({page}) => {
    await page.goto('/');
    await page.waitForSelector('.card-title');

    const tarjetas = page.locator('.card');
    const cantidad = await tarjetas.count (); 
    expect (cantidad).toBeGreaterThan(0);
    
    const primerProducto = page.locator('.card-title a').first (); 
    const nombreProducto = await primerProducto.textContent (); 
    expect (nombreProducto).not.toBeNull();
});

test ('Locator por ID: campos del modal de login', async ({page}) => { 
    await page.goto('/');

    await page.locator ('#navbarExample')
    .getByRole('link', { name: 'Log in', exact: true }).click(); 
    await page.waitForSelector('#logInModal', { state: 'visible' });

    await expect (page.locator ('#loginusername')).toBeVisible (); 
    await expect (page.locator('#loginpassword')).toBeVisible();

    });


    test ('Locator por atributo: imagen del primer producto', async ({ page }) => {
    await page.goto('/');
    await page. waitForSelector('.card-title');

    await page.locator('.card-title a').first().click(); 
    await page.waitForLoadState('domcontentloaded');

    const imagenProducto = page.locator('.product-image img'); 
    await expect (imagenProducto).toBeVisible();

    const srcImagen = await imagenProducto.getAttribute('src'); 
    expect (srcImagen).not.toBeNull(); 

    });

    test('Locators encadenados: precio dentro de una tarjeta', async ({ page }) => { 
    await page.goto('/');
    await page.waitForSelector('.card-title');

    const primeraTarjeta = page.locator('.card').first();
    const precio = primeraTarjeta.locator('h5'); 
    await expect (precio).toBeVisible();

    });
    
    test('Verificar que NO existe unelemento (negación)', async ({page }) => {
         await page.goto('/');
    const mensajevacio = page.getByText ('No products found'); 
    await expect (mensajevacio).not.toBeVisible(); 

  
    }
);
});