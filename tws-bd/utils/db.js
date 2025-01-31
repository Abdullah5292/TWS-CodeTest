import sql from 'mssql';

const config = {
    user: 'sa', // SQL Server username
    password: 'DB_Password', // SQL Server password
    server: 'localhost', // SQL Server host
    database: 'TWS_Db',
    options: {
        encrypt: true, // for Azure
        trustServerCertificate: true, // for local dev environments
    },
};

export const poolPromise = new sql.ConnectionPool(config).connect();
