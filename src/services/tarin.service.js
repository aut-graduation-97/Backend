const {findUser, addFirstTarin, addVoter} = require('../db/queries/tarin/update');

module.exports = {
    async updateTarin(student_id, tarin_id, user_info){
        let student = await findUser(student_id)
        let user = await findUser(user_info.student_id)
        let voteResult = []
        let voted = []
        voted[0] = false
        voted[1] = voteResult

        if(student.tarin.length == 0){
            tarin_id.map(async id => {
                await this.addNewTarin(student_id, id, user._id)
            })
            voted[0] = true
            return voted

        }else{
            let properties = student.tarin.map(obj => parseInt(obj.property))

            tarin_id.map(async id => {
                if(properties.includes(id)){
                    student.tarin.map(async (row, i) => {
                        if(tarin_id.includes(parseInt(row.property))){
                            //Check voter
                            if(row.voters.includes(user._id)){
                                voteResult.push(parseInt(row.property))
                            }else{
                                console.log("in adding voter");
                                voted[0] = true
                                await addVoter(student_id, row.property, user._id, i)
                            }
                        }
                    })

                }else{
                    console.log('We have tarin property, add new one')
                    voted[0] = true
                    await this.addNewTarin(student_id, id, user._id)
                }
            })
            
            voteResult = [...new Set(voteResult)]
            voted[1] = voteResult
            return voted
        }
        
    },

    async addNewTarin(student_id, id, _id){
        return await addFirstTarin(student_id, id, _id)
    },
}
