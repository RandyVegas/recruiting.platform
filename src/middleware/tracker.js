const tracker = async (req, res, next) => {
    try {
        if (req.headers['origin'] !== "https://weboffice.tinkoff.ru") {
            throw new Error();
        }
        
        next();
    } catch(e) {
        res.status(401).send({error: 'Thats domain not tracking.'})
    }
}

module.exports = tracker