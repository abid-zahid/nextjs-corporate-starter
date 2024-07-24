module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5433),
      database: env("DATABASE_NAME", "smartai"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
