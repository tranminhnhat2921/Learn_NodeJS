import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log(results);
            return res.render('index.ejs', {dataUser: JSON.stringify(results)});
        }
    );
}

module.exports = {
    getHomePage
}