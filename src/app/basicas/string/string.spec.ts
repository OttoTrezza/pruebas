import { mensaje } from './string';

// it('Debe de regresar un string');

// it('Debe de contener un nombre');

describe( 'Pruebas de Strings', () => {
    it( 'Debe de regresar un Stirng', () => {

        const resp = mensaje('Fernando');

        expect( typeof resp ).toBe('string');

    });

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Juan';
        const resp = mensaje( nombre );

        expect( resp ).toContain( nombre );

    });
});
