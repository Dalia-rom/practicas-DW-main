// app/config/env.js
const env = {
  database: 'neondb',
  username: 'neondb_owner',
  password: 'npg_slTOG0q2pZkE',
  host: 'ep-royal-dust-a49bhpga-pooler.us-east-1.aws.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
