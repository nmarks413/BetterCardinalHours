import https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js
function init() {
    Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vTcg7Z5qp8bXxdjED6BQVW2-_d0GRSQcxVlMuMRzlotM4xk5CoujAqgdHm4-OEpL3-PBGhSQ4oXqywE/pubhtml',
        callback: function(data, tabletop) {
            console.log(data)
        },
    simpleSheet: true } )
}

window.addEventListener(‘DOMContentLoaded’, init)
