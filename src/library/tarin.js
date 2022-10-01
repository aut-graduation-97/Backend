module.exports = new class order {

    tarin() {
        return [
            {
                id: 1,
                name: 'بهترین'
            },
            {
                id: 2,
                name: 'درس‌خوان‌ترین'
            },
            {
                id: 3,
                name: 'گیک‌ترین'
            },
            {
                id: 4,
                name: 'بی‌اعصاب‌ترین'
            },
        ]
    }

    findTarin(id){
        let res = this.tarin().filter(rows => id == rows.id);
        return res ? res[0] : null
    }
    
}