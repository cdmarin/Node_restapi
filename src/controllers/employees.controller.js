import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM EMPLOYEE WHERE");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong. " + error.message
        });
    }
}

export const getEmployeeId = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM EMPLOYEE WHERE ID=?", [req.params.id]);
        if (rows.length == 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong. " + error.message
        });
    }
}

export const postEmployees = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const [rows] = await pool.query("INSERT INTO EMPLOYEE (NAME, SALARY) VALUES (?,?)", [name, salary]);
        console.log(rows);
        res.send({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong. " + error.message
        });
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM EMPLOYEE WHERE ID=?", [req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong. " + error.message
        });
    }
}

export const putEmployees = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {
        const [result] = await pool.query("UPDATE EMPLOYEE SET NAME = IFNULL(?,NAME), SALARY = IFNULL(?,SALARY) WHERE ID = ?", [name, salary, id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.json({
            message: "Received"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong. " + error.message
        });
    }
}
