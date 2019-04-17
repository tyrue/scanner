var db = require('./db');
var IB_table = "scanner_ib";
var ET_table = "scanner_et";

exports.sendAlive = function (req, res) {
    var post = req.body;
    console.log(`${post[0].scid} is alive~`);
}

exports.sendSignal = function (req, res) {
    var post = req.body;
    if (post[0].type === 'IB') {
        console.log("IB action");
        /*
        db.query(`
            INSERT INTO ${IB_table} (id, type, uuid, mac, mjid, mnid, rssi, txpw) 
            VALUES(?, ?, ?, ?, ?, ?, ?, ?);`, 
            [post[0].scid, post[0].type, post[0].uuid, post[0].mac, post[0].mjid, post[0].mnid, post[0].rssi, post[0].txpw],
            function (error, result) {
                if (error) {
                    throw error;
                }
            }
        );*/
        
    } else if (post[0].type === 'ET') {
        console.log("ET action");
        /*
        db.query(`
            INSERT INTO ${IB_table} (id, type, mac, batt, temp, advc, sinc) 
            VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
            [post[0].scid, post[0].type, post[0].mac, post[0].batt, post[0].temp, post[0].advc, post[0].sinc],
            function (error, result) {
                if (error) {
                    throw error;
                }
            }
        );*/
    }
}

exports.result = function (req, res) {
    var data;
    db.query(`select * from ${IB_table}`, function (error, result) {
        if (error) {
            throw error;
        }
        for(var i in result[0])
        {
            console.log(i);
        }
        data = result[0];
        res.render('result', { title: 'result', datas: data, time: Date() });
    });
}