import { obtenerRobots } from './arreglos';



describe('Pruebas de arreglos', () => {
    it('Debe de retornar al menos 3 Robots', () => {

        const res = obtenerRobots();
        expect( res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de estar MegaMan y PortMan', () => {

        const res = obtenerRobots();
        expect( res ).toContain('MegaMan' && 'PortMan');
    });
});
