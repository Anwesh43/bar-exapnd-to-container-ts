const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const scGap : number = 0.02 / parts 
const strokeFactor : number = 90 
const delay : number = 20 
const rot : number = Math.PI / 2
const sizeFactor : number = 6.9 
const backColor : string = "#BDBDBD" 
const colors : Array<string> = [
    "#f44336",
    "#00C853",
    "#311B92",
    "#FFC107",
    "#AA00FF"
]

class ScaleUtil {
    
    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}