import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('Init: Debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos').and.callFake(() => {
            return Observable.from( [ medicos ] );
        });

    componente.ngOnInit();

    expect( componente.medicos.length).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un medico', () => {

        const espia = spyOn( servicio, 'agregarMedico').and.callFake( medico => {
            return Observable.empty();
        });
        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });
    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

        const medico = { id: 1, nombre: 'Juan'};

        spyOn(servicio, 'agregarMedico').and.returnValue( Observable.from ([medico]) );


        componente.agregarMedico();

        expect( componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });
    it('Si falla la adicion, la propiedad error debe ser igual al error del servicio', () => {

        const mi_error = 'No se pudo agregar el medico';

        spyOn( servicio, 'agregarMedico').and.returnValue( Observable.throw( mi_error) );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(mi_error);

    });
    it('Debe de llamar al servidor para borrar al medico', () => {

        spyOn( window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( null );


        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });
    it('No debe de llamar al servidor para borrar al medico', () => {

        spyOn( window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( null );


        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });

});
