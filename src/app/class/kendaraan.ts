export class Kendaraan {

    roda:number = 0;
    mesin:string = "";

    setRoda(roda: number){
        this.roda = roda;
    }

    setMesin(mesin: string){
        this.mesin = mesin;
    }

    getRoda(): number{
        return this.roda;
    }

    getMesin(): string{
        return this.mesin;
    }
}
