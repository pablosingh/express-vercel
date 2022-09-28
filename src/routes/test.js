
// const person = require('./models/person');
const Test = async (req, res) => {
    await res.json({ message: "test" });
};

module.exports = Test;