class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        this.data[this._hash(key)] = value;
    }
    get(key){
        return this.data[this._hash(key)];
    }

}


let hash = new HashTable(10);

hash.set('youcef', 1337);
console.log(hash.get('youcef'));