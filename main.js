let app = new Vue({
    el: '#app',
    data: {
        id: 1,
        compra: false,
        tituloArticulo: 'Zapatos',
        carrito: 0,
        detalles: [
            '80% algodon',
            'Zuela blanca',
            'Genero neutral'
        ],
        variantes: [
            {
                color: 'negro',
                imagen: 'img/tenis-png-negro.png',
                cantidad: 7,
            },
            {
                color: 'verde',
                imagen: 'img/tenis-png-verde.png',
                cantidad: 3,
            },
        ]
    },
    methods: {
        agregar(){
            console.log("agregado");
            if(this.carrito >=0 ){
                this.carrito +=1
                this.variantes[this.id].cantidad -=1;
            }
        },
        quitar(){
            if(this.carrito > 0){
                this.carrito -=1
                this.variantes[this.id].cantidad +=1;
            }
        },
        comprar(){
            if(this.carrito > 0){
                this.carrito = 0;
                this.compra = true;
                setTimeout(() =>{
                    this.compra = false;
                }, 2000);
            }
        },
        seleccionado(index){
            console.log(index);
            this.id = index;
        },
    },
    computed: {
        imagen(){
            return this.variantes[this.id].imagen;
        },
        titulo(){
            return this.tituloArticulo + ' ' + this.variantes[this.id].color;
        },
        inventario(){
            return this.variantes[this.id].cantidad;
        },
        cantidad(){
            if(this.variantes[this.id].cantidad === 0){
                return true;
            }

        }
    }
});