const Person = require('./models/Person');

const createPerson = async (req, res) => {
    await res.json({ msg: 'create person'});
    // try{
    //     const { name, balance } = req.body;
    //     const newPerson = await Person.create({
    //         name,
    //         balance
    //     });
    //     res.json( { msg: "usuario creado", person: newPerson });
    // } catch (error) {
    //     return res.status(500).json({ message: error.message });   
    // }
};

module.exports = createPerson;