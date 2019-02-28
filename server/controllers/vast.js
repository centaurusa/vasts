const Vast = require('../models/vast');
const { validationResult } = require('express-validator/check');
const { generateVastXML, generateEmptyVastXML } = require('../util/vast-generator');

exports.fetchVast = async (req, res) => {
    const { id } = req.query;
    try {
        const vast = await Vast.findById(id);
        res.setHeader('Content-Type', 'text/xml');
        if (!vast) {
            const emptyVastXML = generateEmptyVastXML();
            return res.status(200).send(emptyVastXML);
        } else {
            const vastXML = generateVastXML(vast);
            return res.status(200).send(vastXML);
        }
    } catch(err) {
        return res.status(404).json({ err });
    }
};

exports.createVast = async (req, res) => {
    const { vastURL, position, hideUI } = req.query;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
        await Vast.create({
            vast_url: vastURL,
            position,
            hide_ui: hideUI
        });
        return res.status(201).json({ message: 'vast created'});
    } catch (err) {
        console.log('err', err);
        return res.status(403).json({ error: err });
    }
}