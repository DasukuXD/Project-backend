CREATE TABLE IF NOT EXISTS FUNCTION_LIST (
    function_id int NOT NULL,
    function_name_th VARCHAR(255) NOT NULL,
    function_name_en VARCHAR(255) NOT NULL,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (function_id)) DEFAULT CHARSET= utf8;