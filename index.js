// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return (this.radius + this.radius)
    }
    set diameter(diameter){
        this.radius = diameter/2
    }

    get circumference(){
        return (this.radius * 2) * 3.14
    }

    set circumference(circumference){
        this.radius = circumference/(3.14*2)
    }

    get area(){
        return 3.14 * (this.radius * this.radius)
    }

    
}