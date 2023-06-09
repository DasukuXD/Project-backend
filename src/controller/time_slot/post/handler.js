const connection = require("../../../connection");
const { v4: uuidv4 } = require("uuid");

const handlerTimeSlot = (req, res) => {
  const { time_slot1, time_slot2, time_slot3, time_slot4 } = req.body;
  const { report_id } = req.params;

  const time_id = uuidv4();
  const active = 1;

  try {
    connection.query(
      `INSERT INTO 
        TIME_SLOT (
            time_id,
            report_id,
            time_slot1,
            time_slot2,
            time_slot3,
            time_slot4,
            active
        )
        VALUES
        (
            ${connection.escape(time_id)},
            ${connection.escape(report_id)},
            ${connection.escape(time_slot1)},
            ${connection.escape(time_slot2)},
            ${connection.escape(time_slot3)},
            ${connection.escape(time_slot4)},
            ${connection.escape(active)}
        );`,
      (err, _result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }
        connection.query(
          `UPDATE REPORT SET is_new_time = 0 WHERE report_id = ${connection.escape(
            report_id
          )};`,
          (err, result, _fields) => {
            if (err) {
              return res.status(400).send(err);
            }
            return res.status(200).json({ result: result });
          }
        );
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerTimeSlot;
