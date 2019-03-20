package repositories


// sql statements

const listAllNewsStatement = `SELECT * FROM news`
const getNewsByIdStatement = `SELECT * FROM news WHERE news.id = ?`
const insertNewsStatement = `INSERT INTO news (title, content) VALUES ( ? , ? )`
const deleteNewsStatement = `DELETE FROM news WHERE news.id = ?`