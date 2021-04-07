const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');  // Logging middleware
const fs = require('fs');

app.use(morgan('dev'));  // 'dev', 'short', 'tiny'. or no argument (default)
app.use(cors());
app.use(express.json());

app.listen(3939, () => {
    console.log('Server running on port 3939');
});
/**
 * 200      OK                      The request was successfully completed.
 * 201      Created                 A new resource was successfully created.
 * 400      Bad Request             The request was invalid.
 * 401      Unauthorized            The request did not include an authentication token or the authentication token was expired.
 * 403      Forbidden               The client did not have permission to access the requested resource.
 * 404      Not Found               The requested resource was not found.
 * 405      Method Not Allowed      The HTTP method in the request was not supported by the resource. For example, the DELETE method cannot be used with the Agent API.
 * 409      Conflict                The request could not be completed due to a conflict. For example,  POST ContentStore Folder API cannot complete if the given file or folder name already exists in the parent location.
 * 500      Internal Server Error   The request was not completed due to an internal error on the server side.
 * 503      Service Unavailable     The server was unavailable.
 */

const CODE = {
    /** 200      OK                      The request was successfully completed. */
    '200': 200,
    /** 201      Created                 A new resource was successfully created. */
    '201': 201,
    /** 400      Bad Request             The request was invalid. */
    '400': 400,
    /** 401      Unauthorized            The request did not include an authentication token or the authentication token was expired. */
    '401': 401,
    /** 403      Forbidden               The client did not have permission to access the requested resource. */
    '403': 403,
    /** 404      Not Found               The requested resource was not found. */
    '404': 404,
    /** 405      Method Not Allowed      The HTTP method in the request was not supported by the resource. For example, the DELETE method cannot be used with the Agent API. */
    '405': 405,
    /** 409      Conflict                The request could not be completed due to a conflict. For example,  POST ContentStore Folder API cannot complete if the given file or folder name already exists in the parent location. */
    '409': 409,
    /** 500      Internal Server Error   The request was not completed due to an internal error on the server side. */
    '500': 500,
    /** 503      Service Unavailable     The server was unavailable. */
    '503': 503
}

const topics = require('./explore/explore-category.json');

// function formatSearchString(str = '') {
//     return str.replace(' ', '').toLowerCase();
// }

// function isNullOrUndefined(value) {
//     return [null, undefined].indexOf(value) !== -1;
// }

app.get('/api/explore/category', (req, res, next) => {
    res.status(CODE[200]).jsonp(topics);
});

app.get('/api/explore/category/:id', (req, res, next) => {
    const { id } = req.params;
    res.status(CODE[200]).jsonp(topics);
});

// app.post('/api/topics-history', (req, res, next) => {
//     let newTopicsHistory = topicsHistory;
//     let { id, date, name, iconName } = req.body;
//     if (Object.keys(req.body).length === 0
//         || isNullOrUndefined(id) === true
//         || isNullOrUndefined(date) === true
//         || isNullOrUndefined(name) === true
//         || isNullOrUndefined(iconName) === true) {
//         res.status(200).json({ error: 'Invalid body' });
//         return;
//     }

//     let foundTopic = newTopicsHistory.find(t => t.id === id);
//     if (isNullOrUndefined(foundTopic) === false) {
//         foundTopic.date = date;
//     } else {
//         newTopicsHistory.push({
//             id,
//             date,
//             name,
//             iconName,
//         });
//     }

//     fs.writeFile('./history/topics-history.json', JSON.stringify(newTopicsHistory), (error) => {
//         if (error)
//             res.status(404).json({ error: error.message });
//         else res.status(201).json({ message: 'Thêm chủ đề được xem gần nhất thành công' });
//     });
// });