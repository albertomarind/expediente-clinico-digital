import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-episodio-actual',
  templateUrl: './episodio-actual.component.html',
  styleUrls: ['./episodio-actual.component.scss']
})
export class EpisodioActualComponent implements OnInit {

  display: boolean = false;
  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Historia Clínica',
        items: [
          {
            label: 'Historia Clínica Pediátrica',
            routerLink: ["historia-clinica-pediatrica"],
            command: () => {
              this.display = false;
            }
          },
          {
            label: 'Historia Clínica General Adultos'
          },
          {
            label: 'Historia Clínica del Recién Nacido'
          }
        ]
      },
      {
        label: 'Evolutivo',
        routerLink: ["evolutivo"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Informes',
        items: [
          {
            label: 'Curso clínico'
          },
          {
            label: 'Crear receta'
          }
        ]
      },
      {
        label: 'Cuestionarios',
        items: [
          {
            label: 'Hoja de Traslado'
          },
          {
            label: 'Egreso del Recién Nacido'
          },
          {
            label: 'Registro Médico de Labor'
          },
          {
            label: 'Historia Clínica Pediátrica'
          },
          {
            label: 'Hoja de Egreso Hospitalario'
          },
          {
            label: 'Plan de Alta de Internamiento'
          },
          {
            label: 'Nota de Ingreso a Obstetricia'
          },
          {
            label: 'Registro Sesión de Hemodiálisis'
          },
          {
            label: 'Formato Código Ictus - Urgencias'
          },
          {
            label: 'Historia Clínica General Adultos'
          },
          {
            label: 'Nota de Ingreso / Egreso UTI- UCC'
          },
          {
            label: 'Solicitud de Productos Sanguíneos'
          },
          {
            label: 'Historia Clínica del Recién Nacido'
          },
          {
            label: 'Informe de Estudio Transoperatorio'
          },
          {
            label: 'Idoneidad y Conciliación de Medicamentos'
          },
          {
            label: 'Registro Médico de Procedimientos en Endoscopia'
          },
          {
            label: 'Registro de Crecimiento Ponderal en el Prematuro'
          },
          {
            label: 'THERAPY - Historia Clínica'
          },
          {
            label: 'THERAPY - Reporte de Evolución Inicial'
          },
          {
            label: 'THERAPY - Reporte de Evolución Final'
          },
          {
            label: 'THERAPY - Valoración Inicial de Pacientes UTI'
          },
          {
            label: 'THERAPY - Valoración Final de Pacientes UTI'
          },
          {
            label: 'THERAPY - Valoración Inicial de Pacientes Internos'
          },
          {
            label: 'THERAPY - Valoración Final de Pacientes Internos'
          },
          {
            label: 'Informe de estudio (1) Hemodinamia'
          },
          {
            label: 'Informe del estudio (2)'
          },
          {
            label: 'Informe del Estudio (3)'
          },
          {
            label: 'Informe del estudio (4)'
          },
        ],
      },
      {
        label: 'Juicio diagnóstico',
      },
      {
        label: 'Interrogatorio',
        routerLink: ["interrogatorio"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Notas',
        items: [
          {
            label: 'Oncología'
          },
          {
            label: 'Hemodiálisis'
          },
          {
            label: 'Nota de Interconsulta'
          },
          {
            label: 'Nota de Evolución de UTI-UCC'
          },
          {
            label: 'Historia Clínica - Torre (TC)'
          },
          {
            label: 'Nota de Evolución - Torre (TC)'
          },
          {
            label: 'Nota de Ingreso a Hospitalización'
          },
          {
            label: 'THERAPY- Notas de Evolución'
          },
          {
            label: 'THERAPY - Notas de Evolución UTI'
          },
        ]
      },
      {
        label: 'Interconsulta',
        items: [
          {
            label: 'Añadir petición interconsulta'
          },
          {
            label: 'Añadir petición de consulta'
          }
        ]
      },
      {
        label: 'Plan TTO',
        items: [
          {
            label: 'Añadir Plan Tto. y Obs.'
          }
        ]
      },
      {
        label: 'Exploración Física',
        routerLink: ["exploracion-fisica"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Caso Médico Legal',
        routerLink: ["caso-medico-legal"],
        command: () => {
          this.display = false;
        }
      },
      {
        label: 'Evaluación de Riesgos',
        items: [
          {
            label: 'Evaluación Nutricional Especializada (ENE)'
          },
          {
            label: 'Tamizaje del Riesgo Nutricional en Pediatría'
          },
          {
            label: 'Registro de Crecimiento Ponderal en el Prematuro'
          },
          {
            label: 'Tamizaje del Riesgo Nutricional en el Adulto (NRS 2002)*'
          },
          {
            label: 'Valoración de Riesgo de Caídas en Adultos - Escala J. H. Downton'
          },
          {
            label: 'Valoración de Riesgo de Caídas en Pediatría - Escala Humpty Dumpty'
          },
          {
            label: 'Tamizaje de Riesgo Nutricional en Cuidados Intermedios e Intensivos'
          },
        ]
      }
    ];
  }

}
