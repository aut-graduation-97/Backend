const User = require('../../models/user');

module.exports = {
    findUser(studentId) {
        return User.findOne({studentId});
    },

    addFirstTarin(studentId, tarinId, meId) {
        return User.updateOne({studentId}, {
            $push: {
                tarin: {
                    property: tarinId,
                    'voters': meId
                }
            }
        });
    },

    async addVoter(studentId, tarinId, meId, key) {
        let user = await User.findOne({studentId, 'tarin.property': tarinId});
        user.tarin[key].voters.push(meId);
        await user.save();
    }
};
