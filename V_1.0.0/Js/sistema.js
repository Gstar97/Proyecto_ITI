class Sistema {
    constructor() {
        this.barrios = [
            new Barrio(2, "Palermo"),
            new Barrio(3, "Punta Carretas"),
            new Barrio(4, "Barrio Sur"),
            new Barrio(5, "Punta Gorda"),
            new Barrio(6, "Malvin"),
            new Barrio(7, "Buceo"),
            new Barrio(8, "Pocitos"),
            new Barrio(9, "Cordon"),
            new Barrio(10, "Carrasco"),
            new Barrio(11, "Ciudad Vieja"),
            new Barrio(12, "Aguada"),
            new Barrio(13, "Carrasco Norte"),
            new Barrio(14, "Paso de las Duranas"),
            new Barrio(15, "La Comercial"),
            new Barrio(16, "Colon Sureste, Abayuba"),
            new Barrio(17, "Centro"),
            new Barrio(18, "Malvin Norte"),
            new Barrio(19, "Pque. Batlle, V. Dolores"),
            new Barrio(20, "Tres Cruces"),
            new Barrio(21, "Larrañaga"),
            new Barrio(22, "Jacinto Vera"),
            new Barrio(23, "La Blanqueada"),
            new Barrio(24, "Bañados de Carrasco"),
            new Barrio(25, "Aires Puros"),
            new Barrio(26, "Prado, Nueva Savona"),
            new Barrio(27, "La Figurita"),
            new Barrio(28, "Lezica, Melilla"),
            new Barrio(29, "Brazo Oriental"),
            new Barrio(30, "Villa Garcia, Manga Rur."),
            new Barrio(31, "Capurro, Bella Vista"),
            new Barrio(32, "Las Canteras"),
            new Barrio(33, "Atahualpa"),
            new Barrio(34, "Reducto"),
            new Barrio(35, "Tres Ombues, Victoria"),
            new Barrio(36, "Paso de la Arena"),
            new Barrio(37, "Villa Española"),
            new Barrio(38, "Mercado Modelo, Bolivar"),
            new Barrio(39, "Villa Muñoz, Retiro"),
            new Barrio(40, "Peñarol, Lavalleja"),
            new Barrio(41, "Cerrito"),
            new Barrio(42, "Conciliacion"),
            new Barrio(43, "Nuevo Paris"),
            new Barrio(44, "Sayago"),
            new Barrio(45, "Colon Centro y Noroeste"),
            new Barrio(46, "Castro, P. Castellanos"),
            new Barrio(47, "La Teja"),
            new Barrio(48, "Manga, Toledo Chico"),
            new Barrio(49, "Ituzaingo"),
            new Barrio(50, "Manga"),
            new Barrio(51, "Jardines del Hipodromo"),
            new Barrio(52, "Maroñas, Parque Guarani"),
            new Barrio(53, "La Paloma, Tomkinson"),
            new Barrio(54, "Casabo, Pajas Blancas"),
            new Barrio(55, "Pta. Rieles, Bella Italia"),
            new Barrio(56, "Las Acacias"),
            new Barrio(57, "Piedras Blancas"),
            new Barrio(58, "Union"),
            new Barrio(59, "Belvedere"),
            new Barrio(60, "Casavalle"),
            new Barrio(61, "Flor de Maroñas"),
            new Barrio(62, "Cerro")
        ];

        this.registros = [

        ];
    }

    verificarRegistroRepetido(unaCedulaRegistro, unEmailRegistro) {
        for (const unRegistro of this.registros) {
            if (unRegistro.cedula === unaCedulaRegistro || unRegistro.email === unEmailRegistro) {
                return true;
            } else {
            }
            return false;
        }
    }
}
