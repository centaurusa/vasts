const Vast = require('../models/vast');

exports.fetchVast = (req, res) => {
    console.log('fetching vast');
};

exports.createVast = (req, res) => {
    const { vastUrl, position, hideUI } = req.query;
    Vast.create({
        vast_url: vastUrl,
        position,
        hide_ui: hideUI
    })
    .then(result => {
        console.log('result', result);
        res.status(201).json({ message: 'vast created'});
    })
    .catch(err => {
        console.log('err', err);
        res.status(403).json({ error: err });
    });
}