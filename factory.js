class Factory{
    constructor(location, owner){
        this.location = location 
        this.owner = owner
        this.vehicles = []
    }
    createVehicle(vehicle){
        this.vehicles.push(vehicle)
    }
    paintVehicle(vin, painColor){
        let vIndex = this.vehicles.findIndex(v => v.vin === vin)
        this.vehicles[vIndex].paint(painColor)
    }
    listVehicles(){
        return this.vehicles
    }
}



