import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {


        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); // disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

        expect( elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el iunput el valor del porogreso', () => {

        component.cambiarValor(5);

        fixture.detectChanges();

        fixture.whenStable().then( () => {

        const input = fixture.debugElement.query( By.css('input') );
        const elem = input.nativeElement;
        console.log(elem);
        expect( elem.value ).toBe('55');
        } );

    });
    it('Debe de decrementar en 5 con un click el boton', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

       botones[0].triggerEventHandler('click', null);
       expect( component.progreso ).toBe(45);
    });
    it('Debe de incrementar en 5 con un click el boton', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

       botones[1].triggerEventHandler('click', null);
       expect( component.progreso ).toBe(55);
    });
    it('Debe de cambiar el progreso al hacer click en decrementar valor', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        component.progreso = 50;
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

       expect( elem.innerHTML).not.toBe('50');

    });
    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect( elem.innerHTML).toContain('45');
    });
});
