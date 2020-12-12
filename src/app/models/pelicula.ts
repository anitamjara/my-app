//cuando exportamos damos la oportunidad de utilizarlo en otro fichero.
export class Pelicula{
    /*public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/

    constructor(
        public title: string,
        public year: number,
        public image: string
    ){}
}