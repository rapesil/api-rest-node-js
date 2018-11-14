var winston = require('winston')

module.exports = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        level: "info",
        filename: "logs/payfast.log",
        maxsize: 1048576,
        maxFiles: 10,
        colorize: false
      })
    ]
  })