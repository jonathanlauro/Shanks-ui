import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'column-bar',
    templateUrl: './column-bar.component.html',
    styleUrls: ['./column-bar.component.scss'],

})
export class ColumnBarComponent implements OnInit {

    @Input()data: Data [] = []
    @Input() size: 'sm' | 'md' | 'lg' | 'x-lg' = 'md';
    @Input() styleTheme: 'darkMode' | 'lightMode' = 'lightMode';

    private maiorValor: number = 0;
    private menorValor: number = 0;


    ngOnInit(): void {
        const valores = this.data.map(item => item.value);
        this.maiorValor = Math.max(...valores);
        this.menorValor = Math.min(...valores);
    }


    protected calcularPorcentagem(value: number) {
        // Ajusta os valores para o intervalo de 10 a 100%
        const valorAjustado = ((value - this.menorValor) / (this.maiorValor - this.menorValor)) * 90 + 10;
        return this.arredondar(parseFloat(valorAjustado.toFixed(2)));
    }

    private arredondar(numero: number) {
        const dezenaMaisProxima = Math.round(numero / 10) * 10;
        return dezenaMaisProxima;
    }

    protected retornaHeightAnimado(valor: number) {
        switch (valor) {
            case 0 :
                return "zero-pct";
            case 10 :
                return "dez-pct";
            case 20 :
                return "vinte-pct";
            case 30 :
                return "trinta-pct";
            case 40 :
                return "quarenta-pct";
            case 50 :
                return "cinquenta-pct";
            case 60 :
                return "sessenta-pct";
            case 70 :
                return "setenta-pct";
            case 80 :
                return "oitenta-pct";
            case 90 :
                return "noventa-pct";
            case 100 :
                return "cem-pct";
            default:
                return "zero-pct"
        }
    }
}

export interface Data {
    title: string;
    value: number;
    backgroundStyle: {
        color: string
    }
}
