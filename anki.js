// super digit
// find the lowest digit sum of where a = [X1,X2,...Xn)] where string(a[0]..a.length()]) is an input = b
const superDigit = {
    superDigit: '',
    rounding(){
        this.superDigit = this.superDigit.slice(0,-1)
    },
    checkDigit(){
        if(this.superDigit <= 0){
            return 'wrong input'
        }
        if(this.superDigit.length > 1){
            this.superDigit.pop()

            this.checkDigit()
        }

        return bool
    },
}

function superDigit(n = '12345'){
    let sum = n.split().reduce( (cu,e) => ce+=e,0)
    let superDigit = String(sum)
    if(superDigit.length > 1){
        superDigit.pop()
        return superDigit(superDigit)
    }else if(superDigit.length <= 0) return 'invalid arg superDigit not a string of size greater than one of Digits consisting of a whole Number'

}
