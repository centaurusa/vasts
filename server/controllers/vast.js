const Vast = require('../models/vast');

exports.fetchVast = (req, res) => {
    console.log('fetching vast');
};

exports.createVast = (req, res) => {
    console.log('creating vast');
    const { vastUrl, position, hideUI } = req.query;
    Vast.create({
        vast_url: vastUrl,
        position,
        hide_ui: hideUI
    })
    .then(result => {
        console.log('result', result);
    })
    .catch(err => console.log('err'));
}