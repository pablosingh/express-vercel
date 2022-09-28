
const test = async (req, res) => {
    await res.json({ message: "test" });
};

module.exports = test;