var db = require('./db');
var day = require('./date');
var IB_table = "scanner_ib";

exports.sendAlive = function (req, res) {
    var post = req.body;
    console.log(`${post[0].scid} is alive~`);
}

exports.sendSignal = function (req, res) {
    var post = req.body;
    day = new Date();
    day = day.format("yyyy-MM-dd a/p hh:mm:ss");
    if (post[0].type === "IB") {
        console.log("IB action");
        //console.log(post);
        /*
        db.query(`
        INSERT INTO ${IB_table} (id, type, uuid, mac, mjid_batt, mnid_temp, rssi_adv, txpw, time) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
            [post[0].scid, post[0].type, post[0].uuid, post[0].mac, post[0].mjid, post[0].mnid, post[0].rssi, post[0].txpw, day],
            function (error, result) {
                if (error) {
                    throw error;
                }
            }
        );*/
    } else if (post[0].type === "ET") {
        console.log("ET action");
        console.log(post);
        /*
        db.query(`
        INSERT INTO ${IB_table} (id, type, uuid, mac, mjid_batt, mnid_temp, rssi_adv, time) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
            [post[0].scid, post[0].type, post[0].mac, post[0].mac, post[0].batt, post[0].temp, post[0].advc, day],
            function (error, result) {
                if (error) {
                    throw error;
                }
            }
        );*/
    }
}

exports.result = function (req, res) {
    db.query(`select * from ${IB_table} order by scan_num desc`, function (error, result) {
        if (error) {
            throw error;
        }
        day = new Date();
        day = day.format("yyyy-MM-dd a/p hh:mm:ss");
        res.render('result', {
            title: 'result',
            datas: result,
            time: day
        });
    });
}