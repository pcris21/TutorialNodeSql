var express = require('express');
var router = express.Router();


var config = {
    server: 'NB8718',
    database: 'TutorialNodeSql2',
    user: 'sa',
    password : '@ndre1980'
}


router.execProcedureQuery = function (req, res, arrayParameters, callback) {
    var sql = require('mssql');
    var conn = new sql.Connection(config);
    var request = new sql.Request(conn);
    var procedureNane = req.body;

    debugger;
    if (null != arrayParameters) {
        addParameter(sql, request, arrayParameters);
    }

    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        request.execute(procedureNane).then(function (resultsets) {
            callback(resultsets);
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    });
};

router.execProcedureOutput = function (req, res, arrayParameters,parameterOut,callback) {
    var sql = require('mssql');
    var conn = new sql.Connection(config);
    var request = new sql.Request(conn);
    var procedureNane = req.body;

    debugger;
    if (null != arrayParameters) {
        addParameter(sql, request, arrayParameters);
    }

    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        request.execute(procedureNane).then(function (resultsets) {
            console.log(request.parameters[parameterOut]);
            callback(request.parameters[parameterOut]);
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    });
};

var addParameter = function (sql, request, arrayParameters) {
    var length = arrayParameters.length;
    for (var i = 0; i < length; i++) {
        if (arrayParameters[i].TypePut === 'input') {
            if (arrayParameters[i].DataType === 'Bit') {
                request.input(arrayParameters[i].Name, sql.Bit, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Int') {
                request.input(arrayParameters[i].Name, sql.Int, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'BigInt') {
                request.input(arrayParameters[i].Name, sql.BigInt, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Date') {
                request.input(arrayParameters[i].Name, sql.Date, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'DateTime') {
                request.input(arrayParameters[i].Name, sql.DateTime, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Char') {
                request.input(arrayParameters[i].Name, sql.Char(arrayParameters[i].Size), arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'VarChar') {
                request.input(arrayParameters[i].Name, sql.VarChar(arrayParameters[i].Size), arrayParameters[i].Value);
            }
        }
        else {
            if (arrayParameters[i].DataType === 'Bit') {
                request.output(arrayParameters[i].Name, sql.Bit, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Int') {
                request.output(arrayParameters[i].Name, sql.Int, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'BigInt') {
                request.output(arrayParameters[i].Name, sql.BigInt, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Date') {
                request.output(arrayParameters[i].Name, sql.Date, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'DateTime') {
                request.output(arrayParameters[i].Name, sql.DateTime, arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'Char') {
                request.output(arrayParameters[i].Name, sql.Char(arrayParameters[i].Size), arrayParameters[i].Value);
            }
            else if (arrayParameters[i].DataType === 'VarChar') {
                request.output(arrayParameters[i].Name, sql.VarChar(arrayParameters[i].Size), arrayParameters[i].Value);
            }
        }
    }
}

module.exports = router;
