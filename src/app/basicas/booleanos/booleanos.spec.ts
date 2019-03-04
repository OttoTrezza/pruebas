import { usuarioIngresado } from './booleanos';


describe('Pruebas de Booleanos', () => {

    it('Debe retornar true', () => {

        const res = usuarioIngresado();

        expect( res) .toBeTruthy();
    });
});
