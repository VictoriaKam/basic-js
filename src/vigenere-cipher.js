class VigenereCipheringMachine {
        constructor(machType=true){
        if (machType === undefined) throw new Error();
        this.machType = machType;
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    }
    encrypt(msg, key) {
        if (msg === undefined || key === undefined) throw new Error();
        let k = key.toUpperCase().split('');
        let p = 0;
        let r = msg.toUpperCase().split('').map( x => {
            if (this.abc.indexOf(x) >= 0){
                let s = this.abc.indexOf(k[p]);
                let n = (s + this.abc.indexOf(x)) % this.abc.length;
                p = ++p % k.length;
                return this.abc[n];
            }
            return x;
        } );
        return this.machType ? r.join('') : r.reverse().join('');
    }

    decrypt(msg, key) {
        if (msg === undefined || key === undefined) throw new Error();
        let k = key.toUpperCase().split('');
        let p = 0;
        let r = msg.toUpperCase().split('').map( x => {
            if (this.abc.indexOf(x) >= 0){
                let s = this.abc.indexOf(k[p]);
                let n = (this.abc.indexOf(x) - s);
                if (n < 0) n += this.abc.length
                p = ++p % k.length;
                return this.abc[n];
            }
            return x;
        } )
        return this.machType ? r.join('') : r.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
